import React from 'react';

function WeatherCard({ weather }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body text-center">
        <h2 className="card-title">{weather.city}</h2>
        <img
          src={weather.icon}
          alt={weather.condition}
          className="mb-3"
          style={{ width: '50px' }}
        />
        <p className="card-text">Temperature: {weather.temperature}°C</p>
        <p className="card-text">Condition: {weather.condition}</p>
        <p className="card-text">Humidity: {weather.humidity}%</p>
        <p className="card-text">Wind Speed: {weather.windSpeed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;