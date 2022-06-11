const fetchWeatherAPI = (() => {
  const getWeather = async () => {
    const locationResponse = await fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=bangkok&appid=408fcef602304b907beceaaabd2af48a"
    );
    const locationData = await locationResponse.json();
    const lat = locationData[0].lat;
    const lon = locationData[0].lon;

    const weatherResponse =
      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=408fcef602304b907beceaaabd2af48a
`);
    const weatherData = await weatherResponse.json();
    console.log(locationData, weatherData, lat, lon);
  };

  return {
    getWeather,
  };
})();

export default fetchWeatherAPI;
