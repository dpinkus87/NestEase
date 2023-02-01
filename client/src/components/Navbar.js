import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

const styles = {
  color: {
      background: '#051923'
  }
}

function Navbar() {
  return (
    <nav style={styles.color}>
      <div className="container">
        <ul>
          <li className="nav-items">
          <Link className="text-dark" to="/">
              <h3 style={{ fontSize: "1.25rem" }}>Website Name</h3>
            </Link>
          </li>
        </ul>
        <ul
          className="nav nav-tabs"
          id="nav-mobile"
          class="right hide-on-med-and-down"
        >
          <li className="nav-items">
          <Link className="text-dark" to="/market">
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700" }}>
                Products
              </h3>
            </Link>
          </li>
          <li className="nav-items">
          <Link className="text-dark" to="/services">
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700" }}>
                Services
              </h3>
            </Link>
          </li>
          <li>
          <Link className="text-dark" to="/login">
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700" }}>
                Login
              </h3>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
