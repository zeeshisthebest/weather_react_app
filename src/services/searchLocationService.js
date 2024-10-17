import configs from "../config.json";
import httpService from "./httpService";

const apiEndPoint = configs.apiUrl + "/search";

/**
 * @async
 * Fetches autocomplete results from the API
 *
 * @param {string} qry Location to be autocompleted
 * @returns A promise that will resolve into api response
 * @throws error thrown by axios
 */
function search(qry) {
  if (!qry || qry.trim().length <= 3) return;
  return httpService.get(apiEndPoint, {params: {q: qry,}});
}

export { search };
