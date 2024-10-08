import React, { Component } from "react";
import Globe from "./Globe";
import SunriseSunset from "./sunserSunrise";
import UvIndex from "./uvIndex";
import WindAndAirIndex from "./windAndAirIndex";
import { WeatherContext } from "../contexts/contexts";

class LeftSideBar extends Component {
    static contextType = WeatherContext;

    render () {
        const { location: loc, astro, weather } = this.context;
        return (
            <div className="col-span-1 bg-white bg-opacity-10 border-[0] border-[#aaa] rounded-xl p-4">
                <Globe
                    placeName={loc?.name ?? ""}
                    coordinates={{ latitude: loc?.lat ?? 0, longitude: loc?.lon ?? 0 }}
                />
                <SunriseSunset
                    sunsetTime={astro?.sunset ?? "hh:mm"}
                    sunriseTime={astro?.sunrise ?? "hh:mm"}
                />
                <UvIndex uvIndex={weather?.uv ?? 0} />
                <WindAndAirIndex windSpeed={weather?.windKph ?? 0} airIndex={400} />
            </div>
        );
    }
}

export default LeftSideBar;
