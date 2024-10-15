import configs from "../config.json";
import httpService from "./httpService";

const apiEndPoint = configs.apiUrl + "/search.json";

/**
 *
 * @param {string} qry Location to be autocompleted
 * @returns A promise
 */
function search(qry) {
  if (!qry || qry.trim().length <= 3 ) return;

    return httpService.get(apiEndPoint, {
      params: {
        key: process.env.REACT_APP_API_KEY,
        q: qry,
      },
    });

}

export {
    search
}
