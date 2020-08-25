import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { CHANGE_AUTHORIZATION, AUTH_SAVE_USER } from '../redux/actions/actionTypes'
import store from '../redux/store/index';
import axios from 'axios';

export const checkAuthState = async () => {
  var token = localStorage.getItem('token');
  if (token) {
    const decodedToken = jwtDecode(token)
    console.log(decodedToken)
    if (decodedToken.lat < decodedToken.expireDate) {
      const { data } = await axios.post(`http://localhost:5000/users/refreshToken/${store.getState().users.userId}`)
      localStorage.removeItem("token");
      localStorage.setItem("token", data.token)
    }
    store.dispatch({ type: AUTH_SAVE_USER, payload: decodedToken })
    store.dispatch({
      type: CHANGE_AUTHORIZATION,
      payload: true
    })

  }
}


export const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  checkAuthState()
  return (
    <Route {...rest}
      component={
        props => store.getState().isAuthorized ? (
          <Component {...rest} {...props} />
        ) : (
            <Redirect to="/signup" />
          )
      } />
  );
}

function refreshPage () {
  window.location.reload();
}

export const PublicRoute = ({
  component: Component,
  ...rest
}) => {
  checkAuthState()
  return (
    <Route {...rest}
      component={
        props => !store.getState().isAuthorized ? (
          <Component {...rest} {...props} />
        ) : (
            <Redirect to="/shopping" />
          )
      } />
  );
}
