import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";
import MenuList from "./components/MenuList";
import Footer from "./components/Footer";

const App = () => (
  <Fragment>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/contact-list" component={ContactList} />
        <Route exact path="/menu-list" component={MenuList} />
      </Switch>
      <Footer />
    </Router>
  </Fragment>
);

export default App;
