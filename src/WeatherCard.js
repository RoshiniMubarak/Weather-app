import React from 'react';

function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{weather[0].main} - {weather[0].description}</p>
      <p>🌡️ Temp: {main.temp}°C</p>
      <p>💧 Humidity: {main.humidity}%</p>
      <p>💨 Wind: {wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
