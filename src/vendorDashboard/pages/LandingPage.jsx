import React,{useState} from 'react'
import NavBar from '../components/NavBar'
import LogIn from '../components/forms/LogIn'                  
import SignUp from '../components/forms/SignUp'
import Dashboard from '../components/forms/Dashboard'

const LandingPage = () => {
  const [showLogin,setShowLogin]=useState(false)

  const showLoginHandler=()=>{
    setShowLogin(true)
    setShowRegister(false)
    setShowWelcome(false)
  }                      
  const [showRegister,setShowRegister]=useState(true)

  const showRegisterHandler=()=>{
    setShowRegister(true)
    setShowLogin(false)
    setShowWelcome(false)
  }
  
  const [showWelcome,setShowWelcome]=useState(false)

  const showWelcomeHandler=()=>{
    setShowRegister(false)
    setShowLogin(false)
    setShowWelcome(true)
  }
  return (
    <>
      <section className='landingsection'>
          <NavBar showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler}/>
          <div className='collectionSection'>
            {showLogin && <LogIn showWelcomeHandler={showWelcomeHandler}/>}
            {showRegister && <SignUp showLoginHandler={showLoginHandler}/>}
            {showWelcome && <Dashboard/>}
          </div>  
      </section>
    </>
  )
}

export default LandingPage