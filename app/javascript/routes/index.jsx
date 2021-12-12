import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/contact-us" exact component={Contact} /> */}
    </Switch>
  </Router>
);