import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchContact } from "../actions/listActions";
import { Helmet } from "react-helmet";

class ContactList extends Component {
  constructor() {
    super();

    this.state = {
      minHeight: "500px",
    };
  }

  componentDidMount() {
    this.props.fetchContact();
  }

  head() {
    return (
      <Helmet bodyAttributes={{ class: "menuPage" }}>
        <title>{`Contact List`}</title>
      </Helmet>
    );
  }

  render() {
    return (
      <div
        className="ftco-section"
        style={{
          minHeight: this.state.minHeight,
        }}
      >
        {this.head()}
        <h1>Conatcts List</h1>
        {this.props.list ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {this.props.list.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.subject}</td>
                  <td>{item.message}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <Redirect to="/contact" />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.list.items,
});

ContactList = connect(mapStateToProps, { fetchContact })(ContactList);

export default {
  component: ContactList,
};
