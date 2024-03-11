import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { fetchWeatherData } from "../../utils/apiUtils";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleGetWeather = async () => {
    if (city && country) {
      navigate(`/weather-details/${city}/${country}`);
    }
  };

  return (
    <div className="weather_dashboard_container">
      <div className="dashboard_title">
        <h1>Weather Forecast</h1>
      </div>
      <div className="dashboard__input__container">
        <Input
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          label="City Name"
        />
        <br />
        <Input
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          label="Country Name"
        />
        <br/>
        <br/>
        <Button onClick={handleGetWeather}>Get Weather</Button>
      </div>
    </div>
  );
};

export default Dashboard;
