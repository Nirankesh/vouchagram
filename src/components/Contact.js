import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createContact } from "../actions/createAction";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      redirects: false,
    };
  }

  handleForm(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    let thisIsObject = this.state;
    delete thisIsObject["redirects"];
    this.setState({ redirects: true });
    this.props.createContact(thisIsObject);
    event.preventDefault();
  }

  render() {
    return (
      <section
        className="ftco-section contact-section ftco-no-pb"
        id="contact-section"
      >
        {this.state.redirects ? (
          <Redirect to="/contact-list" />
        ) : (
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 heading-section text-center">
                <span className="subheading">Contact</span>
                <h2 className="mb-4">Contact Me</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
              </div>
            </div>

            <div className="row block-9">
              <div className="col-md-7 order-md-last d-flex">
                <form
                  onSubmit={this.handleSubmit.bind(this)}
                  className="bg-light p-4 p-md-5 contact-form"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                      name="name"
                      value={this.state.name}
                      onChange={this.handleForm.bind(this)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                      name="email"
                      value={this.state.email}
                      onChange={this.handleForm.bind(this)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      required
                      name="subject"
                      value={this.state.subject}
                      onChange={this.handleForm.bind(this)}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      id=""
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="Message"
                      required
                      name="message"
                      value={this.state.message}
                      onChange={this.handleForm.bind(this)}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary py-3 px-5"
                    />
                  </div>
                </form>
              </div>

              <div className="col-md-5 d-flex">
                <div className="row d-flex contact-info mb-5">
                  <div className="col-md-12">
                    <div className="box p-2 px-3 bg-light d-flex">
                      <div className="icon mr-3">
                        <span className="icon-map-signs"></span>
                      </div>
                      <div>
                        <h3 className="mb-3">Address</h3>
                        <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="box p-2 px-3 bg-light d-flex">
                      <div className="icon mr-3">
                        <span className="icon-phone2"></span>
                      </div>
                      <div>
                        <h3 className="mb-3">Contact Number</h3>
                        <p>
                          <a href="tel://1234567920">+ 1235 2355 98</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="box p-2 px-3 bg-light d-flex">
                      <div className="icon mr-3">
                        <span className="icon-paper-plane"></span>
                      </div>
                      <div>
                        <h3 className="mb-3">Email Address</h3>
                        <p>
                          <a href="mailto:info@yoursite.com">
                            info@yoursite.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="box p-2 px-3 bg-light d-flex">
                      <div className="icon mr-3">
                        <span className="icon-globe"></span>
                      </div>
                      <div>
                        <h3 className="mb-3">Website</h3>
                        <p>
                          <a href="#">yoursite.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  redirect: state.create.redirect,
});

export default connect(mapStateToProps, { createContact })(Contact);
