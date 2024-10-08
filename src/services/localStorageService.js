
const loc = 'location';

function getLocation(){
    return localStorage.getItem(loc);
}

function setLocation(value){
    localStorage.setItem(loc, value);
}

export {
    getLocation, setLocation
}
