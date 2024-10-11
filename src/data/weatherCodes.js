import weatherIcons from "../component/utils/weatherIcons"

let codes = {
  "C1000": {
    "bgDay": "sunnyDay",
    "bgNight": "clearNight",
    "iconNight": "clear_night",
    "iconDay": "sunny"
  },
  "C1003": {
    "bgDay": "partlyCloudyDay",
    "bgNight": "cloudyNight",
    "iconDay": "partly_cloudy_day",
    "iconNight": "partly_cloudy_night"
  },
  "C1006": {
    "bgDay": "cloudyDay",
    "bgNight": "cloudyNight",
    "iconDay": "cloudy_day",
    "iconNight": "cloudy_night"
  },
  "C1009": {
    "bgDay": "overcastDay",
    "bgNight": "overcastNight",
    "iconDay": "overcast",
    "iconNight": "overcast"
  },
  "C1030": {
    "bgDay": "mistDay",
    "bgNight": "mistNight",
    "iconDay": "mist",
    "iconNight": "mist"
  },
  "C1063": {
    "bgDay": "lightRainDay",
    "bgNight": "lightRainDay",
    "iconDay": "light_rain_day",
    "iconNight": "light_rain_night"
  },
  "C1066": {
    "bgDay": "lightSnowDay",
    "bgNight": "lightSnowNight",
    "iconDay": "light_snow_day",
    "iconNight": "light_snow_night"
  },
  "C1069": {
    "bgDay": "lightSnowDay",
    "bgNight": "lightSnowNight",
    "iconDay": "hail_day",
    "iconNight": "hail_night"
  },
  "C1072": {
    "bgDay": "freezingRain",
    "bgNight": "freezingRain",
    "iconDay": "rain",
    "iconNight": "rain"
  },
  "C1087": {
    "bgDay": "cloudyEvening",
    "bgNight": "cloudyEvening",
    "iconDay": "thunder_day",
    "iconNight": "thunder_night"
  },
  "C114": {
    "bgDay": "snowStorm",
    "bgNight": "snowStorm",
    "iconDay": "snow",
    "iconNight": "snow"
  },
  "C1117": {
    "bgDay": "snowStorm",
    "bgNight": "snowStorm",
    "iconDay": "snow",
    "iconNight": "snow"
  },
  "C1135": {
    "bgDay": "fogDay",
    "bgNight": "fogDay",
    "iconDay": "fog",
    "iconNight": "fog"
  },
  "C1147": {
    "bgDay": "fogDay",
    "bgNight": "fogDay",
    "iconDay": "fog",
    "iconNight": "fog"
  },
  "C1150": {
    "bgDay": "lightRainDay",
    "bgNight": "lightRainDay",
    "iconDay": "light_rain_day",
    "iconNight": "light_rain_night"
  },
  "C1153": {
    "bgDay": "drizzleDay",
    "bgNight": "drizzleDay",
    "iconDay": "light_rain_day",
    "iconNight": "light_rain_night"
  },
  "C1168": {
    "bgDay": "drizzleDay",
    "bgNight": "drizzleDay",
    "iconDay": "rain_snow",
    "iconNight": "rain_snow"
  },
  "C1171": {
    "bgDay": "nightRain",
    "bgNight": "nightRain",
    "iconDay": "rain_snow",
    "iconNight": "rain_snow"
  },
  "C1180": {
    "bgDay": "lightRainDay",
    "bgNight": "lightSnowNight",
    "iconDay": "light_rain_day",
    "iconNight": "light_rain_night"
  },
  "C1183": {
    "bgDay": "lightRainDay",
    "bgNight": "lightSnowNight",
    "iconDay": "light_rain_day",
    "iconNight": "light_rain_night"
  },
  "C1186": {
    "bgDay": "nightRain",
    "bgNight": "nightRain",
    "iconDay": "rain",
    "iconNight": "rain"
  },
  "C1189": {
    "bgDay": "nightRain",
    "bgNight": "nightRain",
    "iconDay": "shower",
    "iconNight": "shower"
  },
  "C1192": {
    "bgDay": "heavyRain",
    "bgNight": "heavyRain",
    "iconDay": "lightRain",
    "iconNight": "lightRain"
  },
  "C1195": {
    "bgDay": "stormyDay",
    "bgNight": "stormyNight",
    "iconDay": "heavyShower",
    "iconNight": "heavyShower"
  },
  "C1198": {
    "bgDay": "freezingRain",
    "bgNight": "freezingRain",
    "iconDay": "rain_snow",
    "iconNight": "rain_snow"
  },
  "C1201": {
    "bgDay": "nightRain",
    "bgNight": "nightRain",
    "iconDay": "heavyShower",
    "iconNight": "heavyShower"
  },
  "C1204": {
    "bgDay": "sleet",
    "bgNight": "sleet",
    "iconDay": "hail_day",
    "iconNight": "hail_night"
  },
  "C1207": {
    "bgDay": "sleet",
    "bgNight": "sleet",
    "iconDay": "hail_day",
    "iconNight": "hail_night"
  },
  "C1210": {
    "bgDay": "snow",
    "bgNight": "snow",
    "iconDay": "light_snow_day",
    "iconNight": "light_snow_night"
  },
  "C1213": {
    "bgDay": "snow",
    "bgNight": "snow",
    "iconDay": "snow",
    "iconNight": "snow"
  },
  "C1216": {
    "bgDay": "snow",
    "bgNight": "snow",
    "iconDay": "snow",
    "iconNight": "snow"
  },
  "C1219": {
    "bgDay": "snow",
    "bgNight": "snow",
    "iconDay": "snow",
    "iconNight": "snow"
  },
  "C1222": {
    "bgDay": "snowStorm",
    "bgNight": "snowStorm",
    "iconDay": "snow",
    "iconNight": "snow"
  },
  "C1225": {
    "bgDay": "snowStorm",
    "bgNight": "snowStorm",
    "iconDay": "snow",
    "iconNight": "snow"
  },
  "C1237": {
    "bgDay": "snowStorm",
    "bgNight": "snowStorm",
    "iconDay": "icePellets",
    "iconNight": "icePellets"
  },
  "C1240": {
    "bgDay": "drizzleDay",
    "bgNight": "drizzleDay",
    "iconDay": "light_rain_day",
    "iconNight": "light_rain_night"
  },
  "C1243": {
    "bgDay": "heavyRain",
    "bgNight": "heavyRain",
    "iconDay": "shower",
    "iconNight": "shower"
  },
  "C1246": {
    "bgDay": "torrentailRain",
    "bgNight": "torrentailRain",
    "iconDay": "heavyShower",
    "iconNight": "heavyShower"
  },
  "C1249": {
    "bgDay": "sleet",
    "bgNight": "sleet",
    "iconDay": "hail_day",
    "iconNight": "hail_night"
  },
  "C1252": {
    "bgDay": "sleet",
    "bgNight": "sleet",
    "iconDay": "hail_day",
    "iconNight": "hail_night"
  },
  "C1255": {
    "bgDay": "snow",
    "bgNight": "snow",
    "iconDay": "snow",
    "iconNight": "snow"
  },
  "C1258": {
    "bgDay": "snowStorm",
    "bgNight": "snowStorm",
    "iconDay": "snow",
    "iconNight": "snow"
  },
  "C1261": {
    "bgDay": "icePellets",
    "bgNight": "icePellets",
    "iconDay": "icePellets",
    "iconNight": "icePellets"
  },
  "C1264": {
    "bgDay": "icePellets",
    "bgNight": "icePellets",
    "iconDay": "icePellets",
    "iconNight": "icePellets"
  },
  "C1273": {
    "bgDay": "lightRain",
    "bgNight": "lightRain",
    "iconDay": "lightRain",
    "iconNight": "lightRain"
  },
  "C1276": {
    "bgDay": "stormyDay",
    "bgNight": "stormyNight",
    "iconDay": "thunderstorm",
    "iconNight": "thunderstorm"
  },
  "C1279": {
    "bgDay": "snowStorm",
    "bgNight": "snowStorm",
    "iconDay": "snow",
    "iconNight": "snow"
  },
  "C1282": {
    "bgDay": "snowStorm",
    "bgNight": "snowStorm",
    "iconDay": "snow",
    "iconNight": "snow"
  }
}


/**
 *
 * @param {number} code Weather Code
 * @returns The path to the bgImage
 */
export function getWeatherBg(code){
  return weatherIcons.wBg[codes[`C${code}`].bgDay];
}

/**
 *
 * @param {number} code  Weather Code
 * @returns The path to the Icon
 */
export function getWeatherIcons(code){

}
