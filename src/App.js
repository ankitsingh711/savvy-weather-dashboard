import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/";
import WeatherDetails from "./components/WeatherDetails";
import ErrorBoundary from "./ErrorBoundary";
import './styles/dashboard.css';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route
            path="/weather-details/:city/:country"
            element={<WeatherDetails />}
          />
          <Route exact path="*" element={<NotFound/>}
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
