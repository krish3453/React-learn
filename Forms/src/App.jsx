import React from 'react'
import { useState } from 'react'


function App() {

  // const[email,setEmail]=useState(null)
  // const[pass,setPass]=useState(null)
  const [data, setData] = useState({ email: "", pass: "" })

  function formSubmit(e) {
    e.preventDefault();
    console.log(data)


  }

  // function handleEmail(e) {
  //   setData(prevData => ({ ...prevData, email: e.target.value }));
  // }

  // function handlePass(e) {
  //   setData(prevData => ({ ...prevData, pass: e.target.value }));
  // }

  function handleForm(e) {
    const{name,value}=e.target
    setData(prevData => ({ ...prevData, [name]: value }));
  }

  return (
    <form>
      <input type='text'
        placeholder='email'
        name='email'
        onChange={handleForm}
        value={data.email} />
      <br />
      <br />
      <input type='password'
        placeholder='password'
        name='pass'
        onChange={handleForm}
        value={data.pass} />
      <br />
      <br />
      <button onClick={formSubmit}>Login</button>
    </form>
  )
}

export default App
