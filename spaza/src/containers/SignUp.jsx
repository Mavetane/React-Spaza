import React from 'react';
import { useState } from 'react';
import { ADD_USER } from '../redux/actions/actionTypes';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Shopping from './Shopping';



const SignUp = () => {
  const [formInfo, setFormInfo] = useState({ email: "", password: "" })
  const users = useSelector(state => state.users)
  const dispatch = useDispatch();
  const [login, setLogin] = useState({ state: false })


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("formInfo", formInfo)
    setFormInfo({
      email: "", password: ""
    })
  }
  const addUser = (formInfo) => {
    return async () => {
      try {
        await axios.post("http://localhost:5000/users/signup", { ...formInfo })
        dispatch({
          type: ADD_USER,
          payload: { formInfo }
        })
        setLogin({
          state: !login.state
        })
        console.log(login.state)
      } catch (e) {
        console.log(e)
      }
    }
  }

  const handleChange = (e) => {
    setFormInfo({
      ...formInfo, [e.target.name]: e.target.value
    });
  }
  return (
    <div>
      {login.state == false ?
        <div>
          <h1>SignUp</h1>
          <form onSubmit={(e) => onSubmit(e)} method="POST">
            <label>Email: </label>
            <input type="email" placeholder="Email" value={formInfo.email} onChange={handleChange} name="email" />
            <label >Password: </label>
            <input type="password" placeholder="Password" value={formInfo.password} onChange={handleChange} name="password" />
            <button onClick={addUser(formInfo)}>Submit</button>
          </form>
        </div>
        : <Shopping />}
    </div>)
}


export default SignUp;