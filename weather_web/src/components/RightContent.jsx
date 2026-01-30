import React, { useContext, useEffect } from "react";
import { MyContext } from "./ContextData";
import DayPrediction from "./DayPrediction";

const RightContent = () => {
  const { WeatherData, weatherLookup, WeatherCode } = useContext(MyContext);
  console.log(WeatherData);
  const WeakDate = WeatherData?.daily?.time;
  const WeakTemp = WeatherData?.daily?.temperature_2m_max;
  if (!WeakDate || !WeakTemp) return "Loading";

  return (
    <div className="w-1/3 flex justify-end items-center px-4 h-80">
      <div className="w-[60%] rounded-xl border-2 border-cyan-700 p-3 flex flex-col gap-1">
        {WeakDate.map((elem, idx) => {
          return (
            <DayPrediction
              elem={elem}
              key={idx}
              Temp={WeakTemp[idx]}
              WeatherLookup={weatherLookup}
              CurrentCode={WeatherCode[idx]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RightContent;
