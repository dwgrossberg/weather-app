import fetchWeatherAPI from "./fetchAPI.js";

const displayController = (() => {
  const setWeather = async () => {
    // Default weather on page load
    const weatherData = await fetchWeatherAPI.getWeather("bangkok");
    console.log(weatherData);
    setBackground(weatherData.weather[0].main);
  };
  setWeather();

  const setBackground = (weather) => {
    switch (weather) {
      case "Thunderstorm":
        document.body.style.backgroundImage =
          "url('./assets/thunderstorm.gif')";
        break;
      case "Drizzle":
        document.body.style.backgroundImage = "./assets/drizzle.gif";
        break;
      case "Rain":
        document.body.style.backgroundImage = "./assets/rain.gif";
        break;
      case "Snow":
        document.body.style.backgroundImage = "./assets/snow.gif";
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
        document.body.style.backgroundImage = "./assets/drizzle.gif";
        break;
      case "Clear":
        document.body.style.backgroundImage = "./assets/clear-sky.gif";
        break;
      case "Clouds":
        // document.body.style.backgroundImage = "url(./assets/clouds.gif)";
        console.log(document.body.style.backgroundImage);
        break;
    }
  };

  return {};
})();

export default displayController;
