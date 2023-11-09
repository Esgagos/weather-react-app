import React from "react";

export default function FormattedDate(props) {
  console.log("thisDate: ", props.thisDate);
  const day = props.thisDate.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hour = props.thisDate.getHours();
  let minute = props.thisDate.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div>
      {days[day]} {hour}:{minute}
    </div>
  );
}
