/**
 * Maps weatherapi.com `condition.code` (with day/night) to Meteocons —
 * Basmilius' animated weather icon set (@meteocons/svg 0.1.0, MIT).
 * The SVGs used by the map are copied into `public/weather-icons/`.
 * Unknown codes fall back to a plain cloud so the card stays believable.
 */

const FALLBACK = "cloudy";

/** [daytime icon, nighttime icon?] — file base name in /weather-icons, no extension */
const CODE_MAP: Record<number, [string, string?]> = {
  1000: ["clear-day", "clear-night"], // Sunny / Clear
  1003: ["partly-cloudy-day", "partly-cloudy-night"], // Partly cloudy
  1006: ["cloudy"], // Cloudy
  1007: ["overcast-day", "overcast-night"], // Overcast
  1009: ["overcast-day", "overcast-night"], // Overcast (off-list code weatherapi returns)
  1030: ["mist"], // Mist
  1063: ["partly-cloudy-day-rain", "partly-cloudy-night-rain"], // Patchy rain possible
  1066: ["partly-cloudy-day-snow", "partly-cloudy-night-snow"], // Patchy snow possible
  1069: ["partly-cloudy-day-sleet", "partly-cloudy-night-sleet"], // Patchy sleet possible
  1072: ["drizzle"], // Freezing drizzle
  1087: ["thunderstorms-day", "thunderstorms-night"], // Thundery outbreaks possible
  1114: ["wind-snow"], // Blowing snow
  1117: ["wind-snow"], // Blizzard
  1135: ["fog-day", "fog-night"], // Fog
  1147: ["fog-day", "fog-night"], // Freezing fog
  1150: ["partly-cloudy-day-drizzle", "partly-cloudy-night-drizzle"], // Patchy light drizzle
  1153: ["drizzle"], // Light drizzle
  1168: ["drizzle"], // Freezing drizzle
  1171: ["drizzle"], // Heavy freezing drizzle
  1180: ["partly-cloudy-day-rain", "partly-cloudy-night-rain"], // Patchy light rain
  1183: ["rain"], // Light rain
  1186: ["rain"], // Moderate rain at times
  1189: ["rain"], // Moderate rain
  1192: ["extreme-rain"], // Heavy rain at times
  1195: ["extreme-rain"], // Heavy rain
  1198: ["rain"], // Light freezing rain
  1201: ["rain"], // Moderate/heavy freezing rain
  1204: ["sleet"], // Light sleet
  1207: ["sleet"], // Moderate/heavy sleet
  1210: ["snow"], // Patchy light snow
  1213: ["snow"], // Light snow
  1216: ["snow"], // Patchy moderate snow
  1219: ["snow"], // Moderate snow
  1222: ["snow"], // Patchy heavy snow
  1225: ["snow"], // Heavy snow
  1237: ["hail"], // Ice pellets
  1240: ["rain"], // Light rain shower
  1243: ["rain"], // Moderate/heavy rain shower
  1246: ["extreme-rain"], // Torrential rain shower
  1249: ["sleet"], // Light sleet showers
  1252: ["sleet"], // Moderate/heavy sleet showers
  1255: ["snow"], // Light snow showers
  1258: ["snow"], // Moderate/heavy snow showers
  1261: ["hail"], // Light ice pellet showers
  1264: ["hail"], // Moderate/heavy ice pellet showers
  1273: ["thunderstorms-day-rain", "thunderstorms-night-rain"], // Patchy light rain with thunder
  1276: ["thunderstorms-day-rain", "thunderstorms-night-rain"], // Moderate/heavy rain with thunder
  1279: ["thunderstorms-day-snow", "thunderstorms-night-snow"], // Patchy light snow with thunder
  1282: ["thunderstorms-day-snow", "thunderstorms-night-snow"], // Moderate/heavy snow with thunder
};

/** File base name for a condition, e.g. `clear-night`. */
export function getWeatherIcon(code?: number | null, isDay = true): string {
  const pair = (code != null && CODE_MAP[code]) || undefined;
  return pair ? (isDay || !pair[1] ? pair[0] : pair[1]) : FALLBACK;
}

export interface WeatherIconProps {
  /** weatherapi.com `condition.code` */
  code?: number | null;
  /** API `is_day`: 1/true → daytime glyph, 0/false → night glyph */
  isDay?: boolean | number | null;
  className?: string;
}

export default function WeatherIcon({
  code,
  isDay = true,
  className,
}: WeatherIconProps) {
  const daytime = isDay === true || isDay === 1 || isDay == null;
  const name = getWeatherIcon(code, daytime);
  return (
    <img
      src={`/weather-icons/${name}.svg`}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={className}
    />
  );
}
