/**
 * Weather API
 *
 * Generated TypeScript interfaces from C# models
 */

import type { ForecastDay } from "./forecastDay";
import type { ForecastAstro } from "./forecastAstro";
import type { ForecastHour } from "./forecastHour";

/**
 * ForecastForecastday
 */
export interface ForecastForecastday {
	/**
	 * Gets or Sets Date
	 */
	date?: Date | string;

	/**
	 * Gets or Sets DateEpoch
	 */
	date_epoch?: number;

	/**
	 * Gets or Sets Day
	 */
	day?: ForecastDay;

	/**
	 * Gets or Sets Astro
	 */
	astro?: ForecastAstro;

	/**
	 * Gets or Sets Hour
	 */
	hour?: ForecastHour[];
}
