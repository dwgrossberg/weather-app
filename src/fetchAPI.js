const fetchWeatherAPI = (() => {
  // Open Cage Data API  - reverse geolocation to find nearest city using lat and lon provided by geoLocation API
  const getLocation = async (lat, lon) => {
    try {
      const geoResponse = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=c241c7e8158441e18dfe41ecb82d7374`
      );
      const geoData = await geoResponse.json();
      return geoData;
    } catch (err) {
      console.log(err);
    }
  };

  const getWeather = async (city) => {
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=408fcef602304b907beceaaabd2af48a&units=metric`
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
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=408fcef602304b907beceaaabd2af48a&units=metric`
      );
      const forecastData = await forecastResponse.json();
      return forecastData;
    } catch (err) {
      console.log(err);
    }
  };

  getForecast("bangkok");

  return {
    getLocation,
    getWeather,
    getForecast,
  };
})();

export default fetchWeatherAPI;
