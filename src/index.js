import favicon from "./assets/favicon.ico";
import fetchWeatherAPI from "./fetchAPI.js";

// Set favicon
document.querySelector('[type="image/x-icon"]').href = favicon;

fetchWeatherAPI.getWeather();
