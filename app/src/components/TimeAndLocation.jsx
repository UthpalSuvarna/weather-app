import React from "react";
import { formatToLocalTime } from "../services/weatherServices";

function TimeAndLocation({weather:{dt,timezone,name,country}}) {
  return (
    <div>
      <div className="flex justify-center items-center my-6">
        <p className="text-white text-xl font-light">
        {formatToLocalTime(dt, timezone, "ccc, dd MMM yyyy hh:mm a")}
        </p>
      </div>
      <div className="flex justify-center items-center my-6">
        <p className="text-white text-4xl font-bold my-2">{`${name},${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
