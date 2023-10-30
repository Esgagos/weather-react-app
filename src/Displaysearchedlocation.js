import React from "react";
import "./Displaysearchedlocation.css";

export default function Displaysearchedlocation() {
  let windGust = 14;
  let temperature = 25;
  let humidity = 53;
  let location = "London";
  return (
    <div className="container">
      <div className="row gap-5">
        <div className="col textPosition">
          <div>
            <h1 className="location">{location}</h1>
            <div className="degrees">
              <div className="temp-value"></div>
              <div className="units">
                <span href="/" className="temp-link active">
                  &nbsp;{temperature}Cº
                </span>
                <span className="divider">|</span>
                <span href="/" className="temp-link">
                  77 Fº
                </span>
              </div>
            </div>
            <div className="weather-information">
              <p className="description"></p>

              <p className="temperature">
                Wind gust (mph) {windGust}
                <br />
                Humidity {humidity}%
              </p>
              <p className="temperature"></p>
              <p className="temperature">
                <small>
                  Last updated: <span>10th October 2023</span>
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="col iconPosition">
          <img
            src={"//ssl.gstatic.com/onebox/weather/64/sunny.png"}
            alt={"Weather icon"}
            className="weatherImage"
          />
        </div>
      </div>
    </div>
  );
}
