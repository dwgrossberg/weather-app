import fetchWeatherAPI from "./fetchAPI.js";
import clouds from "./assets/clouds.gif";
import drizzle from "./assets/drizzle.gif";
import thunderstorm from "./assets/thunderstorm.gif";
import rain from "./assets/rain.gif";
import snow from "./assets/snow.gif";
import mist from "./assets/fog.gif";
import clear from "./assets/clear-sky.gif";

const displayController = (() => {
  const setWeather = async () => {
    // Default weather on page load
    const weatherData = await fetchWeatherAPI.getWeather("beijing");
    console.log(weatherData);
    setBackground(weatherData.weather[0].main);
  };
  setWeather();

  const setBackground = (weather) => {
    switch (weather) {
      case "Thunderstorm":
        document.body.style.backgroundImage = `url(${thunderstorm})`;
        break;
      case "Drizzle":
        document.body.style.backgroundImage = `url(${drizzle})`;
        break;
      case "Rain":
        document.body.style.backgroundImage = `url(${rain})`;
        break;
      case "Snow":
        document.body.style.backgroundImage = `url(${snow})`;
        break;
      case "Mist":
      case "Smoke":
      case "Haze":
      case "Dust":
      case "Fog":
      case "Sand":
      case "Ash":
      case "Squall":
      case "Tornado":
        document.body.style.backgroundImage = `url(${mist})`;
        break;
      case "Clear":
        document.body.style.backgroundImage = `url(${clear})`;
        break;
      case "Clouds":
        document.body.style.backgroundImage = `url(${clouds})`;
        break;
    }
  };

  return {};
})();

export default displayController;
