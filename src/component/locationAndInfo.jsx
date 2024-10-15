import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfoCard from "./infoCard";
import PropTypes from "prop-types";
import {
  faDroplet,
  faLocationDot,
  faSearch,
  faEye,
  faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";
import SearchLocation from "./searchLocation";

const LocationAndInfo = (props) => {
  const { location, humidity, feelsLike, visibility, isMetric } = props;

  let searchRef = useRef(null);

  // Focuses the input field <SearchLocation/>
  let handleSearchClick = () => {
    let inp = searchRef.current;
    inp.focus();
  };

  return (
    <div className="flex flex-nowrap row-span-1">
      <div
        className="gap-2 flex text-gray-300 w-8/12 justify-start items-start pt-3"
        style={{ lineHeight: "16px" }}>
        <FontAwesomeIcon icon={faLocationDot} style={{ color: "#bcc" }} />
        <span className="font-semibold">{location}</span>

        <div className="inline-block rounded-full border border-gray-400 px-2 py-1">
          <SearchLocation ref={searchRef} />
          <button className="" onClick={handleSearchClick}>
            <FontAwesomeIcon icon={faSearch} style={{ color: "#ccc" }} />
          </button>
        </div>
      </div>
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
