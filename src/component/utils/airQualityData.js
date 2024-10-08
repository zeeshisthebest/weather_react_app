
function aqi(airInfo){
    let carbonOxide = airInfo.co / 30 * 50;
    let nitrousOxide = airInfo.no2 / 213 * 50;
    let sulphurOxide = airInfo.so2 / 200 * 50;
    let ozone = airInfo.o3 / 82 * 50;
    let pm2_5 = airInfo.pm2_5 / 35 * 50;
    let pm10 = airInfo.pm10;
}
