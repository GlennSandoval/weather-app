import type { Current } from "@/models";

export function CurrentWeather({ current }: { current: Current }) {
	const condition = current.condition;
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-4">
				<img
					src={condition?.icon}
					alt={condition?.text}
					className="w-16 h-16"
				/>
				<div className="flex flex-col">
					<p className="text-3xl font-bold">{current.temp_c}°C</p>
					<p className="text-sm text-gray-500">{condition?.text}</p>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<p>Humidity: {current.humidity}%</p>
				<p>Wind: {current.wind_kph} kph</p>
			</div>
			<pre>{JSON.stringify(current, null, 2)}</pre>
		</div>
	);
}
