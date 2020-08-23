import React from "react";
import "./App.css";

function Events() {
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
          src={require("./tech_sat2.jpg")}
          alt="Start Team Kibali-Tech"
          height="500"
          width="800"
          className="float-center img-responsive"
        />
        <br />
      </div>
      <p>
        <p className="d-flex justify-content-center" style={styleObj}>
          Kibali-Tech Technology Saturday 22/08/2020
        </p>
        <p>
          Technology enthusiasts in Busia and surrounding areas met at
          Kibali-Tech Cafe for an open discussion regarding how to harness
          technology to enhance progress in the area.
        </p>
        <p>
          The event which was organized and sponsored by Kibali-Tech an
          Information Technology start-Up located in Busia was a huge success.
          It was attended by who is who in Busia including the Mayor and many
          leaders from the business community, academia, and others.
        </p>
        <p> Highlights to follow:</p>
      </p>
    </div>
  );
}

export default Events;
