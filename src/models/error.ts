/**
 * Weather API
 *
 * Generated TypeScript interfaces from C# models
 */

/**
 * Base Error interface
 */
export interface ErrorBase {
	/**
	 * Gets or Sets Code
	 */
	code?: number;

	/**
	 * Gets or Sets Message
	 */
	message?: string;
}

/**
 * Error400 - Bad Request Error
 */
export type Error400 = ErrorBase;

/**
 * Error401 - Unauthorized Error
 */
export type Error401 = ErrorBase;

/**
 * Error403 - Forbidden Error
 */
export type Error403 = ErrorBase;
