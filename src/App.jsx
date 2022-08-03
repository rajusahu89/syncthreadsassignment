import React from 'react'
import { Routes } from 'react-router-dom'
 
import {SignUp} from './components/Signup'
import { Route } from 'react-router-dom'
 
import {Login} from './components/Login'
 import { useState } from 'react'
import "./App.css"
import Loader1 from './components/Loader1'




export const App = () => {
  const [data,setlog] = useState(false);
  const [count,setcount] = useState(false);
  const [load, setLoad] = useState(true)
  if(count === false){
    var arr = [];
    localStorage.setItem("auth",JSON.stringify(arr));
  }
  setTimeout(()=>{
    setLoad(false)
  },800)
  return (
    <>
    <div log={data} setlog={data} />
    
     <Routes>
       <Route path="/" element={<SignUp setcount={count} />} ></Route>
       <Route path="/Login" element={<Login setlog= {data}/>} ></Route>
       <Route path="/Map" element={<Loader1/>} ></Route>
     
     
     </Routes> 
     
    <div/>
   </>
 )
}

export default App