const weatherIcon = document.getElementById('weather-icon');
const mainTemperature = document.getElementById('main-temperature');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const windGust = document.getElementById('wind-gust');
const weatherMain = document.getElementById('weather-main');
const locationElement = document.getElementById('location');
const citySelect = document.getElementById('city-select');
const getWeatherBtn = document.getElementById('get-weather-btn');
const weatherInfo = document.querySelector('.weather-info');

const API_BASE_URL = 'https://weather-proxy.freecodecamp.rocks/api/city/';

async function getWeather(city) {
  try {
    const response = await fetch(`${API_BASE_URL}${city}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function showWeather() {
  const city = citySelect.value;
  if (!city) return;

  const data = await getWeather(city);

  if (!data) {
    alert('Something went wrong, please try again later');
    return;
  }

  // Display the weather info container
  weatherInfo.classList.remove('hidden');

  // Update elements
  locationElement.textContent = data.name || 'N/A';

  // Main Temperature
  if (data.main && data.main.temp !== undefined) {
    mainTemperature.textContent = `${data.main.temp}°C`;
  } else {
    mainTemperature.textContent = 'N/A';
  }

  // Feels Like
  if (data.main && data.main.feels_like !== undefined) {
    feelsLike.textContent = `${data.main.feels_like}°C`;
  } else {
    feelsLike.textContent = 'N/A';
  }

  // Humidity
  if (data.main && data.main.humidity !== undefined) {
    humidity.textContent = `${data.main.humidity}%`;
  } else {
    humidity.textContent = 'N/A';
  }

  // Wind Speed
  if (data.wind && data.wind.speed !== undefined) {
    wind.textContent = `${data.wind.speed} m/s`;
  } else {
    wind.textContent = 'N/A';
  }

  // Wind Gust
  if (data.wind && data.wind.gust !== undefined) {
    windGust.textContent = `${data.wind.gust} m/s`;
  } else {
    windGust.textContent = 'N/A';
  }

  // Weather Main & Icon
  if (data.weather && data.weather.length > 0) {
    weatherMain.textContent = data.weather[0].main || 'N/A';
    weatherIcon.src = data.weather[0].icon || '';
    weatherIcon.alt = data.weather[0].description || 'Weather icon';
  } else {
    weatherMain.textContent = 'N/A';
    weatherIcon.src = '';
    weatherIcon.alt = '';
  }
}

getWeatherBtn.addEventListener('click', showWeather);
