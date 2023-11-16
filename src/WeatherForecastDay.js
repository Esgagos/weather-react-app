import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  const date = () => {
    const day = props.data.time;
    console.log(day);
    let weekDate = new Date(day * 1000);
    const weekDay = weekDate.getDay();
    const weekDates = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const numberDate = weekDate.getDate();
    const month = weekDate.getMonth();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (
      <div>
        {weekDates[weekDay]} {numberDate} {months[month]}
      </div>
    );
  };

  const maxTemp = () => {
    return Math.round(props.data.temperature.maximum);
  };
  const minTemp = () => {
    return Math.round(props.data.temperature.minimum);
  };
  const descriptionDay = () => {
    const str = props.data.condition?.description;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const windDay = () => {
    return Math.round(props.data.wind?.speed);
  };
  const humidityDay = () => {
    return props.data.temperature.humidity;
  };

  return (
    <div>
      <ul>
        <li className="date">{date()}</li>
        <img
          src={props.data.condition?.icon_url}
          className="description-icon"
        />
        <li className="temperature-max">
          {maxTemp()}º&nbsp;
          <span className="temperature-min">&nbsp;{minTemp()}º</span>
        </li>

        <li className="description">{descriptionDay()}</li>
        <li className="wind">Wind gust {windDay()} mph</li>
        <li className="humidity">Humidity {humidityDay()}%</li>
      </ul>
    </div>
  );
}
