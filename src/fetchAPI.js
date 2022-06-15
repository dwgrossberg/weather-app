const fetchWeatherAPI = (() => {
  const getWeather = async (city) => {
    try {
      const weatherResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=408fcef602304b907beceaaabd2af48a&units=metric`
      );
      const weatherData = await weatherResponse.json();
      return weatherData;
    } catch (err) {
      console.log(err);
    }
  };

  const getForecast = async (city) => {
    try {
      const forecastResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=408fcef602304b907beceaaabd2af48a&units=metric`
      );
      const forecastData = await forecastResponse.json();
      return forecastData;
    } catch (err) {
      console.log(err);
    }
  };

  getForecast("bangkok");

  return {
    getWeather,
    getForecast,
  };
})();

export default fetchWeatherAPI;
