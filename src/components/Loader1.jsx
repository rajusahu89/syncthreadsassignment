import React from 'react'
import { useState } from 'react'
import "./map.css"
import { Link} from 'react-router-dom';


const Loader1 = () => {
  const[city,setcity]=useState("")
  const handle=((e)=>{
    setcity(e.target.value)
    
  })
  return (
    
    <>
 <div style={{display:"flex",}}>
 <input className='city' type="text" placeholder='Enter city name' onChange={handle} />
    <Link style={{textDecorationLine:"none",}} to="/Login" ><h3 className='logout'>Sign out</h3></Link>
 </div>
     
    <div className='mapdiv'>

      <iframe
        title="gmap"
        name="gMap"
        className="map"
        src={`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        ></iframe>
        </div>
  </>
    
 
  )
}

export default Loader1