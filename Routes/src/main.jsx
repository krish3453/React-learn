import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import Resume from './Components/Resume.jsx'
import Home from './Components/Home.jsx'
//2nd method for route
let router=createBrowserRouter([
  {
    path:"/",
    element: <Home/> 
  },
  {
    path:"/Resume",
    element:<Resume/>
  }
])


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
  

