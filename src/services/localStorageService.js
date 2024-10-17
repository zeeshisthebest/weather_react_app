const loc = "location";
const recent = "recent";
const metric = 'metric';
const is24 = 'is24';


/**
 * @returns The name of current location if stored else null
 */
function getLocation() {
  return localStorage.getItem(loc);
}

/**
 * @returns The list of recent searches, max 10 or null
 */
function getRecentSearched()  {
  let recentItems =  localStorage.getItem(recent);
  return recentItems ?  JSON.parse(recentItems) : null;
}

/**
 * @param {string} value Location to set
 */
function setLocation(value) {
  try {
    localStorage.setItem(loc, value);
    setRecentSearched(value);
  } catch (error) {
    console.log(error);
    return;
  }
}

/**
 * @param {string} newLoc Location to be added in the recent list
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
 * @param {bool} val Is metric preferred
 */
function setMetricPreference(val){
  try{
    localStorage.setItem(metric, JSON.stringify(val));
  } catch (e) {
  }
}

/**
 * @returns Boolean for metric preferrence
 */
function getMetricPreference(){
    return JSON.parse(localStorage.getItem(metric) || 'true');
}

/**
 * @param {bool} val Is 24 hr preferred
 */
function setIs24(val){
  try{
    localStorage.setItem(is24, JSON.stringify(val));
  } catch (e) {}
}

/**
 * @returns Boolean for 24 hr preferrence
 */
function getIs24(){
    return JSON.parse(localStorage.getItem(is24) || 'false');
}

/**
 * Provides various function for handling data in localstorage
 */
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
