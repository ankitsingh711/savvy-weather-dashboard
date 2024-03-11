import axios from "axios";

const clientId = "3eTcTWBV6vP1B4MBb5QjBvl5NyhNe2CsYS1-s5Ma_8U";

const API_BASE_URL = "https://api.unsplash.com";

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

// Function to fetch place images with google places API

export const getPhotosByQuery = async (city) => {
  try {
    const response = await axiosInstance.get(`/search/photos`, {
      params: {
        query: city,
        client_id: clientId,
        per_page: 1,
      },
    });
    return response;
  } catch (error) {
    return handleApiError(error);
  }
};

export default axiosInstance;
