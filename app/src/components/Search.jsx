import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { useState } from "react";

function Search({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleUnits = (e) => {
    const selectedUnit = e.currentTarget.name;
    if(units !== selectedUnit) setUnits(selectedUnit  )
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" text-white flex flex-row justify-center my-6 w-3/4 items-center">
        <div className="flex flex-row w-3/4 items-center justify-center ">
          <input
            value={city}
            onChange={(e) => {
              setCity(e.currentTarget.value);
              console.log(e.currentTarget.value);
            }}
            type="text"
            placeholder="Search for a city"
            className="bg-transparent border-b-2 border-white w-3/4 p-2 focus:outline-none capitalize m-4"
          />
          <UilSearch
            className="text-white cursor-pointer transition ease-out hover:scale-125 m-4"
            onClick={handleSearch}
          />
          <UilLocationPoint
            className="text-white cursor-pointer transition ease-out hover:scale-125 m-4"
            onClick={handleLocation}
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <button
            name="metric"
            className=" text-xl font-light mx-2 hover:scale-150 transition ease-out"
            onClick={handleUnits}
          >
            °C
          </button>
          <p>|</p>
          <button
            name="imperial"
            className=" text-xl font-light mx-2 hover:scale-150 transition ease-out"
            onClick={handleUnits}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
