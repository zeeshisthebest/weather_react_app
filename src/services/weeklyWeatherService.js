import configs from "../config.json";
import httpService from "./httpService";

const apiEndPoint = configs.apiUrl + "/forecast.json";

function getWeeklyWeather (location) {

    if(!location) return null;;

    return httpService.get(apiEndPoint, {
        params: {
            key: process.env.REACT_APP_API_KEY,
            q: location,
            aqi: "no",
            alerts: "no",
            tp: 24,
            days: 7,
        },
    });
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

// https://api.weatherapi.com/v1/forecast.json?key=90ed859212ec45a288d104126240710&q=karachi&days=7&aqi=no&alerts=no&tp=24
