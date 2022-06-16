import format from "date-fns/format";
import parse from "date-fns/parse";
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
  const setWeather = async (place) => {
    const weatherData = await fetchWeatherAPI.getWeather(place);
    const weatherTime = weatherData.weather[0].icon.substring(
      weatherData.weather[0].icon.length - 1
    );
    console.log(weatherData);
    setBackground(weatherData.weather[0].main, weatherTime);
    setTemp(weatherData.main.temp.toFixed(1));
    setIcon(weatherData.weather[0].icon);
    setDescription(weatherData.weather[0].description);
    setLocation(weatherData.name);
    setDate(format(getLocalTime(weatherData.timezone), "E MMM do yyyy"));
    setTime(format(getLocalTime(weatherData.timezone), "hh:mm aaaa"));
    setFeelsLike(weatherData.main.feels_like.toFixed(1));
    setHumidity(weatherData.main.humidity);
    setWindSpeed(weatherData.wind.speed.toFixed(1));
    setSunriseTime(
      format(
        getLocalSunrise(weatherData.timezone, weatherData.sys.sunrise),
        "hh:mm"
      )
    );
    setSunsetTime(
      format(
        getLocalSunset(weatherData.timezone, weatherData.sys.sunset),
        "hh:mm"
      )
    );
    switchTemp();
    setForecast(place);
  };
  setWeather("hamburg");

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
    const tempDOM = document.getElementById("weather-temp");
    tempDOM.innerHTML = temp + "&#xb0;" + " C";
  };

  const setIcon = (icon) => {
    const iconDOM = document.getElementById("weather-icon-img");
    iconDOM.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  const setDescription = (details) => {
    const uppercase = details
      .split(" ")
      .map(
        (item) =>
          (item = item.substring(0, 1).toUpperCase() + item.substring(1))
      )
      .join(" ");
    const descriptionDOM = document.getElementById("description");
    descriptionDOM.innerText = uppercase;
  };

  const setLocation = (place) => {
    const locationDOM = document.getElementById("location");
    locationDOM.innerText = place;
  };

  // Convert timezone offset to local date/time
  const getLocalTime = (timezone) => {
    let date = new Date();
    let time = date.getTime();
    let localOffset = date.getTimezoneOffset() * 60000;
    let utc = time + localOffset;
    let localTime = utc + 1000 * timezone;
    return new Date(localTime);
  };

  const getLocalSunrise = (timezone, sunrise) => {
    let date = new Date(sunrise * 1000);
    let time = date.getTime();
    let localOffset = date.getTimezoneOffset() * 60000;
    let utc = time + localOffset;
    let localTime = utc + 1000 * timezone;
    return new Date(localTime);
  };

  const getLocalSunset = (timezone, sunset) => {
    let date = new Date(sunset * 1000);
    let time = date.getTime();
    let localOffset = date.getTimezoneOffset() * 60000;
    let utc = time + localOffset;
    let localTime = utc + 1000 * timezone;
    return new Date(localTime);
  };

  const setDate = (date) => {
    const dateDOM = document.getElementById("date");
    dateDOM.innerText = date;
  };

  const setTime = (time) => {
    const timeDOM = document.getElementById("time");
    timeDOM.innerText = time;
  };

  const setFeelsLike = (temp) => {
    const feelsLikeDOM = document.getElementById("feels-like-data");
    feelsLikeDOM.innerHTML = temp + "&#xb0;" + " C";
  };

  const setHumidity = (temp) => {
    const humidityDOM = document.getElementById("humidity-data");
    humidityDOM.innerText = temp + " %";
  };

  const setWindSpeed = (wind) => {
    const windSpeedDOM = document.getElementById("wind-speed-data");
    windSpeedDOM.innerText = wind + " km/h";
  };

  const setSunriseTime = (time) => {
    const sunriseDOM = document.getElementById("sunrise-data");
    sunriseDOM.innerText = time;
  };

  const setSunsetTime = (time) => {
    const sunsetDOM = document.getElementById("sunset-data");
    sunsetDOM.innerText = time;
  };

  const tempSwitch = document.getElementById("switch-temp");

  const switchTemp = () => {
    const temp = document.getElementById("weather-temp");
    const feelsLike = document.getElementById("feels-like-data");
    const windSpeed = document.getElementById("wind-speed-data");
    if (tempSwitch.checked === true) {
      temp.innerHTML =
        celsiusToFahrenheit(temp.innerText.slice(0, -3)) + "&#xb0;" + " F";
      feelsLike.innerHTML =
        celsiusToFahrenheit(feelsLike.innerText.slice(0, -3)) + "&#xb0;" + " F";
      windSpeed.innerText =
        kilometersToMiles(windSpeed.innerText.slice(0, -5)) + " mph";
    } else if (temp.innerText.substring(temp.innerText.length - 1) !== "C") {
      temp.innerHTML =
        fahrenheitToCelsius(temp.innerText.slice(0, -3)) + "&#xb0;" + " C";
      feelsLike.innerHTML =
        fahrenheitToCelsius(feelsLike.innerText.slice(0, -3)) + "&#xb0;" + " C";
      windSpeed.innerText =
        milesToKilometers(windSpeed.innerText.slice(0, -4)) + " km/h";
    }
  };

  tempSwitch.addEventListener("change", switchTemp);

  // Unit conversion functions
  const celsiusToFahrenheit = (temp) => {
    return (temp * (9 / 5) + 32).toFixed(1);
  };

  const fahrenheitToCelsius = (temp) => {
    return ((temp - 32) * (5 / 9)).toFixed(1);
  };

  const kilometersToMiles = (speed) => {
    return (speed / 1.609344).toFixed(1);
  };

  const milesToKilometers = (speed) => {
    return (speed * 1.609344).toFixed(1);
  };

  // Search for weather in a new city/place
  const weatherSearch = () => {
    const search = document.getElementById("place-search");
    search.addEventListener("search", () => {
      if (search.value === "") return;
      else {
        setWeather(search.value);
        setForecast(search.value);
      }
    });
  };
  weatherSearch();

  const setLocalTime = () => {
    const localTimeDOM = document.getElementById("local-clock");
    localTimeDOM.innerText = new Date();
    const d = new Date();
    const s = ("0" + d.getSeconds()).slice(-2);
    const m = ("0" + d.getMinutes()).slice(-2);
    const h = ("0" + d.getHours()).slice(-2);
    localTimeDOM.textContent = h + ":" + m + ":" + s;
  };
  setInterval(setLocalTime, 1000);

  // 5-Day Forecast Weather Data
  const setForecast = async (place) => {
    const forecastData = await fetchWeatherAPI.getForecast(place);
    // Remove today's weather data from the next 5 days forecast
    const timeDOM = document.getElementById("time");
    const time24 = parse(
      timeDOM.innerText.slice(0, -5),
      "hh:mm",
      new Date()
    ).getTime();
    const timeEnd = new Date().setHours(24, 0, 0, 0);
    const timeDiff = (timeEnd - time24) / 1000 / 3600;
    const forecastsToSkip = Math.floor(timeDiff / 2);
    for (let i = 0; i < forecastsToSkip; i++) {
      forecastData.list.shift();
    }
    console.log(forecastData);
    const day1 = [];
    const day1Temps = [];
    for (let i = 0; i < 8; i++) {
      day1.push(forecastData.list.shift());
    }
    day1.forEach((item) => {
      day1Temps.push(item.main.temp_max);
    });
    console.log(Math.max(...day1Temps), Math.min(...day1Temps));
    const day2 = [];
    const day2Temps = [];
    for (let i = 0; i < 8; i++) {
      day2.push(forecastData.list.shift());
    }
    day2.forEach((item) => {
      day2Temps.push(item.main.temp_max);
    });
    console.log(Math.max(...day2Temps), Math.min(...day2Temps));
    const day3 = [];
    const day3Temps = [];
    for (let i = 0; i < 8; i++) {
      day3.push(forecastData.list.shift());
    }
    day3.forEach((item) => {
      day3Temps.push(item.main.temp_max);
    });
    console.log(Math.max(...day3Temps), Math.min(...day3Temps));
    const day4 = [];
    const day4Temps = [];
    for (let i = 0; i < 8; i++) {
      day4.push(forecastData.list.shift());
    }
    day4.forEach((item) => {
      day4Temps.push(item.main.temp_max);
    });
    console.log(Math.max(...day4Temps), Math.min(...day4Temps));
    const day5 = [];
    const day5Temps = [];
    for (let i = 0; i < 8; i++) {
      day5.push(forecastData.list.shift());
    }
    day5.forEach((item) => {
      if (item !== undefined) {
        day5Temps.push(item.main.temp_max);
      }
    });
    console.log(Math.max(...day5Temps), Math.min(...day5Temps));
    console.log(day1Temps, day2Temps, day3Temps, day4Temps, day5Temps);
  };

  return {};
})();

export default displayController;
