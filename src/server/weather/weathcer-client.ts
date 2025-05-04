import type { InlineResponse2001 } from "../../models";
import { getData, saveData } from "../redis/redis";

// Base URL for the Weather API
const BASE_URL = "https://api.weatherapi.com/v1";

type ForecastParams = {
	// The location for which to fetch the forecast
	q: string;
	// The number of days to fetch the forecast for
	days: number;
	// Whether to include air quality information
	aqi: string;
	// Whether to include alerts
	alerts: string;
};

const defaultParams: ForecastParams = {
	q: "Wellington",
	days: 5,
	aqi: "no",
	alerts: "no",
};

function ForecastParamsToString(params: ForecastParams) {
	// Convert the forecast parameters to a string for caching
	return `forecast:q=${params.q}&days=${params.days}&aqi=${params.aqi}&alerts=${params.alerts}`;
}

// Function to fetch the weather forecast for Wellington
export async function getForecast(
	p?: Partial<ForecastParams>,
): Promise<InlineResponse2001> {
	const params = { ...defaultParams, ...p };
	const paramsKey = ForecastParamsToString(params);

	// Attempt to retrieve the forecast from the cache
	const cache = await getData(paramsKey);
	if (cache) {
		// If cached data exists, log a message and return the cached forecast
		console.log("Using cached forecast");
		return JSON.parse(cache);
	}

	// If no cached data, log a message and fetch the forecast from the Weather API
	console.log("Fetching forecast from OpenWeather API");
	const url = `${BASE_URL}/forecast.json?key=${process.env.OPENWEATHER_API_KEY}&q=${params.q}&days=${params.days}&aqi=${params.aqi}&alerts=${params.alerts}`;
	const response = await fetch(url);

	if (!response.ok) {
		// Throw an error if the response status is not OK
		throw new Error(`Error fetching forecast: ${response.statusText}`);
	}

	const data = await response.json();

	if (data.error) {
		// Throw an error if the API response contains an error message
		throw new Error(`Error fetching forecast: ${data.error.message}`);
	}

	// Save the fetched forecast data to the cache for future use. The weather does not change often, so we can cache it for 15 minutes.
	await saveData(paramsKey, JSON.stringify(data));

	return data;
}
