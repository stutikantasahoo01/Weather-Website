import { useContext } from "react";
import { MyContext } from "./ContextData";

const CenterContent = () => {
  const { WeatherData, weatherLookup } = useContext(MyContext);
  const code = WeatherData?.current?.weather_code ?? 0;
  const CurrInfo = weatherLookup[code] || { icon: "" };

  return (
    <div className="w-1/3 flex justify-center items-center h-80">
      <img className="h-[90%] ]w-[90%]" src={CurrInfo.icon} alt="Image of Weather" />
    </div>
  );
};

export default CenterContent;
