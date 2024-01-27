import { useState } from "react"
import "./tut1style.css"
import logo from "./Assets/logo192.png"
const constant=[
  [
  "basic package",
  "no cardio machines",
  "5000RS only"
],
["Avg package",
"Cardio Machines Available",
"7000 Rs ONLY"],

["Premium Package ",
"Cardio Machines Available And Trainer too",
"10000 Rs ONLY"]

];



export default function App(){
  const [active,SetActive]=useState(0);
  
// onClick={clickHandler}
// function clickHandler(){ }..you can do in this way as well
return(
      <div>
      <header>
        <img src={logo} alt="the logo"/>
        <div>
        <h1>MyGym</h1>
        <p>The place where you can get fit and healthy</p>
        
        </div>
      </header>

      <div id="tabs">
       <menu>
        <button 
         className={active === 0 ? "active":""} 
         onClick={()=>SetActive(0)}
         >
          Basic Package

        </button>

        <button 
         className={active === 1 ? "active":""} 
         onClick={()=>SetActive(1)}
         >
          Avg Package

        </button>

        <button 
         className={active === 2 ? "active":""} 
         onClick={()=>SetActive(2)}
         >
          Premium Package

        </button>
       </menu>
        
        <div id="tab-content">
          <ul>
            {constant[active].map((texts)=>(
              <li key={texts}>{texts}</li>
            ))}
          </ul>
        </div>



      </div>
      </div>


    )
}