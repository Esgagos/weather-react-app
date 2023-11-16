import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Searchbox.css";

const apiKey = "6e77343taf210f7060a5ae1ab4ao9183";

export default function Searchbox() {
  const [cityDetails, setCityDetails] = useState(undefined);
  const searchValueInputRef = useRef("");
  const city = useRef("");

  const processResponse = useCallback((response) => {
    const r = response.data;

    return {
      icon: r.condition.icon,
      date: new Date(r.time * 1000),
      wind: r.wind?.speed ? `${r.wind.speed} km/h` : " ",
      humidity: r.temperature?.humidity ? `${r.temperature.humidity} %` : " ",
      description: r.condition?.description || " ",
      temperature: r.temperature?.current
        ? Math.round(r.temperature?.current)
        : null,
    };
  }, []);

  const showWeather = useCallback(
    (response) => {
      if (response.data) {
        const processedResponse = processResponse(response);
        setCityDetails(processedResponse);
      }
    },
    [processResponse]
  );

  const handleSubmit = useCallback(
    (event) => {
      if (event) {
        event.preventDefault();
        city.current = searchValueInputRef.current.value;
      } else {
        city.current = "London";
      }
      const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city.current}&key=${apiKey}`; //`https://api.openweathermap.org/data/2.5/weather?q=${city.current}&appid=${apiKey}&units=metric`;
      axios
        .get(apiUrl)
        .catch((e) => {
          console.log(e);
        })
        .then(showWeather);
    },
    [showWeather]
  );

  useEffect(() => {
    if (!cityDetails) {
      handleSubmit();
    }
  }, [cityDetails, handleSubmit]);

  return (
    <div>
      <form className="d-flex search" onSubmit={handleSubmit}>
        <input
          ref={searchValueInputRef}
          className="form-control me-2"
          type="search"
          placeholder="Enter location"
          aria-label="Search"
          id="search-input"
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
      {cityDetails && <WeatherInfo info={cityDetails} location={city} />}
      {cityDetails && <WeatherForecast location={city.current} />}
    </div>
  );
}
