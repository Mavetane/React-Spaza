import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/actions/auth';

const SignUp = () => {
  const [formInfo, setFormInfo] = useState({ password: '', email: '' })
  const dispatch = useDispatch()


  const submit = () => {
    console.log(formInfo)
    dispatch(signup(formInfo))
  }

  return (
    <div>
      <h4>SignUp</h4>
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })}
          value={formInfo.email}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })}
          value={formInfo.password}
        />
        <button onClick={() => submit(formInfo)}> submit </button>
      </div>
    </div>
  )

}

export default SignUp;