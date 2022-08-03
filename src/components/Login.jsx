import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import {useState} from "react";

export const Login = ({setlog}) => {
  const navigate = useNavigate();
  const [state,setState] = useState(false);
  const [hidden,setHidden] = useState("");
  const [data,setData] = useState({
    email:"",
    password:""
  });

  function handleChange(e){
    setState(false)
    const {name} = e.target;
    setData({
      ...data,
      [name]:e.target.value
    })
  }

  function handleSubmit(){
    if(data.email && data.password){
      let x = JSON.parse(localStorage.getItem("auth"));;
      for(let i=0; i<x.length; i++){
        if(x[i].email === data.email){
          if(x[i].password === data.password){
            setlog(true)
            navigate("/");
          }else{
            setHidden("Your email or password is wrong")
            setState(true)
          }
        }
        else{
          setHidden("Your email or password is wrong")
          setState(true)
        }
      }
      
    }
    else{
      setHidden("please fill all the details")
      setState(true)
    }
  }

  return (
    <div style={{margin:"auto",textAlign:"center"}}>
      <br />
      <h1>Login</h1>
      <TextField name="email" onChange={handleChange} style={{width:"30%",margin:"25px 0"}} id="demo-helper-text-misaligned-no-helper" label="Email" />
      <br />
      <TextField name="password" onChange={handleChange} type="password"  style={{width:"30%"}} id="demo-helper-text-misaligned-no-helper" label="Password" />
      <br />
      {state ? <p style={{color:"red"}}>{hidden}</p> : null}
      <br />
     <Link to="/Map"> <Button onClick={handleSubmit} style={{width:"30%",height:"50px"}} variant="contained">LOGIN</Button></Link>
      <br />
      <Link to="/">Create an Account</Link>
    </div>
  )
}