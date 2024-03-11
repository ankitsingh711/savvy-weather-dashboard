import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import WeatherDetails from "./pages/WeatherDetails";
import ErrorBoundary from "./ErrorBoundary";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route
            exact
            path="/weather-details/:city/:country"
            element={<WeatherDetails />}
          />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
