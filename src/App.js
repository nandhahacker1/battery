import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Navbar from './components/Navbar'
import BatteryDetails from './Pages/BatteryDetails'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<BatteryDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App