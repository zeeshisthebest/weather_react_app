import weatherIcons from "../utils/weatherIcons";

let codes = {
  C1000: {
    bgDay: "sunnyDay",
    bgNight: "clearNight",
    iconNight: "clearNight",
    iconDay: "sunny",
  },
  C1003: {
    bgDay: "partlyCloudyDay",
    bgNight: "cloudyNight",
    iconDay: "partlyCloudyDay",
    iconNight: "partlyCloudyNight",
  },
  C1006: {
    bgDay: "cloudyDay",
    bgNight: "cloudyNight",
    iconDay: "cloudyDay",
    iconNight: "cloudyNight",
  },
  C1009: {
    bgDay: "overcastDay",
    bgNight: "overcastNight",
    iconDay: "overcast",
    iconNight: "overcast",
  },
  C1030: {
    bgDay: "mistDay",
    bgNight: "mistNight",
    iconDay: "mist",
    iconNight: "mist",
  },
  C1063: {
    bgDay: "lightRainDay",
    bgNight: "lightRainDay",
    iconDay: "lightRainDay",
    iconNight: "lightRainNight",
  },
  C1066: {
    bgDay: "lightSnowDay",
    bgNight: "lightSnowNight",
    iconDay: "lightSnowDay",
    iconNight: "lightSnowNight",
  },
  C1069: {
    bgDay: "lightSnowDay",
    bgNight: "lightSnowNight",
    iconDay: "hailDay",
    iconNight: "hailNight",
  },
  C1072: {
    bgDay: "freezingRain",
    bgNight: "freezingRain",
    iconDay: "rain",
    iconNight: "rain",
  },
  C1087: {
    bgDay: "cloudyEvening",
    bgNight: "cloudyEvening",
    iconDay: "thunderDay",
    iconNight: "thunderNight",
  },
  C114: {
    bgDay: "snowStorm",
    bgNight: "snowStorm",
    iconDay: "snow",
    iconNight: "snow",
  },
  C1117: {
    bgDay: "snowStorm",
    bgNight: "snowStorm",
    iconDay: "snow",
    iconNight: "snow",
  },
  C1135: {
    bgDay: "fogDay",
    bgNight: "fogDay",
    iconDay: "fog",
    iconNight: "fog",
  },
  C1147: {
    bgDay: "fogDay",
    bgNight: "fogDay",
    iconDay: "fog",
    iconNight: "fog",
  },
  C1150: {
    bgDay: "lightRainDay",
    bgNight: "lightRainDay",
    iconDay: "lightRainDay",
    iconNight: "lightRainNight",
  },
  C1153: {
    bgDay: "drizzleDay",
    bgNight: "drizzleDay",
    iconDay: "lightRainDay",
    iconNight: "lightRainNight",
  },
  C1168: {
    bgDay: "drizzleDay",
    bgNight: "drizzleDay",
    iconDay: "rainSnow",
    iconNight: "rainSnow",
  },
  C1171: {
    bgDay: "nightRain",
    bgNight: "nightRain",
    iconDay: "rainSnow",
    iconNight: "rainSnow",
  },
  C1180: {
    bgDay: "lightRainDay",
    bgNight: "lightSnowNight",
    iconDay: "lightRainDay",
    iconNight: "lightRainNight",
  },
  C1183: {
    bgDay: "lightRainDay",
    bgNight: "lightSnowNight",
    iconDay: "lightRainDay",
    iconNight: "lightRainNight",
  },
  C1186: {
    bgDay: "nightRain",
    bgNight: "nightRain",
    iconDay: "rain",
    iconNight: "rain",
  },
  C1189: {
    bgDay: "nightRain",
    bgNight: "nightRain",
    iconDay: "shower",
    iconNight: "shower",
  },
  C1192: {
    bgDay: "heavyRain",
    bgNight: "heavyRain",
    iconDay: "lightRain",
    iconNight: "lightRain",
  },
  C1195: {
    bgDay: "stormyDay",
    bgNight: "stormyNight",
    iconDay: "heavyShower",
    iconNight: "heavyShower",
  },
  C1198: {
    bgDay: "freezingRain",
    bgNight: "freezingRain",
    iconDay: "rainSnow",
    iconNight: "rainSnow",
  },
  C1201: {
    bgDay: "nightRain",
    bgNight: "nightRain",
    iconDay: "heavyShower",
    iconNight: "heavyShower",
  },
  C1204: {
    bgDay: "sleet",
    bgNight: "sleet",
    iconDay: "hailDay",
    iconNight: "hailNight",
  },
  C1207: {
    bgDay: "sleet",
    bgNight: "sleet",
    iconDay: "hailDay",
    iconNight: "hailNight",
  },
  C1210: {
    bgDay: "snow",
    bgNight: "snow",
    iconDay: "lightSnowDay",
    iconNight: "lightSnowNight",
  },
  C1213: {
    bgDay: "snow",
    bgNight: "snow",
    iconDay: "snow",
    iconNight: "snow",
  },
  C1216: {
    bgDay: "snow",
    bgNight: "snow",
    iconDay: "snow",
    iconNight: "snow",
  },
  C1219: {
    bgDay: "snow",
    bgNight: "snow",
    iconDay: "snow",
    iconNight: "snow",
  },
  C1222: {
    bgDay: "snowStorm",
    bgNight: "snowStorm",
    iconDay: "snow",
    iconNight: "snow",
  },
  C1225: {
    bgDay: "snowStorm",
    bgNight: "snowStorm",
    iconDay: "snow",
    iconNight: "snow",
  },
  C1237: {
    bgDay: "snowStorm",
    bgNight: "snowStorm",
    iconDay: "icePellets",
    iconNight: "icePellets",
  },
  C1240: {
    bgDay: "drizzleDay",
    bgNight: "drizzleDay",
    iconDay: "lightRainDay",
    iconNight: "lightRainNight",
  },
  C1243: {
    bgDay: "heavyRain",
    bgNight: "heavyRain",
    iconDay: "shower",
    iconNight: "shower",
  },
  C1246: {
    bgDay: "torrentailRain",
    bgNight: "torrentailRain",
    iconDay: "heavyShower",
    iconNight: "heavyShower",
  },
  C1249: {
    bgDay: "sleet",
    bgNight: "sleet",
    iconDay: "hailDay",
    iconNight: "hailNight",
  },
  C1252: {
    bgDay: "sleet",
    bgNight: "sleet",
    iconDay: "hailDay",
    iconNight: "hailNight",
  },
  C1255: {
    bgDay: "snow",
    bgNight: "snow",
    iconDay: "snow",
    iconNight: "snow",
  },
  C1258: {
    bgDay: "snowStorm",
    bgNight: "snowStorm",
    iconDay: "snow",
    iconNight: "snow",
  },
  C1261: {
    bgDay: "icePellets",
    bgNight: "icePellets",
    iconDay: "icePellets",
    iconNight: "icePellets",
  },
  C1264: {
    bgDay: "icePellets",
    bgNight: "icePellets",
    iconDay: "icePellets",
    iconNight: "icePellets",
  },
  C1273: {
    bgDay: "lightRain",
    bgNight: "lightRain",
    iconDay: "lightRain",
    iconNight: "lightRain",
  },
  C1276: {
    bgDay: "stormyDay",
    bgNight: "stormyNight",
    iconDay: "thunderstorm",
    iconNight: "thunderstorm",
  },
  C1279: {
    bgDay: "snowStorm",
    bgNight: "snowStorm",
    iconDay: "snow",
    iconNight: "snow",
  },
  C1282: {
    bgDay: "snowStorm",
    bgNight: "snowStorm",
    iconDay: "snow",
    iconNight: "snow",
  },
};

/**
 *
 * @param {number} code Weather Code
 * @param {bool} isSunUp Either is the day or the night
 * @returns The path to the bgImage, defaults to sunny
 */
export function getWeatherBg (code, isSunUp) {
  if(!code) return weatherIcons.wBg["sunny"]
  let cond = isSunUp ? codes[`C${code}`].bgDay : codes[`C${code}`].bgNight;
  return weatherIcons.wBg[cond];
}

/**
 *
 * @param {number} code  Weather Code
 * @returns The path to the Icon, if the code is null it returns Sunny Icon
 */
export function getWeatherIcons (code, isSunUp) {
  if(!code) return weatherIcons.wIc["sunny"]
  let cond = isSunUp ? codes[`C${code}`].iconDay : codes[`C${code}`].iconNight;
  return weatherIcons.wIc[cond];
 }
