import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfoCard from "./infoCard";
import PropTypes from "prop-types";
import {
	faDroplet,
	faLocationDot,
	faClock,
	faEye,
	faCalendar,
	faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";
import SearchLocation from "./searchLocation";

const LocationAndInfo = (props) => {
	const { location, humidity, feelsLike, visibility, isMetric, localTime } =
		props;
	let time = localTime.split(" ");
	return (
		<div className="flex flex-nowrap row-span-1">
			{/* location and search */}
			<div
				className="gap-2 flex text-gray-300 w-8/12 justify-start items-start pt-3"
				style={{ lineHeight: "16px" }}>
				<div className="flex flex-col gap-1">
					<div>
						<FontAwesomeIcon icon={faLocationDot} style={{ color: "#bcc" }} />
						<span className="ml-2 font-semibold leading-7">{location}</span>
					</div>
					<div>
						<FontAwesomeIcon icon={faClock} style={{ color: "#bcc" }} size="xs" />
						<span className="text-sm mx-2">{time[1]}</span>
						<FontAwesomeIcon icon={faCalendar} style={{ color: "#bcc" }} size="xs" />
						<span className="text-sm ml-2">{time[0]}</span>
					</div>
				</div>
				<SearchLocation />
			</div>
			{/* Weather Infos */}
			<div className="w-4/12 grid grid-cols-3 grid-rows-1 gap-3">
				<InfoCard unit="%" title="Humidity" value={humidity} icon={faDroplet} />
				<InfoCard
					unit={`\u00b0${isMetric ? "C" : "F"}`}
					title="Feels Like"
					value={Math.round(feelsLike)}
					icon={faTemperatureLow}
				/>
				<InfoCard
					unit={isMetric ? "kM" : "Mi"}
					title="Visibility"
					value={Math.round(visibility)}
					icon={faEye}
				/>
			</div>
		</div>
	);
};

LocationAndInfo.propTypes = {
	location: PropTypes.string.isRequired,
	feelsLike: PropTypes.number.isRequired,
	visibility: PropTypes.number.isRequired,
	isMetric: PropTypes.bool.isRequired,
};

export default LocationAndInfo;
