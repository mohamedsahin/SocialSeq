import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./component/page/Home";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
