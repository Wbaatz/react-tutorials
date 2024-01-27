import React from 'react'
import { useNavigate } from 'react-router-dom'
//-->should just change the urland set it to the url we're trying to navigate to and it should
//prevent the default of sending a request and instead let the react router know about the new URL
const Home = () => {


  const navigate=useNavigate();

  function navigateHandler(){
    navigate('/About');
  }

  return (
    <div>
        
        <h1>Home Page</h1>
      <p1>Are you ready for some amazing packages ? </p1>
        <button onClick={navigateHandler}>Shop Now!</button>
    
    
    </div>
  )
}

export default Home