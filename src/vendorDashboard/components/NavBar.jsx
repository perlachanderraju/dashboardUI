import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({showLoginHandler,showRegisterHandler}) => {
  console.log(showLoginHandler)
  return (
    <div className='navSection'>
      <Link to="/" className='link'>
        <div className="company">
          Home
        </div>
      </Link>
      <div className="userAuth">
        <span onClick={showLoginHandler}>LogIn /</span>
        <span onClick={showRegisterHandler}>SignUP</span>
      </div>
    </div>
  )
}

export default NavBar