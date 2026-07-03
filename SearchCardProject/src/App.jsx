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
    <div className='bg-violet-300 text-center min-h-screen max-w-fit flex flex-col items-center'  >
      <h1 className='text-4xl pt-4 md:text-5xl'>RASTE KA MAAL SASTE MEIN</h1>
      <div className='mt-3 '>
        <input className='p-3 bg-gray-200/75  rounded-bl-3xl rounded-tl-3xl focus:outline-none md:pr-12.5'  type='text'
         placeholder='KYA CHAHIYE?...'
          onChange={
            (e)=>setVal(e.target.value)
          }/>
        <button className='p-3 px-7 bg-green-600/70 rounded-br-3xl rounded-tr-3xl md:pr-12.5' onClick={fiterHandler}>Search</button>
      </div>
      {filterData.length<=0 ?<h1 className='text-7xl mt-40'>NO ITEM</h1>: <Card data={filterData}/>}
      <Card data={filterData}/>
    </div>
  )
}

export default App
