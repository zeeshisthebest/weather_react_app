import http from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/ip";

/**
 *
 * @returns The IPv4 address of the user.
 */
async function getIp() {
  const resp = await fetch("https://api.ipify.org?format=json");
    const data = await resp.json();
    return data.ip;
}

/**
 *
 * @returns The Location Object for the fetched IP address
 */
export async function getLocationFromIp() {
  return (await http.get(apiEndPoint, { params: { q: await getIp() } })).data;
}
