import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getForecast } from "@/server/weather/weathcer-client";

export const weatherRouter = createTRPCRouter({
	forecast: publicProcedure.query(async () => {
		const forecast = await getForecast();
		return {
			forecast,
		};
	}),
});
