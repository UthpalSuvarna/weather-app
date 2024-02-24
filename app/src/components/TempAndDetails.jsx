import React from "react";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherServices";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilWind,
  UilSun,
  UilSunset,
  UilTear,
} from "@iconscout/react-unicons";

function TempAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    feels_like,
    humidity,
    sunrise,
    sunset,
    speed,
    timezone
  },
}) {
  return (
    <div className="flex justify-center items-center">
      <div className=" w-4/6">
        <div className="flex items-center justify-center text-xl">
          <p className="text-white font-light my-5">{`${details}`}</p>
        </div>
        <div className="text-white flex flex-row justify-evenly items-center py-1">
          <div className="w-60 flex justify-center items-center">
            <img src={iconUrlFromCode(icon)} alt="sun" className=" w-28" />
          </div>
          <p className="flex flex-col space-y-2 text-6xl font-bold w-60 justify-center items-center">
            {`${temp.toFixed()}°C`}
          </p>
          <div className="flex flex-col space-y-2 w-60">
            <div className="flex font-light items-center justify-start">
              <UilTemperature size={18} className=" mx-2" />
              Real feel:
              <span className=" font-bold mx-1">{`${feels_like}°C`}</span>
            </div>
            <div className="flex font-light items-center justify-start">
              <UilTear size={18} className=" mx-2" />
              Humidity:
              <span className=" font-bold mx-1">{`${humidity}%`}</span>
            </div>
            <div className="flex font-light items-center justify-start">
              <UilWind size={18} className=" mx-2" />
              Wind Speed:
              <span className=" font-bold mx-1">{`${speed}`}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center space-x-2 text-white mt-5 py-7">
          <UilSun />
          <p className="text-white font-light">Sunrise{formatToLocalTime(sunrise,timezone,"hh:mm a")}</p>
          <UilSunset />
          <p className="text-white font-light mr-2">Sunset: {formatToLocalTime(sunset,timezone,"hh:mm a")}</p>
          <UilArrowUp />
          <p className="text-white font-light mr-2">Max: {`${temp_max}°C`}</p>
          <UilArrowDown />
          <p className="text-white font-light mr-2">Min: {`${temp_min}°C`}</p>
        </div>
      </div>
    </div>
  );
}

export default TempAndDetails;
