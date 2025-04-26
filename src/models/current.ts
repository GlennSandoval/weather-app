/**
 * Weather API
 *
 * Generated TypeScript interfaces from C# models
 */

import type { CurrentCondition } from "./currentCondition";
import type { CurrentAirQuality } from "./currentAirQuality";

/**
 * Current
 */
export interface Current {
	/**
	 * Gets or Sets LastUpdatedEpoch
	 */
	last_updated_epoch?: number;

	/**
	 * Gets or Sets LastUpdated
	 */
	last_updated?: string;

	/**
	 * Gets or Sets TempC
	 */
	temp_c?: number;

	/**
	 * Gets or Sets TempF
	 */
	temp_f?: number;

	/**
	 * Gets or Sets IsDay
	 */
	is_day?: number;

	/**
	 * Gets or Sets Condition
	 */
	condition?: CurrentCondition;

	/**
	 * Gets or Sets WindMph
	 */
	wind_mph?: number;

	/**
	 * Gets or Sets WindKph
	 */
	wind_kph?: number;

	/**
	 * Gets or Sets WindDegree
	 */
	wind_degree?: number;

	/**
	 * Gets or Sets WindDir
	 */
	wind_dir?: string;

	/**
	 * Gets or Sets PressureMb
	 */
	pressure_mb?: number;

	/**
	 * Gets or Sets PressureIn
	 */
	pressure_in?: number;

	/**
	 * Gets or Sets PrecipMm
	 */
	precip_mm?: number;

	/**
	 * Gets or Sets PrecipIn
	 */
	precip_in?: number;

	/**
	 * Gets or Sets Humidity
	 */
	humidity?: number;

	/**
	 * Gets or Sets Cloud
	 */
	cloud?: number;

	/**
	 * Gets or Sets FeelslikeC
	 */
	feelslike_c?: number;

	/**
	 * Gets or Sets FeelslikeF
	 */
	feelslike_f?: number;

	/**
	 * Gets or Sets VisKm
	 */
	vis_km?: number;

	/**
	 * Gets or Sets VisMiles
	 */
	vis_miles?: number;

	/**
	 * Gets or Sets Uv
	 */
	uv?: number;

	/**
	 * Gets or Sets GustMph
	 */
	gust_mph?: number;

	/**
	 * Gets or Sets GustKph
	 */
	gust_kph?: number;

	/**
	 * Gets or Sets AirQuality
	 */
	air_quality?: CurrentAirQuality;
}
