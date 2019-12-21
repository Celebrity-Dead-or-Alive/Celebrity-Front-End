import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to='/'>HOME</Link>
      <Link to='/login'>LOGIN</Link>
      <Link to='/signup'>SIGN UP</Link>
    </nav>
  )
}

export default Nav