import React from "react";

const WeatherCard = ( {weatherData} ) => {
  return (
    <div style={{width:'300px'}} className="bg-gray-800 rounded-lg p-6 shadow-md text-white mt-4">
      <h2 className="text-2xl font-bold mb-4">{weatherData?.name}</h2>
      <div className="flex justify-between">
        <div>
          <p className="text-lg font-semibold mb-2">{weatherData?.main?.temp}°C</p>
          <p className="text-sm">{weatherData?.weather[0]?.description}</p>
        </div>
        <div className="flex items-center">
          <img
            className="h-12 w-12 mr-2"
            src={`http://openweathermap.org/img/w/${weatherData?.weather[0]?.icon}.png`}
            alt={weatherData?.weather[0]?.description}
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <p className="text-sm font-semibold">Feels Like:</p>
          <p className="text-sm">{weatherData?.main?.feels_like}°C</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-semibold">Humidity:</p>
          <p className="text-sm">{weatherData?.main?.humidity}%</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-semibold">Wind:</p>
          <p className="text-sm">{weatherData?.wind?.speed} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
