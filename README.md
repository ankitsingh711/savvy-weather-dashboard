### Weather Dashboard App

Deployed on Vercel - https://savvy-weather-dashboard-71ovcz06h.vercel.app/ 

This project is a React application designed to fulfill the requirements outlined in the coding challenge provided. It allows users to search for weather information by city and country names and displays detailed weather information on a separate page.

### Features

Dashboard: Users can enter city and country names in the search bar and click the "Get Weather" button to retrieve weather information.
Weather Details Page: After clicking the "Get Weather" button, users are redirected to a details page displaying weather details such as temperature, humidity, and wind speed.
API Integration: The OpenWeatherMap API is used to fetch weather information based on user input.
Material-UI: The UI is implemented using Material-UI components for a clean and responsive design.
Component Structure: The functionality is divided into reusable components for the dashboard, weather details, and other relevant parts of the app.

weather-dashboard-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Dashboard.js
│   │   ├── WeatherDetails.js
│   │   └── ...
│   │
│   ├── services/
│   │   └── weatherService.js
│   │
│   ├── App.js
│   ├── index.js
│   └── ...
|   |__ utils/
|       |__ apiUtils.js
|       |__ getPlaceImage.js
|       |__ getDayFromDate.js

|   |__ common/
|       |__ Input.js
|       |__ Button.js
|       |__ LoadinSpinner.js
|   
|   |__pages/
|       |__ Dashboard/
|           |__ index.js
|            |__ index.test.js
│
├── .gitignore
|__ errorBoundary.js
├── package.json
├── README.md
└── ...

### Getting Started

To run this project locally, follow these steps:

Clone this repository to your local machine.
Install dependencies using npm install.
Rename .env.example file to .env and replace [YOUR_API_KEY] with your OpenWeatherMap API key.
Start the development server using npm start.

