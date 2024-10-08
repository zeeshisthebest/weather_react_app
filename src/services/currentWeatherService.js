import http from "./httpService";
import configs from "../config.json";

const apiEndPoint = configs.apiUrl + "/astronomy.json";

export function getCurrentWeather (location) {
    return http.get(apiEndPoint, {
        params: {
            key: process.env.REACT_APP_API_KEY,
            aqi: "yes",
            q: location,
        },
    });
}
