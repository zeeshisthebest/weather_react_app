const loc = "location";

function getLocation() {
  return localStorage.getItem(loc);
}

function setLocation(value) {
  localStorage.setItem(loc, value);
}

const localStorageService = {
  getLocation: getLocation,
  setLocation: setLocation,
};

export default localStorageService;
