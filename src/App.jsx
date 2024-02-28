import React, { useEffect } from 'react'
import Signup from './pages/Signup'
import './App.css'
import { Router_App } from './config/Router_App'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { set_products_data } from './store/slices/Products_slice'

const App = () => {
  
  return (
   <Router_App />
  )
}

export default App