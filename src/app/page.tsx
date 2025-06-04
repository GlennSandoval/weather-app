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
			<div className="grid grid-rows-[80px_1fr_60px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-linear-to-t to-sky-500 from-indigo-700">
				<h1 className="font-extrabold text-4xl tracking-tight sm:text-[4rem]">
					<span className="transition duration-300 ease-in-out delay-150 hover:text-transparent bg-gradient-to-r from-red-600 via-green-500 to-indigo-400 bg-clip-text">
						{location.toLocaleUpperCase()}
					</span>
				</h1>
				<div
					id="back_image"
					className="absolute z-0 flex justify-center w-full max-h-full min-h-full opacity-20"
				>
					<img
						className="object-cover w-full"
						src="/assets/wellington.webp"
						alt={location}
					/>
				</div>
				<div className="relative flex justify-center w-full h-full row-start-2">
					<main className="z-10 flex flex-col items-start">
						{current ? (
							<CurrentWeather current={current} />
						) : (
							<div className="max-w-sm animate-pulse">
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
							</div>
						)}
						<div className="h-5" />
						{forecastDays ? (
							<ForecastView forecast={forecastDays} />
						) : (
							<div className="max-w-sm animate-pulse">
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
							</div>
						)}
						<div className="h-5" />
					</main>
				</div>
				<footer className="row-start-3 bg-black w-full p-2 flex gap-[24px] flex-wrap items-center justify-center z-20">
					Powered by
					<a href="https://www.weatherapi.com/" title="Free Weather API">
						<img
							src="https://cdn.weatherapi.com/v4/images/weatherapi_logo.png"
							alt="Weather data by WeatherAPI.com"
						/>
					</a>
				</footer>
			</div>
		</HydrateClient>
	);
}
