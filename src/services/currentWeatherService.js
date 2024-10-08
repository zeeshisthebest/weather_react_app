import http from "./httpService";
import configs from "../config.json";

const apiEndPointWeather = configs.apiUrl + "/current.json";
const apiEndPointAstro = configs.apiUrl + "/astronomy.json";


/**
 *
 * @param {object} weatherData Weather Object returned from /current.json
 * @param {object} astroData Astro Object returned from /astronomy.json
 * @returns The data object for state
 */
function mapWeatherToModel(weatherData, astroData){
   return {
        weather: {
            condition:  weatherData.current.condition.text,
            tempC: weatherData.current.temp_c,
            tempF: weatherData.current.temp_f,
            humidity: weatherData.current.humidity,
            feelC: weatherData.current.feelslike_c,
            feelf: weatherData.current.feelslike_f,
            uv: weatherData.current.uv,
            visKm: weatherData.current.vis_km,
            visMi: weatherData.current.vis_miles,
            windKph: weatherData.current.wind_kph,
            windMph: weatherData.current.wind_mph
        },
        airQuality: weatherData.current.air_quality,
        location: weatherData.location,
        astro: {
            sunrise: astroData.astronomy.astro.sunrise,
            sunset: astroData.astronomy.astro.sunset
        }
    }
}


/**
 *
 * @param {string} location To get weather of
 * @returns Promise
 */
function getCurrentWeather (location) {
    return http.get(apiEndPointWeather, {
        params: {
            key: process.env.REACT_APP_API_KEY,
            aqi: "yes",
            q: location,
        },
    });
}

/**
 *
 * @param {string} location Of which astro data is required
 * @returns
 */
function getAstroData(location){
    return http.get(apiEndPointAstro, {
        params: {
            key: process.env.REACT_APP_API_KEY,
            q: location,
        },
    });
}

const currentWeatherService = {
    getCurrentWeather,
    getAstroData,
    mapWeatherToModel,
}

export default currentWeatherService;
