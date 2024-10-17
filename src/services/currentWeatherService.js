import http from "./httpService";
import configs from "../config.json";
import utils from "../utils/utils";

const apiEndPointWeather = configs.apiUrl + "/current";
const apiEndPointAstro = configs.apiUrl + "/astronomy";


/**
 *
 * @param {object} current current weather from weatherCurrent Object
 * @param {object} location location from weatherCurrent Object
 * @param {object} astro Astro Object returned from /astronomy.json
 * @returns The data object for state
 */
function mapWeatherToModel({current, location}, {astronomy: {astro}}){
    let currTime = location.localtime.split(" ");

   return {
        weather: {
            uv: current.uv,
            code:  current.condition.code,
            tempC: current.temp_c,
            tempF: current.temp_f,
            feelC: current.feelslike_c,
            feelF: current.feelslike_f,
            visKm: current.vis_km,
            visMi: current.vis_miles,
            windKph: current.wind_kph,
            windMph: current.wind_mph,
            humidity: current.humidity,
            condition:  current.condition.text
        },
        airQuality: current.air_quality,
        location: location,
        astro: {
            sunrise: astro.sunrise,
            sunset: astro.sunset,
            sunUp: currTime[1] > utils.to24(astro.sunrise) && currTime[1] < utils.to24(astro.sunset)
        }
    }
}

/**
 *
 * @param {Object} weather Weather Object returned by /current API
 * @param {Objet} astro Astro Object returned by /astro API
 * @returns an object with all the data mapped
 */
function mapToRecentModel(weather, {astronomy: {astro}}){
    let currTime = weather.location.localtime.split(" ");
    return {
        condition: weather.current.condition.text,
        code: weather.current.condition.code,
        tempC: weather.current.temp_c,
        tempF: weather.current.temp_f,
        name: weather.location.name,
        country: weather.location.country,
        isSun: currTime[1] > utils.to24(astro.sunrise) && currTime[1] < utils.to24(astro.sunset)
    }
}


/**
 *
 * @param {string} location To get weather of
 * @returns Promise
 */
function getCurrentWeather (location) {
    return http.get(apiEndPointWeather, {
        params: {aqi: "yes",q: location}
    });
}

/**
 *
 * @param {string} location Of which astro data is required
 * @returns
 */
function getAstroData(location){
    return http.get(apiEndPointAstro, {params: {q: location}});
}

const currentWeatherService = {
    getCurrentWeather,
    getAstroData,
    mapWeatherToModel,
    mapToRecentModel
}

export default currentWeatherService;
