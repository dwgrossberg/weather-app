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

  return {
    getWeather,
  };
})();

export default fetchWeatherAPI;
