import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <hr />
        <div className="row">
          {/* column1 */}
          <div className="col">
            <h4>Kibali-Tech</h4>
            <ul className="list-unstyled">
              <li>(256) 754 78 3782</li>
              <li>kibalitek@gmail.com</li>
              <li>Sibarara Road</li>
              <li>Busia, Uganda</li>
            </ul>
          </div>
          {/* column2 */}
          <div className="col">
            <h4>Our Hours</h4>
            <ul className="list-unstyled">
              <li>Monday-Friday: 9am - 5pm</li>
              <li>Saturday: 10am - 3pm</li>
              <li>Sunday Closed</li>
            </ul>
          </div>
          {/* column3 */}
          <div className="col">
            <h4>Service Area</h4>
            <ul className="list-unstyled">
              <li>Uganda</li>
              <li>East Africa</li>
              <li>International</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm d-flex justify-content-center">
            &copy; {new Date().getFullYear()} Kibali-Tech | All rights reserved
            | Terms of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
