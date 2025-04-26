/**
 * Weather API
 *
 * Generated TypeScript interfaces from C# models
 */

import type { ForecastDayCondition } from "./forecastDayCondition";

/**
 * ForecastDay
 */
export interface ForecastDay {
	/**
	 * Gets or Sets MaxtempC
	 */
	maxtemp_c?: number;

	/**
	 * Gets or Sets MaxtempF
	 */
	maxtemp_f?: number;

	/**
	 * Gets or Sets MintempC
	 */
	mintemp_c?: number;

	/**
	 * Gets or Sets MintempF
	 */
	mintemp_f?: number;

	/**
	 * Gets or Sets AvgtempC
	 */
	avgtemp_c?: number;

	/**
	 * Gets or Sets AvgtempF
	 */
	avgtemp_f?: number;

	/**
	 * Gets or Sets MaxwindMph
	 */
	maxwind_mph?: number;

	/**
	 * Gets or Sets MaxwindKph
	 */
	maxwind_kph?: number;

	/**
	 * Gets or Sets TotalprecipMm
	 */
	totalprecip_mm?: number;

	/**
	 * Gets or Sets TotalprecipIn
	 */
	totalprecip_in?: number;

	/**
	 * Gets or Sets AvgvisKm
	 */
	avgvis_km?: number;

	/**
	 * Gets or Sets AvgvisMiles
	 */
	avgvis_miles?: number;

	/**
	 * Gets or Sets Avghumidity
	 */
	avghumidity?: number;

	/**
	 * Gets or Sets DailyWillItRain
	 */
	daily_will_it_rain?: number;

	/**
	 * Gets or Sets DailyChanceOfRain
	 */
	daily_chance_of_rain?: number;

	/**
	 * Gets or Sets DailyWillItSnow
	 */
	daily_will_it_snow?: number;

	/**
	 * Gets or Sets DailyChanceOfSnow
	 */
	daily_chance_of_snow?: number;

	/**
	 * Gets or Sets Condition
	 */
	condition?: ForecastDayCondition;

	/**
	 * Gets or Sets Uv
	 */
	uv?: number;
}
