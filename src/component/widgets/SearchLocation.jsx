import React, { useContext, useRef, useState } from "react";
import { WeatherContext } from "../../contexts/contexts";
import utils from "../../utils/utils";
import { search } from "../../services/searchLocationService";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchLocation = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const wthrCtxt = useContext(WeatherContext);
    const searchRef = useRef(null);

    const handleSearchClick = () => {
        searchRef.current.focus();
    };

    const fetchResults = async (query) => {
        const data = await search(query);
        if (data) {
            setSearchResult(data.data);
        }
    };

    const searchFunction = utils.debounce(fetchResults, 600);

    const handleChange = ({ target: input }) => {
        setSearchQuery(input.value);
        searchFunction(input.value);
    };

    const onLocationSelect = (loc) => {
        setSearchResult([]);
        wthrCtxt.updateLoc(loc);
    };

    return (
        <div className="inline-block rounded-full border border-gray-400 px-2 py-1">
            <div className="relative inline-block w-0 transition-all duration-700 focus-within:w-[150px]">
                <input
                    className="transition-all duration-500 focus:border-0 focus:w-[150px] outline-none caret-slate-200 leading-3 text-sm w-full bg-transparent"
                    type="text"
                    autoComplete="off"
                    value={searchQuery}
                    onChange={handleChange}
                    name="location_input"
                    placeholder="Search..."
                    ref={searchRef}
                />
                <ul className="bg-black bg-opacity-60 rounded-br-md rounded-bl-md overflow-hidden w-full absolute">
                    {searchResult.map((opt) => (
                        <li
                            value={opt.name}
                            key={opt.id}
                            className="text-gray-20 px-3 py-2 hover:bg-opacity-30 hover:bg-black cursor-pointer"
                            onClick={() => onLocationSelect(opt.name)}>
                            {`${opt.name}, ${opt.country}`}
                        </li>
                    ))}
                </ul>
            </div>
            <button className="" onClick={handleSearchClick}>
                <FontAwesomeIcon icon={faSearch} style={{ color: "#ccc" }} />
            </button>
        </div>
    );
};

export default SearchLocation;
