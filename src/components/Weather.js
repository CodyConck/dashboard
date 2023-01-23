import React from "react";

const api = {
  key: "e75aa5e68edd6ab995431322cabca5dc",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="weather-container">
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
        ></input>
      </div>
      <div className="location-box">
        <div className="location">Nashville, US</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
    </div>
  );
};

export default Weather;
