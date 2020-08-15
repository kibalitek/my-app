import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Gallery() {
  const styleObj = {
    fontSize: 18,
    textAlign: "left",
    paddingTop: "5px",
    paddingLeft: "20px",
    paddingRight: "20px",
  };

  return (
    <div class="container">
      <br /> <br />
      <div className="d-flex justify-content-center">
        <img
          src={require("./start_team.jpg")}
          alt="Start Team Kibali-Tech"
          height="500"
          width="800"
          className="float-center img-responsive"
        />
        <br />
      </div>
      <p>
        <p className="d-flex justify-content-center" style={styleObj}>
          Beginning Team (2019)
        </p>
      </p>
    </div>
  );
}

export default Gallery;
