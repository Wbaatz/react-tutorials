import React from 'react'
import  {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
//this is now acting as a wrapper.
const Root7 = () => {
  return (
    <>
        <Navbar/>
        <main style={{margin:"-1rem auto",textAlign:"center"}}>
        <Outlet/>
        </main>
      
    </>
  );
}

export default Root7