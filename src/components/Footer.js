import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import jqueryWaypoints from "../js/jquery.waypoints.min.js";
import owlCarousel from "../js/owl.carousel.min.js";
import main from "../js/main.js";

const Footer = () => (
  <footer className="ftco-footer ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            Copyright &copy; All rights reserved | This template is made with{" "}
            <i className="icon-heart color-danger" aria-hidden="true"></i> by{" "}
            <a href="#" target="_blank">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
