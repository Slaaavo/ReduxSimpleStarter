import axios from 'axios';

const MAP_API_KEY = '10ae2c2d67c1fcd590f30d3c39a285b2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${MAP_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const response = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: response
  }
}