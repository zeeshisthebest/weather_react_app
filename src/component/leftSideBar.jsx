import React, { Component } from 'react';
import Globe from './Globe';
import SunriseSunset from './sunserSunrise';
import UvIndex from './uvIndex';
import WindAndAirIndex from './windAndAirIndex';

class LeftSideBar extends Component {
    state = {}
    render () {
        return (
            <div className="col-span-1 bg-white bg-opacity-10 border-[0] border-[#aaa] rounded-xl p-4">
                <Globe placeName="Karachi" coordinates={{ latitude: 51.5171, longitude: -0.1062 }} />
                <SunriseSunset sunsetTime={"19:02"} sunriseTime="06:00" />
                <UvIndex uvIndex={13} />
                <WindAndAirIndex windSpeed={6} airIndex={400} />

            </div>
        );
    }
}

export default LeftSideBar;
