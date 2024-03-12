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
    <div className="weather_dashboard_container" data-testid="dashboard-component">
      <div className="input__containers">
        <div className="city_input">
          <Input
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            label="City Name"
          />
        </div>
        <div className="contry_input">
          <Input
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            label="Country Name"
          />
        </div>
      </div>
      <div className="button__container">
        <Button onClick={handleGetWeather}>Get Weather</Button>
      </div>
      <br />
    </div>
  );
};

export default Dashboard;
