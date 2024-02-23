const API_KEY = "126b116ae61028c05f26d6905be14b49";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getCurrentWeather = async (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather, 
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    speed,
    lat,
    lon,
    details,
    icon
  };
};

const getFormattedData = async (searchParams) => {
  const formattedData = await getWeatherData("weather", searchParams).then(
    (data) => getCurrentWeather(data)
  );

  return formattedData;
};

export default getFormattedData;