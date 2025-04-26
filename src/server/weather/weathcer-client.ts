import type { InlineResponse2001 } from "../../models";
import { getData, saveData } from "../redis/redis";

const BASE_URL = "https://api.weatherapi.com/v1";
// https://api.weatherapi.com/v1/forecast.json?key=6d0597450b52411ba3650441252104&q=Wellington&days=1&aqi=no&alerts=no

export async function getForecast(): Promise<InlineResponse2001> {
	const cache = await getData("forecast-wellington");
	if (cache) {
		console.log("Using cached forecast");
		return JSON.parse(cache);
	}
	console.log("Fetching forecast from OpenWeather API");
	const url = `${BASE_URL}/forecast.json?key=${process.env.OPENWEATHER_API_KEY}&q=Wellington&days=1&aqi=no&alerts=no`;
	const response = await fetch(url);

	const data = await response.json();

	await saveData("forecast-wellington", JSON.stringify(data)); // Cache for 1 hour

	return data;
}
