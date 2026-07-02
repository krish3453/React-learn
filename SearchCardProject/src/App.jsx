import { useState } from 'react'
import { Card } from './Component/Card.jsx'
import data from './utils/constant.js';


function App() {
  const [val,setVal]=useState('')
  const[filterData,setFilterData]=useState(data)

  function fiterHandler(){
    let res=data.filter((item)=>
      item.title.toLowerCase().includes(val.toLowerCase())
    )
    setFilterData(res)
    
  }

  return (
    <div>
      <h1>RASTE KA MAAL SASTE MEIN</h1>
      <div>
        <input type='text'
         placeholder='KYA CHAHIYE?...'
          onChange={
            (e)=>setVal(e.target.value)
          }/>
        <button onClick={fiterHandler}>Search</button>
      </div>
      <Card data={filterData}/>
    </div>
  )
}

export default App
