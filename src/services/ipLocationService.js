import http from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/ip.json";

/**
 *
 * @returns The IPv4 address of the user.
 */
function getIp () {
    return fetch("https://api.ipify.org?format=json")
        .then((resp) => resp.json())
        .then((data) => data.ip);
}

/**
 *
 * @returns The Location Object for the fetched IP address
 */
export async function getLocationFromIp () {
    return (
        await http.get(apiEndPoint, {
            params: {
                key: process.env.REACT_APP_API_KEY,
                q: await getIp(),
            },
        })
    ).data;
}
