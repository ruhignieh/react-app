import React, { Component } from "react";
// import { Router } from "react-router";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

// import ScreensUserForm from "./User/Form";
// import ScreensUserList from "./User/List";
import ScreensHome from "./Home/Home";

const ScreensRoot = () => (
  <Router>
    <Switch>
      <Route path="/" component={ScreensHome} />
      {/* <Route path="/user/list" component={ScreensUserList} />
      <Route path="/user/create" component={ScreensUserForm} />
      <Route path="/user/:id" component={ScreensUserForm} /> */}
    </Switch>
  </Router>
);

export default ScreensRoot;
