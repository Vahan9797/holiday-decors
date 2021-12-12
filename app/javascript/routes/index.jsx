import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/Home/Home";
import AdminPanel from '../components/admin/AdminPanel';
import Login from '../components/admin/Login';

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/admin" component={AdminPanel} />
      <Route exact path='/login'>
        { loggedInUser ? <Redirect to="/admin" /> : <Login />}
      </Route>
      <Route exact path="/signup">
        { loggedInUser ? <Redirect to="/admin" /> : <Login />}
      </Route>
    </Switch>
  </Router>
);