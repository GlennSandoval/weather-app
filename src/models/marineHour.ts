/**
 * Weather API
 *
 * Generated TypeScript interfaces from C# models
 */

import type { ForecastCondition } from "./forecastCondition";

/**
 * MarineHour
 */
export interface MarineHour {
	/**
	 * Gets or Sets TimeEpoch
	 */
	time_epoch?: number;

	/**
	 * Gets or Sets Time
	 */
	time?: string;

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
	condition?: ForecastCondition;

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
	 * Gets or Sets WindchillC
	 */
	windchill_c?: number;

	/**
	 * Gets or Sets WindchillF
	 */
	windchill_f?: number;

	/**
	 * Gets or Sets HeatindexC
	 */
	heatindex_c?: number;

	/**
	 * Gets or Sets HeatindexF
	 */
	heatindex_f?: number;

	/**
	 * Gets or Sets DewpointC
	 */
	dewpoint_c?: number;

	/**
	 * Gets or Sets DewpointF
	 */
	dewpoint_f?: number;

	/**
	 * Gets or Sets WillItRain
	 */
	will_it_rain?: number;

	/**
	 * Gets or Sets ChanceOfRain
	 */
	chance_of_rain?: number;

	/**
	 * Gets or Sets WillItSnow
	 */
	will_it_snow?: number;

	/**
	 * Gets or Sets ChanceOfSnow
	 */
	chance_of_snow?: number;

	/**
	 * Gets or Sets VisKm
	 */
	vis_km?: number;

	/**
	 * Gets or Sets VisMiles
	 */
	vis_miles?: number;

	/**
	 * Gets or Sets GustMph
	 */
	gust_mph?: number;

	/**
	 * Gets or Sets GustKph
	 */
	gust_kph?: number;

	/**
	 * Gets or Sets SigHtMt
	 */
	sig_ht_mt?: number;

	/**
	 * Gets or Sets SwellHtMt
	 */
	swell_ht_mt?: number;

	/**
	 * Gets or Sets SwellHtFt
	 */
	swell_ht_ft?: number;

	/**
	 * Gets or Sets SwellDir
	 */
	swell_dir?: number;

	/**
	 * Gets or Sets SwellDir16Point
	 */
	swell_dir_16_point?: number;

	/**
	 * Gets or Sets SwellPeriodSecs
	 */
	swell_period_secs?: number;

	/**
	 * Gets or Sets Uv
	 */
	uv?: number;
}
