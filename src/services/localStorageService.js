const loc = "location";
const recent = "recent";
const metric = 'metric';
const is24 = 'is24';


/**
 *
 * @returns The name of Current Location
 */
function getLocation() {
  return localStorage.getItem(loc);
}

/**
 *
 * @returns The list of recent searches, max 10
 */
function getRecentSearched() {
  let recentItems =  localStorage.getItem(recent);
  return recentItems ?  JSON.parse(recentItems) : null;
}

/**
 *
 * @param {string} value The Name of current location
 * @returns
 */
function setLocation(value) {
  try {
    localStorage.setItem(loc, value);
    setRecentSearched(loc);
  } catch (error) {
    return;
  }
}

/**
 *
 * @param {string} newLoc location to be added in the recent list
 */
function setRecentSearched(newLoc) {
  const maxLen = 10;
  let recentlySearched = localStorage.getItem(recent);
  let recentArray = [];
  // Add from localStorage if exists
  if (recentlySearched) {
    recentArray = JSON.parse(recentlySearched);
  }
  recentArray = recentArray.filter(loc => loc !== newLoc);
  recentArray.unshift(newLoc); // put the current one at index=0
  recentArray = recentArray.slice(0, maxLen); // Trim the array
  localStorage.setItem(recent, JSON.stringify(recentArray)); // Store again
}

/**
 *
 * @param {bool} val is metric preferred
 */
function setMetricPreference(val){
  try{
    localStorage.setItem(metric, JSON.stringify(val));
  } catch (e) {
  }
}

/**
 *
 * @returns The boolean value for metric preferrence
 */
function getMetricPreference(){
    return JSON.parse(localStorage.getItem(metric) || 'true');
}

/**
 *
 * @param {bool} val is 24 hr preferred
 */
function setIs24(val){
  try{
    localStorage.setItem(is24, JSON.stringify(val));
  } catch (e) {}
}

/**
 *
 * @returns The boolean value for 24 hr preferrence
 */
function getIs24(){
    return JSON.parse(localStorage.getItem(is24) || 'false');
}

const localStorageService = {
  getLocation: getLocation,
  setLocation: setLocation,
  getRecentSearched: getRecentSearched,
  setMetricPreference: setMetricPreference,
  getMetricPreference: getMetricPreference,
  getIs24: getIs24,
  setIs24: setIs24,
};

export default localStorageService;
