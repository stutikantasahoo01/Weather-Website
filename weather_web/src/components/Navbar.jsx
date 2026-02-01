import { MapPin, SunMoon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "./ContextData";

const Navbar = () => {
  const [City, setCity] = useState("");
  const { ApiData, getData, setWeatherData } = useContext(MyContext);
  const data = ApiData?.[0];
  const latitude = data?.latitude;
  const longitude = data?.longitude;
  async function getWeather() {
    if (latitude === undefined || longitude === undefined) return;
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`,
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  }
  const CityName = data?.name;
  const handleSubmit = () => {
    const TrimCity = City.trim();
    if (TrimCity === "") {
      alert("Please enter a valid city name");
      setCity("");
      return;
    }
    const hasNumber = /\d/.test(TrimCity);
    if (hasNumber) {
      alert("City names should not contain any number.");
      setCity("");
      return;
    }
    if (TrimCity.length <= 2) {
      alert("City name is too short.");
      setCity("");
      return;
    }
    getData(TrimCity);
    setCity("");
  };
  useEffect(() => {
    getWeather();
  }, [latitude, longitude]);

  return (
    <div className="flex justify-between px-4 h-[15]">
      <h3 className="flex text-white font-semibold items-center  ">
        <MapPin strokeWidth={1.45} size={15} />
        {CityName}
      </h3>
      <div className="flex gap-3 ">
        <input
          className="px-8 py-4 text-black border-white bg-amber-100 rounded-2xl border-none outline-none font-medium "
          type="search"
          value={City}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="Enter your city here"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        <button
          onClick={handleSubmit}
          className="px-2 font-semibold flex items-center justify-center text-black border-white bg-amber-100 rounded-xl  active:scale-90"
        >
          Submit
        </button>
      </div>
      <button
        className={`px-5 py-4 text-black border-white bg-amber-100 rounded-xl `}
      >
        <SunMoon size={20} strokeWidth={2} />
      </button>
    </div>
  );
};

export default Navbar;
