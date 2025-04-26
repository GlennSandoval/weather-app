/**
 * Weather API
 *
 * Generated TypeScript interfaces from C# models
 */

import type { Location } from "./location";
import type { Current } from "./current";
import type { Forecast } from "./forecast";
import type { Alerts } from "./alerts";

/**
 * InlineResponse2001
 */
export interface InlineResponse2001 {
	/**
	 * Gets or Sets Location
	 */
	location?: Location;

	/**
	 * Gets or Sets Current
	 */
	current?: Current;

	/**
	 * Gets or Sets Forecast
	 */
	forecast?: Forecast;

	/**
	 * Gets or Sets Alerts
	 */
	alerts?: Alerts;
}
