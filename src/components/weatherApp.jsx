import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './weatherCard';

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = 'c32b8cc2061de1d61c021f9d01a85034';
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;

  const getWeatherData = async () => {
    const response = await axios.get(`${BASE_URL}${location}`);
    setWeatherData(response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherData();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
        <section>
            
        </section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="p-3 rounded-lg bg-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-3 ml-2 rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Get Weather
        </button>
      </form>
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default WeatherApp;