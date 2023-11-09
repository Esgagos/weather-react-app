import React from "react";
import FormattedDate from "./formattedDate.js";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  console.log("props: ", props);
  return (
    <div>
      {props.info && (
        <div className="container">
          <div className="row gap-5">
            <div className="col textPosition">
              <div>
                <h1 className="location">{props.location.current}</h1>
                <WeatherTemperature temperature={props.info.temperature} />
                <div className="weather-information">
                  <p className="description"></p>

                  <p className="temperature">
                    Wind gust (mph) {props.info.wind}
                    <br />
                    Humidity {props.info.humidity}
                  </p>
                  <p className="temperature"></p>
                  <div className="temperature">
                    <FormattedDate thisDate={props.info.date} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col iconPosition">
              <img
                src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.info.icon}.png`}
                alt={"props.info.description"}
                className="weatherImage"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
