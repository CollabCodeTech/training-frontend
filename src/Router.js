import React from "react";
import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forgot";
import ResendConfirmAccount from "./pages/ResendConfirmAccount";

import Dashboard from "./pages/Dashboard";

function Router() {
  return (
    <Routes>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />

        <Route path="/auth/signup" component={Signup} />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/forgot" component={Forgot} />
        <Route
          path="/auth/resend-confirmation-account"
          component={ResendConfirmAccount}
        />
      </Switch>
    </Routes>
  );
}

export default Router;
