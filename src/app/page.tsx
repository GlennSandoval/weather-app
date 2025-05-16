import { HydrateClient, api } from "@/trpc/server";
import { CurrentWeather } from "./component/current";
import { ForecastView } from "./component/forecast";

const location = "wellington";

export default async function Home() {
	const { forecast: data } = await api.weather.forecast();

	const forecast = data?.forecast;
	const current = data?.current;
	const forecastDays = forecast?.forecastday;

	return (
		<HydrateClient>
			<div className="grid grid-rows-[80px_1fr_60px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-linear-to-t to-sky-600 from-indigo-600">
				<h1 className="font-extrabold text-4xl tracking-tight sm:text-[4rem]">
					<span className="transition duration-300 ease-in-out delay-150 hover:text-transparent bg-gradient-to-r from-red-600 via-green-500 to-indigo-400 bg-clip-text">
						{location.toLocaleUpperCase()}
					</span>
				</h1>
				<main className="flex flex-col items-start row-start-2">
					{current ? (
						<CurrentWeather current={current} />
					) : (
						<div className="max-w-sm animate-pulse">
							<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
						</div>
					)}
					<div style={{ height: "20px" }} />
					{forecastDays ? (
						<ForecastView forecast={forecastDays} />
					) : (
						<div className="max-w-sm animate-pulse">
							<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
						</div>
					)}
				</main>
				<footer className="row-start-3 bg-black w-full p-2 flex gap-[24px] flex-wrap items-center justify-center">
					Powered by
					<a href="https://www.weatherapi.com/" title="Free Weather API">
						<img
							src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
							alt="Weather data by WeatherAPI.com"
						/>
					</a>
				</footer>
			</div>
		</HydrateClient>
	);
}
