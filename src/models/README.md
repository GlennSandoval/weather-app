# Weather API TypeScript Models

This directory contains TypeScript interfaces converted from the C# models in the WeatherAPI.com SDK.

## Usage

You can import the models in your TypeScript code like this:

```typescript
// Import specific models
import { Current, Forecast, Location } from './models';

// Or import all models
import * as WeatherModels from './models';
```

## Available Models

The following models are available:

- `Alerts` - Weather alerts
- `AlertsAlert` - Weather alert details
- `ArrayOfSearch` - Array of search results
- `Astronomy` - Astronomy data
- `AstronomyAstro` - Astronomy astro data
- `Current` - Current weather data
- `CurrentAirQuality` - Current air quality data
- `CurrentCondition` - Current weather condition
- `Error400` - Bad request error
- `Error401` - Unauthorized error
- `Error403` - Forbidden error
- `Forecast` - Weather forecast data
- `ForecastAstro` - Forecast astronomy data
- `ForecastCondition` - Forecast condition data
- `ForecastDay` - Forecast day data
- `ForecastDayCondition` - Forecast day condition data
- `ForecastForecastday` - Forecast day details
- `ForecastHour` - Forecast hour data
- `InlineResponse200` - Response with current weather
- `InlineResponse2001` - Response with forecast and alerts
- `InlineResponse2002` - Response with forecast
- `InlineResponse2003` - Response with astronomy
- `Ip` - IP lookup data
- `Location` - Location data
- `Marine` - Marine weather data
- `MarineForecastday` - Marine forecast day data
- `MarineHour` - Marine forecast hour data
- `Search` - Search result data

## Type Conversions

The following C# to TypeScript type conversions were applied:

- `string` → `string`
- `int?` → `number`
- `decimal?` → `number`
- `DateTime?` → `Date | string`
- `List<T>` → `T[]`
- `bool?` → `boolean`

## Notes

- All properties are optional (marked with `?`) to match the nullable nature of the C# models
- Property names follow the JSON serialization format (snake_case) rather than the C# property names (PascalCase)
- The models are designed to be used with JSON data from the WeatherAPI.com API