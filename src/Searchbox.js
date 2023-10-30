import React from "react";
import "./Searchbox.css";

export default function Searchbox() {
  return (
    <form className="d-flex search">
      <input
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
  );
}
