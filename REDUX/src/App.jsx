import { useState } from 'react'
import { useSelector } from 'react-redux'
import { increment, decrement } from './util/counterSlice.js'
import { useDispatch } from 'react-redux'

function App() {
  const data=useSelector((state)=>state.counter)
  const dispatch=useDispatch()

  function handleIn(){
    dispatch(increment(1))
  }

  function handleDec(){
    dispatch(decrement(1))
  }

  console.log(data)
  return (
    <>
      <h1>COUNTER</h1>
      <h2>{data.value}</h2>
      <button onClick={handleIn}>INCREMENT</button>
      <button onClick={handleDec}>DECREMENT</button>
    </>
  )
}

export default App
