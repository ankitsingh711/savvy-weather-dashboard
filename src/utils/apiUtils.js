import axios from "axios";

const API_KEY = "8ff6b1c427824112b02b9f92f1485bbb";
const API_BASE_URL = "https://api.weatherbit.io/v2.0";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to handle API errors
const handleApiError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    console.error("API Error Status:", error.response.status);
    console.error("API Error Data:", error.response.data);
    return Promise.reject(error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error("No response received from API:", error.request);
    return Promise.reject({
      message: "No response from server. Please try again later.",
    });
  } else {
    // Something else happened while setting up the request
    console.error("Error setting up the request:", error.message);
    return Promise.reject({
      message:
        "An error occurred while processing your request. Please try again later.",
    });
  }
};

// Function to fetch weather data by city and country
export const fetchWeatherData = async (city, country) => {
  try {
    const response = await axiosInstance.get(`/history/energy`, {
      params: {
        city: city,
        country,
        key: API_KEY,
        start_date: "2024-01-11",
        end_date: "2024-01-18"
      },
    });
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export default axiosInstance;
