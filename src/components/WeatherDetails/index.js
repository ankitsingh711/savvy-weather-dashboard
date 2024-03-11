import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWeatherData } from "../../utils/apiUtils";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CircularProgress from "@mui/material/CircularProgress";
import CloudIcon from "@mui/icons-material/Cloud";
import ThermostatAutoIcon from "@mui/icons-material/ThermostatAuto";
import { Card, CardContent, CardMedia } from "@mui/material";
import getDayFromDate from "../../utils/getDayFromDate";
import { getPhotosByQuery } from "../../utils/getPlaceImage";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const WeatherDetails = () => {
  const { city, country } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [placeImage, setPlaceImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchWeatherData(city, country);
        console.log(data);
        setWeatherData(data);
      } catch (error) {
        setError("Failed to fetch weather data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const fetchImagePlace = async () => {
      try {
        setLoading(true);
        const data = await getPhotosByQuery(city);
        setPlaceImage(data.data.results[0].urls.full);
      } catch (error) {
        setError("Failed to fetch city images");
      }
    };

    fetchImagePlace();
  }, [city, country]);

  return (
    <div className="weather_details">
      {!loading && (
        <div className="weather_details__top">
          <div className="weather_details__city__name">
            <h1>{weatherData && weatherData?.city_name}</h1>
          </div>
          <div className="weather_details_city__image">
            <img src={`${placeImage}`} alt="City_Image" />
          </div>
          <div className="weather_details__location_icon">
            <div className="location_icon">
              <LocationOnIcon fontSize="large" />
              <h3 style={{ fontSize: "14px" }}>
                {city.toLocaleUpperCase()},{" "}
                <span>{country.toLocaleUpperCase()}</span>
              </h3>
            </div>
          </div>
        </div>
      )}

      {!loading && (
        <div className="weather_details_container_info">
          {weatherData &&
            weatherData.data.map((day) => (
              <div className="weather_day" key={day.date}>
                <Card
                  sx={{ width: 100, padding: "20px", height: "100px" }}
                  className="card_info_section"
                >
                  <CardMedia>
                    {day.temp > 10 ? (
                      <WbSunnyIcon color="yellow" />
                    ) : (
                      <CloudIcon color="primary" />
                    )}
                  </CardMedia>
                  <CardContent style={{ padding: "5px" }}>
                    <div
                      className="day_date"
                      style={{
                        backgroundColor: "#68bbef",
                        boarderRadius: "50%",
                        color: "white",
                        padding: "5px 8px",
                      }}
                    >
                      {getDayFromDate(day.date)}
                    </div>
                    <br />
                    <div className="day_temp">{day.temp}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
        </div>
      )}

      {loading &&
        ReactDOM.createPortal(
          <div
            style={{
              zIndex: 9999,
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <CircularProgress />
          </div>,
          document.body
        )}
    </div>
  );
};

export default WeatherDetails;
