import React from "react";
import "./App.css";

function Faq() {
  return (
    <div className="App">
      <br />
      <p>
        <font face="Times New Roman" size="+2" color="green">
          What are some of your goals?
        </font>
      </p>
      <p>
        <font face="Times New Roman" size="+1" color="black">
          To attract and retain a technology community in the area and beyond.
        </font>
      </p>
      <p>
        <font face="Times New Roman" size="+2" color="green">
          What are some of the challenges you face?
        </font>
      </p>
      <p>
        <font face="Times New Roman" size="+1" color="black" clasName="center">
          <p>
            Having a stable internet connection that can allow our teams to
            focus on accomplishing projects without interruptions.
          </p>
          <p>
            {" "}
            Also, a connection that can support video conferencing because we
            often interact with other developers around the world.
          </p>
        </font>
      </p>
    </div>
  );
}

export default Faq;
