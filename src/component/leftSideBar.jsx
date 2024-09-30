import React, { Component } from 'react';
import WorldMap from './worldMap';
import SunriseSunset from './sunserSunrise';
import UvIndex2 from './uvIndex2';
import ImpData from './impData';

class LeftSideBar extends Component {
    state = {}
    render () {
        return (
            <div className="col-span-1 bg-white bg-opacity-10 border-[0] border-[#aaa] rounded-xl p-4">
                <WorldMap />
                <SunriseSunset />
                <UvIndex2 />
                <ImpData />

            </div>
        );
    }
}

export default LeftSideBar;
