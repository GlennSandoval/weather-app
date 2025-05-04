import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getForecast } from "@/server/weather/weathcer-client";

export const weatherRouter = createTRPCRouter({
	forecast: publicProcedure.query(async () => {
		try {
			const forecast = await getForecast();
			return {
				forecast,
			};
		} catch (error) {
			console.error("Error fetching forecast:", error);
			return {
				forecast: null,
			};
		}
	}),
});
