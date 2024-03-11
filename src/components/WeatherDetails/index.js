// WeatherDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchWeatherData } from '../../utils/apiUtils';

const WeatherDetails = () => {
  const { city, country } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData(city, country);
        console.log('this is data', data)
        setWeatherData(data);
      } catch (error) {
        setError('Failed to fetch weather data. Please try again later.');
      }
    };

    fetchData();
  }, [city, country]);

  return (
    <div>
      <h1>Weather Details Page</h1>
    </div>
  );
};

export default WeatherDetails;
