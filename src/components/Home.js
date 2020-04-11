import React, { Component } from "react";
import bg_1 from "../images/bg_1.jpg";
import bg_2 from "../images/bg_2.jpg";

class Home extends Component {
  render() {
    return (
      <section id="home-section" className="hero js-fullheight ftco-section">
        <h3 className="vr">
          <span>Welcome</span> to MeetUp.
        </h3>
        <div id="timer" className="text-center">
          <div className="time" id="days"></div>
          <div className="time" id="hours"></div>
          <div className="time" id="minutes"></div>
          <div className="time" id="seconds"></div>
        </div>
        <div className="home-sliders owl-carousels js-fullheights">
          <div className="slider-item js-fullheight">
            <div className="overlay"></div>
            <div className="container-fluid px-0">
              <div
                className="row d-md-flex no-gutters slider-text js-fullheight align-items-end justify-content-end"
                data-scrollax-parent="true"
              >
                <div
                  className="one-third order-md-last js-fullheight img"
                  style={{ backgroundImage: `url(${bg_1})` }}
                >
                  <div className="InnerText">
                    <div className="text mt-4 mt-md-0">
                      <h1 className="mb-4 contxt">
                        Annual <span>Conference</span> 2019
                      </h1>
                      <h2 className="mb-4 date-str">
                        November 26-30, 2019 - 08:00am-12:00pm
                      </h2>
                      <p>
                        <a href="#" className="btn btn-primary py-3 px-4">
                          Get Ticket
                        </a>{" "}
                        <a href="#" className="btn btn-white py-3 px-4">
                          Watch Video
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
