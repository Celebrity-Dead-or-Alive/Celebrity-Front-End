import React, { useState } from 'react'
import Button from './Button'
import { axiosWithAuth } from "../utils/axiosWithAuth"

const SignupScreen = (props) => {
  const [signUpCred, setsignUpCred] = useState({
    username: 'jsmith2',
    firstName: 'John',
    lastName: 'Smith',
    email: 'jsmith@gmail.com',
    password: 'pass'
  })

  const handleChange = (e) => {
    setsignUpCred({ 
        ...signUpCred, 
        [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('https://celebs-back-end.herokuapp.com/api/auth/register', signUpCred)
    .then(res => {
      props.history.push('/login')
    })
    .catch(err => {
      console.error(err);
    })
  }

  return (
    <div className='signup-screen'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
          Userame
          <input
            placeholder='username'
            value={signUpCred.username}
            name='username'
            onChange={handleChange}
          />
        </label>
        <label htmlFor='email'>
          Email
          <input
            type='email'
            placeholder='email'
            value={signUpCred.email}
            name='email'
            onChange={handleChange}
          />
        </label>
        <label htmlFor='password'>
          Password
          <input
            type='password'
            placeholder='password'
            value={signUpCred.password}
            name='password'
            onChange={handleChange}
          />
        </label>
        <Button type='submit' buttonText={'Submit'} pathName={''} />
      </form>
    </div>
  )
}

export default SignupScreen