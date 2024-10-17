import http from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/ip";

/**
 * @async
 * @returns The IPv4 address of the user.
 * @throws Error thrown by axios
 */
async function getIp() {
  const resp = await fetch("https://api.ipify.org?format=json");
    const data = await resp.json();
    return data.ip;
}

/**
 * Tries to get the location from the user public IP address
 * @async
 *
 * @returns The Location Object
 * @throws Error thrown by Axios
 */
export async function getLocationFromIp() {
  return (await http.get(apiEndPoint, { params: { q: await getIp() } })).data;
}
