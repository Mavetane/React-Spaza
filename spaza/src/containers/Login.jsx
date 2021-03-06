import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../redux/actions/auth';

const Login = () => {
  const [loginDetails, setloginData] = useState({ email: "", password: "" })
  const dispatch = useDispatch()
  const error = useSelector(state => state.error)

  const submit = (e) => {
    e.preventDefault();
    dispatch(signin(loginDetails))
  }

  return (
    <div className="Sign-up">
      <div className="box">
        <form onSubmit={(e) => submit(e)}>
          <span className="text-center">SignIn</span>
          <div className="input-container">
            <input type="text"
              placeholder="email"
              value={loginDetails.email}
              name="email"
              onChange={(e) => setloginData({ ...loginDetails, [e.target.name]: e.target.value })} />
          </div>
          <div className="input-container">
            <input type="password"
              value={loginDetails.password}
              onChange={(e) => setloginData({ ...loginDetails, [e.target.name]: e.target.value })}
              name="password"
              placeholder="password" />
            <br />
            <p style={{ color: "red" }}>{error} </p>
          </div>
          <input type="submit" class="btn" />
        </form>
      </div>
    </div>
  )
}


export default Login
