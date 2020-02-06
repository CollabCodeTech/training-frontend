import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Styles from "./styles";

import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Styles />

      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </>
  );
}
