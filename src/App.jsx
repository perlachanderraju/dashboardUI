import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './vendorDashboard/components/forms/Dashboard'
import LogIn from './vendorDashboard/components/forms/LogIn'
import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App