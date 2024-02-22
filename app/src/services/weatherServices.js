const API_KEY = "126b116ae61028c05f26d6905be14b49";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid:API_KEY });

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getWeatherData;