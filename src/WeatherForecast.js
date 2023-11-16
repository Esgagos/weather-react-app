import React, { useEffect, useState } from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(undefined);

  const handleResponse = (response) => {
    console.log("response: ", response);
    return setForecast(response.data?.daily);
  };

  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.location}&key=6e77343taf210f7060a5ae1ab4ao9183&units=metric`;

  useEffect(() => {
    axios.get(apiUrl).then(handleResponse);
  }, [props.location, apiUrl]);

  return (
    forecast && (
      <div className="weather-forecast">
        <div className="row forecast-container">
          {forecast.slice(0, 5).map((dailyForecast, index) => {
            return (
              <div className="col-lg-2 day-card" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}
