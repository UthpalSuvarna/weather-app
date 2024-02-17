import React from "react";

function Forecast({title}) {
  return (
    <div>
      <div className=" flex justify-center items-center">
        <div className=" mt-10 w-3/5">
          <p className=" text-white font-semibold uppercase">{title}</p>
          <hr className="border-t border-white w-full my-2" />
        </div>
      </div>
      <div className="flex justify-center items-center</div> my-5">
        <div className="flex flex-row items-center justify-between text-white mx-10">
          <div className="flex flex-col items-center justify-center">
            <p className="font-light">13:00pm</p>
          <img src="logo192.png" alt="" className=" w-12 my-3" />
          <p className="font-medium">22</p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between text-white mx-10">
          <div className="flex flex-col items-center justify-center">
            <p className="font-light">13:00pm</p>
          <img src="logo192.png" alt="" className=" w-12 my-3" />
          <p className="font-medium">22</p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between text-white mx-10">
          <div className="flex flex-col items-center justify-center">
            <p className="font-light">13:00pm</p>
          <img src="logo192.png" alt="" className=" w-12 my-3" />
          <p className="font-medium">22</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between text-white mx-10">
          <div className="flex flex-col items-center justify-center">
            <p className="font-light">13:00pm</p>
          <img src="logo192.png" alt="" className=" w-12 my-3" />
          <p className="font-medium">22</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between text-white mx-10">
          <div className="flex flex-col items-center justify-center">
            <p className="font-light">13:00pm</p>
          <img src="logo192.png" alt="" className=" w-12 my-3" />
          <p className="font-medium">22</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
