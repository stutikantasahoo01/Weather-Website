import React, { useContext, useEffect } from "react";
import { MyContext } from "./ContextData";

const DayPrediction = ({ Temp, elem, WeatherLookup, CurrentCode }) => {
  const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const CurrentDay = new window.Date(elem);
  const DayIndex = CurrentDay.getUTCDay();
  const DayName = Days[DayIndex];
  const temp = Math.floor(Temp);
  const dayInfo = WeatherLookup[CurrentCode] || { label: "N/A", icon: "" };

  return (
    <div className=" flex items-center justify-between px-4 w-full">
      <div className="h-7 w-7">
        <img
          className="w-full h-full object-contain"
          src={dayInfo.icon}
          alt="Icons"
        />
      </div>
      <h2 className=" font-medium ">{DayName}</h2>
      <h3 className=" font-medium ">{temp}°</h3>
    </div>
  );
};

export default DayPrediction;
