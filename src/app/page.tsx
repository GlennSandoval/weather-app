import { HydrateClient, api } from "@/trpc/server";
import { CurrentWeather } from "./component/current";

export default async function Home() {
	const { forecast: data } = await api.weather.forecast();

	const forecast = data?.forecast;
	const current = data?.current;
	const forecastDays = forecast?.forecastday;

	return (
		<HydrateClient>
			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-linear-to-t to-sky-600 from-indigo-600">
				<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
					{current ? (
						<CurrentWeather current={current} />
					) : (
						<div className="max-w-sm animate-pulse">
							<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
						</div>
					)}
				</main>
				<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
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
