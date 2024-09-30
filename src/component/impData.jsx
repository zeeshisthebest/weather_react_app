import React, { Component } from 'react';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AirIndex from './airIndex';

class ImpData extends Component {
    state = {}
    render () {
        return (
            <div className='w-full mt-6'>
                <div className='flex flex-nowrap gap-2 h-10 text-gray-200 items-center text-xl bg-gray-300 bg-opacity-10 py-2 px-2 rounded-md'>
                    <img src="/assets/weather_icons/windy_cloudy.png" className='h-full w-10' alt="" />
                    <span>Wind</span>
                    <p className='w-full text-right'>270
                        <span className="text-sm pl-1">km/h</span>
                    </p>
                </div>
                <div className=' bg-gray-300 bg-opacity-10 py-2 px-2 rounded-md  mt-3 '>
                    <div className='flex flex-nowrap gap-2 h-7 text-gray-200 items-center text-xl mb-3'>
                        <img src="/assets/weather_icons/windy.png" className='h-full w-10' alt="" />
                        <span>Air</span>
                        <p className='w-full text-right text-sm text-gray-300'>Moderate</p>
                    </div>
                    <AirIndex />
                </div>
            </div>
        );
    }
}

export default ImpData;
