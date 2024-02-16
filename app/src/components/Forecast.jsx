import React from "react";

function Forecast() {
  return (
    <div>
      <div className=" flex justify-center items-center">
        <div className=" mt-10 w-3/5">
          <p className=" text-white font-semibold uppercase">Hourly Forecast</p>
          <hr className="border-t border-white w-full my-2" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-row items-center justify-between text-white">
          <div className="flex flex-col items-center justify-center">13:00</div>
          
        </div>
      </div>
    </div>
  );
}

export default Forecast;
