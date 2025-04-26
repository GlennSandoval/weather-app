/**
 * Weather API
 *
 * Generated TypeScript interfaces from C# models
 */

import type { ForecastDay } from "./forecastDay";
import type { ForecastAstro } from "./forecastAstro";
import type { MarineHour } from "./marineHour";

/**
 * MarineForecastday
 */
export interface MarineForecastday {
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
	hour?: MarineHour[];
}
