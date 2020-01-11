import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import TestSuite from "./containers/TestSuite";
import IncorporationForm from "./containers/IncorporationForm";
export default () =>
  <Switch>
    {/*<Route path="/" exact component={Home} />*/}
    <Route path="/login" exact component={Login} />
    <Route path="/" exact component={TestSuite} />
    <Route path="/test" exact component={IncorporationForm} />
  </Switch>;