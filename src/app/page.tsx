import Image from "next/image";
import { HydrateClient, api } from "@/trpc/server";

export default async function Home() {
	const { forecast } = await api.weather.forecast();

	const data = forecast?.forecast;

	return (
		<HydrateClient>
			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
					<div>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</div>
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
