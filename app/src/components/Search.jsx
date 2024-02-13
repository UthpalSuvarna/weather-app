import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";

function Search() {
  return (
    <div className="flex justify-center items-center">
    <div className=" text-white flex flex-row justify-center my-6 w-3/4 items-center">
      <div className="flex flex-row w-3/4 items-center justify-center ">
        <input
          type="text"
          placeholder="Search for a city"
          className="bg-transparent border-b-2 border-white w-3/4 p-2 focus:outline-none capitalize m-4"
        />
        <UilSearch className="text-white cursor-pointer transition ease-out hover:scale-125 m-4" />
        <UilLocationPoint className="text-white cursor-pointer transition ease-out hover:scale-125 m-4" />
      </div>
      <div className="flex flex-row items-center justify-center">
            <button name="metric" className=" text-xl font-light mx-2">°C</button>
            <p>|</p>
            <button name="imperial" className=" text-xl font-light mx-2">°F</button>
      </div>
    </div>
    </div>
  );
}

export default Search;
