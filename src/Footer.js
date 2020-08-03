import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column1 */}
          <div className="col">
            <h4>KibaliTech</h4>
            <ul className="list-unstyled">
              <li>(256) 111-111111</li>
              <li>Busia, Uganda</li>
              <li>Sibarara Road</li>
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
            &copy; {new Date().getFullYear()} KibaliTech | All rights reserved |
            Terms of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;