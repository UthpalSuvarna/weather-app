import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilWind,
  UilSun,
  UilSunset,
  UilTear,
} from "@iconscout/react-unicons";

function TempAndDetails() {
  return (
    <div className="flex justify-center items-center">
      <div className=" w-4/6">
        <div className="flex items-center justify-center text-xl">
          <p className="text-white font-extralight my-10">Rainy/Sunny </p>
        </div>
        <div className="text-white flex flex-row justify-evenly items-center py-3">
          <img src="../../public/logo512.png" alt="sun" className=" w-72"/>
          <p className="flex flex-col space-y-2 text-6xl font-bold">19C</p>
          <div className="flex flex-col space-y-2 w-72">
            <div className="flex font-light items-center justify-start">
              <UilTemperature size={18} className=" m-2" />
              Real feel:
              <span className=" font-bold m-1">34</span>
            </div>
            <div className="flex font-light items-center justify-start">
              <UilTear size={18} className=" m-2" />
              Humidity:
              <span className=" font-bold m-1">65%</span>
            </div>
            <div className="flex font-light items-center justify-start">
              <UilWind size={18} className=" m-2" />
              Wind Speed: 
              <span className=" font-bold m-1">3 km/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TempAndDetails;
