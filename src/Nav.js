import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/gallery">
          <li>Gallery</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li>Shop</li>
        </Link>
        <Link style={navStyle} to="/work">
          <li>Work</li>
        </Link>
        <Link style={navStyle} to="/database">
          <li>Database</li>
        </Link>
        <Link style={navStyle} to="/footer">
          <li>Footer</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
