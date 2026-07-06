import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Body() {

    const [data,setdata]=useState({email:"",password:""})

    let defaultdata={
        email:"react@gmail.com",
        password:12345
    }

    let navig=useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        let {password,email}=data

        if(data.password==defaultdata.password && data.email==defaultdata.email){
            return navig("/Resume")
        }
        else{
            return(
                console.log("wrong credentials")
            
            )
        }
        
    }

    return(

        <div className='bg-violet-200 w-screen h-screen flex flex-col justify-center items-center'>
        <section className="text-5xl text-center " >
            <h1>Body</h1>
            
            
        </section>

        
        <form>
            <input className="bg-white text-black  " type="email" placeholder="email..." value={data.email} onChange={(e)=>setdata((preValue)=>({...preValue,email:e.target.value}))}/>
            <br/>
            <br/>
            
            <input className="bg-white text-black " type="password" placeholder="pass..." value={data.password} onChange={(e)=>setdata((preValue)=>({...preValue,password:e.target.value}))}/>
        <button onClick={handleSubmit}>Submit</button>
        </form>
        </div>
    )
}
export default Body;