import type { Forecast, ForecastDay, ForecastForecastday } from "@/models";

export function ForecastView({
	forecast,
}: { forecast: Array<ForecastForecastday> }) {
	const today = new Date();

	return (
		<div className="flex flex-col gap-4">
			<div className="text-3xl">Forecast</div>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
				{forecast.map((forecastDay: ForecastForecastday, i) => {
					return (
						<div
							key={forecastDay?.date_epoch}
							className="flex flex-col items-center p-4 border rounded-lg shadow-md backdrop-blur-sm"
						>
							<p className="text-xl font-bold">
								{forecastDay.date?.toString()}
							</p>
							<img
								src={forecastDay?.day?.condition?.icon}
								alt={forecastDay?.day?.condition?.text}
								className="w-24 h-24"
							/>
							<p>{forecastDay?.day?.condition?.text}</p>
							<p>Max: {forecastDay?.day?.maxtemp_c}°C</p>
							<p>Min: {forecastDay?.day?.mintemp_c}°C</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
