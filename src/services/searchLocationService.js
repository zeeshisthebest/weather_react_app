import configs from "../config.json";
import httpService from "./httpService";

const apiEndPoint = configs.apiUrl + "/search";

/**
 *
 * @param {string} qry Location to be autocompleted
 * @returns A promise
 */
function search(qry) {
  if (!qry || qry.trim().length <= 3) return;
  return httpService.get(apiEndPoint, {params: {q: qry,}});
}

export { search };
