import configs from "../config.json";
import httpService from "./httpService";

const apiEndPoint = configs.apiUrl + "/forecast";

/**
 *
 * @param {string} location Of which weekly weather is needed starting from today
 * @returns A promise that will resolve into object
 */
function getWeeklyWeather (location) {
    if(!location) return null;
    return httpService.get(apiEndPoint, {params: {q: location,}});
}


/**
 *
 * @returns The array containing days of the week starting from today
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
