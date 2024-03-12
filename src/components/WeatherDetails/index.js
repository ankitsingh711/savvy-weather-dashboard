  import ReactDOM from "react-dom";
  import React, { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import { fetchWeatherData } from "../../utils/apiUtils";
  import LocationOnIcon from "@mui/icons-material/LocationOn";
  import CircularProgress from "@mui/material/CircularProgress";
  import CloudIcon from "@mui/icons-material/Cloud";
  import AirIcon from '@mui/icons-material/Air';
  import { Card, CardContent, CardMedia } from "@mui/material";
  import getDayFromDate from "../../utils/getDayFromDate";
  import { getPhotosByQuery } from "../../utils/getPlaceImage";
  import WbSunnyIcon from "@mui/icons-material/WbSunny";
  import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
  import AcUnitIcon from '@mui/icons-material/AcUnit';

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
          setPlaceImage(data?.data?.results[0]?.urls?.full);
        } catch (error) {
          setError("Failed to fetch city images");
        }
      };

      fetchImagePlace();
    }, [city, country]);

    return (
      <div className="weather_details">
        {error && <div className="error__message">Error Message Occured</div>}
        {!loading && (
          <div className="weather_details__top">
              <div className="weather_details_img_section">
                <img src={`${placeImage}`} alt="city_image" />
              </div>
              <div className="weather_details_text_section">
              <div className="weather_details_text_section_card" >
                <CardMedia>
                <LocationOnIcon style={{fontSize: "50px"}}/> <h1 style={{display: "inline"}}>{weatherData && weatherData?.city_name}</h1><br/>
                </CardMedia>
              </div>
              </div>
          </div>
        )}

        {!loading && weatherData && (
          <div className="weather_details_container_info">
            {weatherData &&
              weatherData.data.map((day) => (
                <div className="weather_day" key={day?.date}>
                  <Card
                    sx={{ paddingTop: "10px",paddingBottom: "100px",paddingInline: "30px", height: "100px" }}
                    className="card_info_section"
                  >
                    <CardMedia>
                      {day.temp > 10 ? (
                        <WbSunnyIcon style={{color: "yellow"}} />
                      ) : (
                        <CloudIcon color="primary" />
                      )}
                    </CardMedia>
                    <CardContent style={{ padding: "10px" }}>
                      <div
                        className="day_date"
                        style={{
                          backgroundColor: "#68bbef",
                          color: "white",
                          padding: "6px 10px",
                        }}
                      >
                        {getDayFromDate(day?.date)}
                      </div>
                      <br />
                      <div className="day_temp"><DeviceThermostatIcon/>{day?.temp}</div>
                      <div className="wind__speed"> < AirIcon /> - {day?.wind_spd}</div>
                      <div className="snow__speed"> <AcUnitIcon /> <span>{weatherData.data[0].snow}</span> </div>
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
