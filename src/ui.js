import fetchWeatherAPI from "./fetchAPI.js";
import thunderstormD from "./assets/thunderstorm-d.jpg";
import thunderstormN from "./assets/thunderstorm-n.jpg";
import drizzleD from "./assets/drizzle-d.jpg";
import drizzleN from "./assets/drizzle-n.jpg";
import rainD from "./assets/rain-d.jpg";
import rainN from "./assets/rain-n.jpg";
import snowD from "./assets/snow-d.jpg";
import snowN from "./assets/snow-n.jpg";
import atmosphereD from "./assets/atmosphere-d.jpg";
import atmosphereN from "./assets/atmosphere-n.jpg";
import clearD from "./assets/clear-d.jpg";
import clearN from "./assets/clear-n.jpg";
import cloudsD from "./assets/clouds-d.jpg";
import cloudsN from "./assets/clouds-n.jpg";

const displayController = (() => {
  const setWeather = async () => {
    // Default weather on page load
    const weatherData = await fetchWeatherAPI.getWeather("bangkok");
    const weatherTime = weatherData.weather[0].icon.substring(
      weatherData.weather[0].icon.length - 1
    );
    const weatherTemp = weatherData.main.temp.toFixed(1);
    const weatherIcon = weatherData.weather[0].icon;
    console.log(weatherData);
    setBackground(weatherData.weather[0].main, weatherTime);
    setTemp(weatherTemp);
    setIcon(weatherIcon);
  };
  setWeather();

  const setBackground = (weather, time) => {
    switch (weather) {
      case "Thunderstorm":
        switch (time) {
          case "d":
            document.body.style.backgroundImage = `url(${thunderstormD})`;
            break;
          case "n":
            document.body.style.backgroundImage = `url(${thunderstormN})`;
            break;
        }
        break;
      case "Drizzle":
        switch (time) {
          case "d":
            document.body.style.backgroundImage = `url(${drizzleD})`;
            break;
          case "n":
            document.body.style.backgroundImage = `url(${drizzleN})`;
            break;
        }
        break;
      case "Rain":
        switch (time) {
          case "d":
            document.body.style.backgroundImage = `url(${rainD})`;
            break;
          case "n":
            document.body.style.backgroundImage = `url(${rainN})`;
            break;
        }
        break;
      case "Snow":
        switch (time) {
          case "d":
            document.body.style.backgroundImage = `url(${snowD})`;
            break;
          case "n":
            document.body.style.backgroundImage = `url(${snowN})`;
            break;
        }
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
        switch (time) {
          case "d":
            document.body.style.backgroundImage = `url(${atmosphereD})`;
            break;
          case "n":
            document.body.style.backgroundImage = `url(${atmosphereN})`;
            break;
        }
        break;
      case "Clear":
        switch (time) {
          case "d":
            document.body.style.backgroundImage = `url(${clearD})`;
            break;
          case "n":
            document.body.style.backgroundImage = `url(${clearN})`;
            break;
        }
        break;
      case "Clouds":
        switch (time) {
          case "d":
            document.body.style.backgroundImage = `url(${cloudsD})`;
            break;
          case "n":
            document.body.style.backgroundImage = `url(${cloudsN})`;
            break;
        }
        break;
    }
  };

  const setTemp = (temp) => {
    const tempDOM = document.getElementById("temp");
    tempDOM.innerHTML = temp + "&#xb0;" + "F";
  };

  const setIcon = (icon) => {
    const iconDOM = document.getElementById("icon");
    const img = document.createElement("img");
    img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    iconDOM.appendChild(img);
  };

  return {};
})();

export default displayController;
