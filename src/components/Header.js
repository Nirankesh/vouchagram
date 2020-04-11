import React from "react";
import { NavLink } from "react-router-dom";

import "../css/open-iconic-bootstrap.min.css";
import "../css/animate.css";
import "../css/owl.carousel.min.css";
import "../css/owl.theme.default.min.css";
import "../css/magnific-popup.css";
import "../css/aos.css";
import "../css/ionicons.min.css";
import "../css/flaticon.css";
import "../css/icomoon.css";
import "../css/style.css";

const Header = () => (
  <nav
    className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light site-navbar-target scrolled awake"
    id="ftco-navbar"
  >
    <div className="container">
      <a className="navbar-brand" href="index.html">
        Meet<span>Up.</span>
      </a>
      <button
        className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="oi oi-menu"></span> Menu
      </button>

      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav nav ml-auto">
          <li className="nav-item">
            <NavLink to="" className="nav-link">
              <span>Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="contact" className="nav-link">
              <span>Contact</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="contact-list" className="nav-link">
              <span>Contact List</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="menu-list" className="nav-link">
              <span>Menu List</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
