import React, { useState, useEffect, useCallback } from "react";

const fahrSymbol = "ºF";
const degSymbol = "ºC";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState(degSymbol);
  const [temperature, setTemperature] = useState(props.temperature);

  const showFahrenheit = useCallback(
    (event) => {
      event && event.preventDefault();
      setTemperature(Math.round((props.temperature * 9) / 5 + 32));
      setUnit(fahrSymbol);
    },
    [props.temperature]
  );

  const showCelsius = useCallback(
    (event) => {
      event && event.preventDefault();
      setTemperature(props.temperature);
      setUnit(degSymbol);
    },
    [props.temperature]
  );

  useEffect(() => {
    if (unit === degSymbol) {
      showCelsius();
    } else {
      showFahrenheit();
    }
  }, [props.temperature, unit, showCelsius, showFahrenheit]);

  return (
    <div>
      <div
        className={`temperature-wrapper ${
          unit === degSymbol ? "degrees" : "fahrenheit"
        }`}
      >
        <div className="temp-value">{temperature}</div>
        <div className="units">
          <span className="temp-link active">{unit}</span>
          <span className="divider">|</span>
          <a
            href="/"
            className="temp-link"
            onClick={unit === degSymbol ? showFahrenheit : showCelsius}
          >
            {unit === degSymbol ? fahrSymbol : degSymbol}
          </a>
        </div>
      </div>
    </div>
  );
}
