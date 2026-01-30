import { Wind, MapPinXInside, Code } from "lucide-react";
import { useContext } from "react";
import { MyContext } from "./ContextData";

const LeftContent = () => {
  const { WeatherData, setWeatherData, weatherLookup } = useContext(MyContext);

  const temp = WeatherData?.current?.temperature_2m ?? "--";
  const wind = WeatherData?.current?.wind_speed_10m ?? "--";
  const humidity = WeatherData?.current?.relative_humidity_2m ?? "--";
  const finalTemp = temp !== undefined ? Math.floor(temp) : "--";
  const CurrentWeatherCode = WeatherData?.current?.weather_code ?? "--";
  const CodeInfo = weatherLookup[CurrentWeatherCode] || { label: "Loading..." };

  return (
    <div className="w-1/3 flex flex-col justify-center items-center gap-10 p-3 h-80 ">
      <div className="flex flex-col justify-baseline gap-2">
        <h1 className="text-4xl font-bold"> {finalTemp}°C</h1>
        <h2 className="text-3xl font-bold mt-4">{CodeInfo.label}</h2>
      </div>
      <div className="flex gap-10">
        <div className=" flex flex-col justify-center">
          <h3 className="text-2xl flex gap-2 items-center ">
            <Wind size={25} strokeWidth={2.5} />
            Wind
          </h3>
          <h4 className="text-xl mt-3 ">{wind} Km/h</h4>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <h3 className="text-2xl flex gap-2 items-center ">
            <MapPinXInside size={22} strokeWidth={2.5} />
            Humidity
          </h3>
          <h4 className="text-xl mt-3 ">{humidity} %</h4>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
