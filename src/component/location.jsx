import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';


class Location extends Component {
    state = {}
    render () {
        return (
            <div className="flex flex-nowrap row-span-1">
                <div className="gap-2 flex text-gray-300 w-full justify-start items-start"
                    style={{ lineHeight: "16px" }}>
                    <FontAwesomeIcon icon={faLocationDot} style={{ color: "#bcc" }} />
                    <span className="font-semibold">Brooklyn, New York, USA</span>
                    <span className="text-sm">(27th Dec, 2024)</span>
                </div>
                <div className="flex flex-nowrap w-full justify-end gap-2">
                    <button className="h-9 w-9 rounded-2xl bg-slate-700 border border-gray-500 hover:bg-slate-600 transition-all duration-100">
                        <FontAwesomeIcon icon={faSearch} style={{ color: "#ccc" }} />
                    </button>
                    <button className="h-9 px-6 rounded-2xl text-gray-300 bg-slate-700 border border-gray-500 hover:bg-slate-600 transition-all duration-100">
                        Download App
                    </button>
                </div>
            </div >
        );
    }
}

export default Location;
