import configs from "../config.json";
import httpService from "./httpService";

const apiEndPoint = configs.apiUrl + "/forecast";

/**
 * Fetched the weekly weather of the given location starting today
 * @async
 * @param {string} location Location
 * @returns A promise that will resolve into object
 * @throws Error thrown by axios
 */
function getWeeklyWeather (location) {
    if(!location) return null;
    return httpService.get(apiEndPoint, {params: {q: location,}});
}


/**
 * Genarates day of the week dynamically starting from today
 *
 * @param {number} dayOffset The index of day (sunday=0, saturday=7)
 * @returns Array containing Long Days starting today
 * @throws Error from axios
 *
 */
function getWeekDays (dayOffset) {
    let today = new Date();
    let weekDay = [];

    for (let i = 0; i <= 6; i++) {
        let date = new Date();
        date.setDate(today.getDate() + i - dayOffset); // shifts date to yesterday
        weekDay.push(date.toLocaleDateString("en-US", { weekday: "long" }));
    }
    return weekDay;
}


/**
 *
 * @param {Array} data Array of weekly weather data
 * @returns Array of weekly weather
 */
function mapWeeklyWeatherToModel(data){
    let weeklyWeather = [];
    data.forEach(({day}) => {
        weeklyWeather.push({
            maxC: Math.round(day.maxtemp_c),
            maxF: Math.round(day.maxtemp_f),
            minC: Math.round(day.mintemp_c),
            minF: Math.round(day.mintemp_f)
        })

    });

    return weeklyWeather;
}

export { getWeekDays, getWeeklyWeather, mapWeeklyWeatherToModel };
