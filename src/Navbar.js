import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid weather-forecast-nav">
        <span className="navbar-brand weather" href="/">
          Weather forecast
        </span>
      </div>
    </nav>
  );
}
