import React, { useState } from 'react'
import Button from './Button'
import { axiosWithAuth } from "../utils/axiosWithAuth"

const LoginScreen = (props) => {
  const [user, setUser] = useState({ 
    username: '', 
    password: '' 
  });

  const handleChange = (e) => {
    setUser({ 
      ...user, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('https://celebs-back-end.herokuapp.com/api/auth/login', user)
    .then(res => {
      console.log('response',res.data)
      localStorage.setItem('token', res.data.token);
      props.history.push('/')
    })
    .catch(err => {
      console.log(err);
    })
  }
  
 

  return (
    <div className='login-screen'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>
          Username
          <input
            placeholder='email'
            value={user.username}
            name='username'
            onChange={handleChange}
          />
        </label>
        <label htmlFor='password'>
          Password
        <input
            type='password'
            placeholder='password'
            value={user.password}
            name='password'
            onChange={handleChange}
          />
        </label>
        <div className='buttons'>
          <Button type='submit' buttonText={'Login'} pathName={''} />
          {/* <Button type='submit' buttonText={'Sign Up'} pathName={'signup'} /> */}
        </div>
      </form>
    </div>
  )
}

export default LoginScreen