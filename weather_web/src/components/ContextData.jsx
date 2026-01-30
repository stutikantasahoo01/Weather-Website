import { createContext, useEffect, useState } from "react";
export const MyContext = createContext();

const ContextData = (props) => {
  const weatherLookup = {
    0: {
      label: "Clear Sky",
      icon: "https://img.icons8.com/?size=160&id=72jK8a9VDKgF&format=png",
    },
    1: {
      label: "Mainly Clear",
      icon: "https://cdn-icons-png.freepik.com/512/7780/7780231.png?ga=GA1.1.45033350.1769686552",
    },
    2: {
      label: "Partly Cloudy",
      icon: "https://cdn-icons-png.freepik.com/512/11356/11356919.png?ga=GA1.1.45033350.1769686552",
    },
    3: {
      label: "Overcast",
      icon: "https://cdn-icons-png.freepik.com/512/10557/10557875.png?ga=GA1.1.45033350.1769686552",
    },
    45: {
      label: "Foggy",
      icon: "https://cdn-icons-png.freepik.com/512/7962/7962905.png?ga=GA1.1.45033350.1769686552",
    },
    51: {
      label: "Light Drizzle",
      icon: "https://cdn-icons-png.freepik.com/512/12131/12131338.png?ga=GA1.1.45033350.1769686552",
    },
    61: {
      label: "Slight Rain",
      icon: "https://cdn-icons-png.freepik.com/512/15776/15776161.png?ga=GA1.1.45033350.1769686552",
    },
    63: {
      label: "Moderate Rain",
      icon: "https://cdn-icons-png.freepik.com/512/18683/18683553.png?ga=GA1.1.45033350.1769686552",
    },
    65: {
      label: "Heavy Rain",
      icon: "https://cdn-icons-png.freepik.com/512/8647/8647927.png?ga=GA1.1.45033350.1769686552",
    },
    71: {
      label: "Slight Snow",
      icon: "https://cdn-icons-png.freepik.com/512/17816/17816596.png?ga=GA1.1.45033350.1769686552",
    },
    80: {
      label: "Rain Showers",
      icon: "https://cdn-icons-png.freepik.com/512/10293/10293807.png?ga=GA1.1.45033350.1769686552",
    },
    85: {
      label: "Slight Snow Showers",
      icon: "https://cdn-icons-png.freepik.com/512/11579/11579650.png?ga=GA1.1.45033350.1769686552",
    },
    95: {
      label: "Thunderstorm",
      icon: "https://cdn-icons-png.freepik.com/512/6198/6198899.png?ga=GA1.1.45033350.1769686552",
    },
    96: {
      label: "Storm with Hail",
      icon: "https://cdn-icons-png.freepik.com/512/11128/11128715.png?ga=GA1.1.45033350.1769686552",
    },
  };
  const [WeatherData, setWeatherData] = useState(null);
  const [ApiData, setApiData] = useState(null);
  const getData = async (cityName = "Bhubaneswar") => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`,
      );
      const data = await response.json();
      setApiData(data.results || []);
    } catch (error) {
      console.error("GeoCoding Fetch Failed", error);
    }
  };
  const WeatherCode = WeatherData?.daily?.weather_code || [];

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <MyContext.Provider
        value={{
          ApiData,
          getData,
          WeatherData,
          setWeatherData,
          weatherLookup,
          WeatherCode,
        }}
      >
        {props.children}
      </MyContext.Provider>
    </>
  );
};

export default ContextData;
