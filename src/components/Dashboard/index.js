import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
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
        <Input
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          label="City Name"
        />
        <Input
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          label="Country Name"
        />
        <br/>
        <Button onClick={handleGetWeather}>Get Weather</Button>
    </div>
  );
};

export default Dashboard;
