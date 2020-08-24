import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../redux/actions/auth';
import { connect } from 'react-redux';

const Login = () => {
  const [loginDetails, setloginData] = useState({ email: "", password: "" })
  const dispatch = useDispatch()
  const error = useSelector(state => state.error)

  const submit = (e) => {
    e.preventDefault();
    dispatch(signin(loginDetails))
  }

  return (

    <form onSubmit={(e) => submit(e)}>
      <h4>LogIn</h4>
      <input type="text"
        placeholder="email"
        value={loginDetails.email}
        name="email"
        onChange={(e) => setloginData({ ...loginDetails, [e.target.name]: e.target.value })} />
      <input type="password"
        value={loginDetails.password}
        onChange={(e) => setloginData({ ...loginDetails, [e.target.name]: e.target.value })}
        name="password"
        placeholder="password" />
      <br />
      <p style={{ color: "red" }}>{error} </p>
      <input type="submit" />
    </form>
  )
}


export default Login
