import { useState } from "react";

function App() {

  let [data,setData] = useState(0)      //HOOK

  // let count=0;

  function increVal(){

    setData((data)=>data+1)
    // console.log("hello");
    // count++
  }

  function decreVal(){
    setData(data - 1)
    // console.log("hello");
    // count--;
    
  }

  return (
    <div>
      <h1>COUNTER</h1>
      <button onClick={increVal}>Increase</button>
      <h2>{data}</h2>
      <button onClick={decreVal}>Decrease</button>
    </div>
  )
}

export default App
