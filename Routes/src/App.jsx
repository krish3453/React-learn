import { useState } from 'react'
import  Body  from './Components/Body.jsx'
import { Route, Routes } from 'react-router-dom'
import Resume from './Components/Resume.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Project from './Components/Project.jsx'
import Home from './Components/Home.jsx'


function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}>
      <Route path='/Resume' element={<Resume/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Project' element={<Project/>}/>
      <Route path='/' element={<Body/>}/>
      
      </Route>
      
      <Route path='*' element={<h1>Page Not Found</h1>}/>
    </Routes>
  )
}

export default App
