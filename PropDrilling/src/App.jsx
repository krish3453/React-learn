import { useEffect, useState,useContext } from 'react'

import  UserContext  from './utils/context.js'

function App() {


  return (
    <UserContext.Provider value="KRISHNA">
  <div style={{border:"2px solid red", padding:'20px'}}>
    <h1>APP</h1>
    <GrandParent />
  </div>
  </UserContext.Provider>
  )
}

export default App

import React from 'react'

function GrandParent({userName}) {
  return (
    <div  style={{border:"2px solid green", padding:'20px'}} >
      <h1>GrandParent</h1>
      <Parent />
      </div>
  )
}


function Parent({name}) {
  return (
    <div  style={{border:"2px solid black", padding:'20px'}}><h1>Parent</h1><Child/></div>
  )
}


function Child({name}) {
  const userName = useContext(UserContext)
  return (
    <div  style={{border:"2px solid blue", padding:'20px'}}><h1>Child</h1>
    <p>{userName}</p>
    </div>
  )
}

