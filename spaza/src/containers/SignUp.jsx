import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/actions/auth';

const SignUp = () => {
  const [formInfo, setFormInfo] = useState({ password: '', email: '' })
  const dispatch = useDispatch()


  const submit = () => {
    dispatch(signup(formInfo))
  }


  return (
    <div>
      <div className="box">
        <span className="text-center">SignUp</span>
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })}
            value={formInfo.email}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })}
            value={formInfo.password}
          />
        </div>
        <button className="btn" onClick={() => submit(formInfo)}>submit</button>
      </div>
    </div>
  )

}

export default SignUp;