import React, { useState } from 'react';
import './App.css';
import WeatherCard from './WeatherCard';

const API_KEY = "Replace with your OpenWeatherMap API key"; // Replace with your OpenWeatherMap API key

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const getWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeather(data);
      setError('');
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') getWeather();
  };

  return (
    <div className="app">
      <h1>Weather App ☀️</h1>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={getWeather}>Get Weather</button>
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
