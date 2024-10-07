import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const InfoCard = ({ title, icon, value, unit }) => {
    return (<div className="bg-white bg-opacity-15 rounded-md overflow-hidden p-1">
        <div className="h-1/3 text-gray-400 text-center flex justify-center items-center text-sm">
            <p className="mr-2">{title}</p><FontAwesomeIcon icon={icon} />
        </div>
        <div className="flex flex-nowrap gap-1 justify-center items-center pb-1 h-2/3 text-gray-200">
            <span className="text-5xl font-semibold">
                {value}
                <span className="text-sm">{unit}</span>
            </span>
        </div>
    </div>);
}

export default InfoCard;
