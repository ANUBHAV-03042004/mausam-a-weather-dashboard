import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import lottie from 'lottie-web';
import SearchBar from './SearchBar.jsx';
import WeatherCard from './WeatherCard.jsx';
import cloudAnimation from './assets/cloud.json';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const animationContainer = useRef(null);

  // Load Lottie animation
  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: cloudAnimation,
      });
    }
    return () => lottie.destroy();
  }, []);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://mausam-a-weather-dashboards-backend.onrender.com/weather?city=${encodeURIComponent(city)}`);
      setWeather(response.data);
    } catch (err) {
      setError(err.response?.data.error || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      {/* Logo with Animation and Text */}
      <div className="text-center mb-4 position-relative">
        <div
          ref={animationContainer}
          className="mx-auto lottie-container"
          style={{ width: '300px', height: '300px' }} 
        ></div>
        <h1 className="logo-text">MAUSAM</h1>
      </div>

      {/* Search Box */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <SearchBar onSearch={fetchWeather} />
        </div>
      </div>

      {/* Weather Card or Error/Loading */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          {loading && (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {error && <p className="text-danger text-center">{error}</p>}
          {weather && <WeatherCard weather={weather} />}
        </div>
      </div>
    </div>
  );
}

export default App;