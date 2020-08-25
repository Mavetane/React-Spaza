import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import SignUp from '../containers/SignUp';
import { PrivateRoute, PublicRoute } from '../routes/customRoutes';
import Shopping from '../containers/Shopping';
import LandingPage from '../containers/LandingPage';
import Login from '../containers/Login';
// import Navbar from '../containers/Navbar';

export const loadRoutes = () => {
  return (
    <Router history={history}>
      <div>
        {/* <Navbar /> */}
        <PublicRoute
          exact
          path="/signup"
          component={props => <SignUp {...props} />}
        />

        <PublicRoute
          exact
          path="/shopping"
          component={props => <Shopping {...props} />}
        />
        <PublicRoute
          exact
          path="/"
          component={props => <LandingPage {...props} />}
        />

        <PublicRoute
          exact
          path="/signin"
          component={props => <Login {...props} />}
        />

      </div>
    </Router>
  )

}