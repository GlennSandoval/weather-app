import type { Current } from "@/models";

export function CurrentWeather({ current }: { current: Current }) {
	const condition = current.condition;
	return (
		<div className="flex flex-col gap-4">
			<div className="text-3xl">Current Weather</div>
			<div className="p-4 border rounded-lg backdrop-blur-sm shadow-md">
				<div className="flex items-center gap-4">
					<div className="flex flex-col">
						<p className="text-6xl font-bold opacity-95">{current.temp_c}°C</p>
						<p className="text-gray-300 ">{condition?.text}</p>
					</div>
					<img
						src={condition?.icon}
						alt={condition?.text}
						className="w-32 h-32"
					/>
				</div>
				<div>Feels like: {current.feelslike_c || current.temp_c}</div>
				<div className="flex flex-row gap-6 ">
					<div className="flex flex-col items-center">
						<div>Humidity</div>
						<div>{current.humidity}%</div>
					</div>

					<div className="flex flex-col items-center">
						<div>Wind</div>
						<div>{current.wind_kph} kph</div>
					</div>

					<div className="flex flex-col items-center">
						<div>UV</div>
						<div>{current.uv}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
