import React from "react";
import "materialize-css/dist/css/materialize.min.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav>
      <div className="container">
        <ul>
          <li className="nav-items">
            <a
              href="#Home"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Product" ? "nav-link active" : "nav-link"
              }
            >
              Website Name
            </a>
          </li>
        </ul>
        <ul
          className="nav nav-tabs"
          id="nav-mobile"
          class="right hide-on-med-and-down"
        >
          <li className="nav-items">
            <a
              href="#Products"
              onClick={() => handlePageChange("Product")}
              className={
                currentPage === "Product" ? "nav-link active" : "nav-link"
              }
            >
              Products
            </a>
          </li>
          <li className="nav-items">
            <a
              href="#Services"
              onClick={() => handlePageChange("Services")}
              className={
                currentPage === "Services" ? "nav-link active" : "nav-link"
              }
            >
              Services
            </a>
          </li>
          <li>
            <button>Log In Here!</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
