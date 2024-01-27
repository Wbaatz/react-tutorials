import { useState } from "react"
import "./tut1style.css"
import ButtonTab from "./Tuf5_BtnTab"


//By default, React components execute only once.
//you have to "tell" React if a componenet should be Executed Again.
//React compares the old value ("old jsx code") of your component function to the new output("new jsc code")
//and applies any differences to the actual website UI.
//need a way of telling react that this component function should be executed again.
//use states (so called React hooks) "use-" keywords attached
//Manages data and Tell React to re-execute a component function via React's useState() Hook
const Packages=[
    {
     Name:'basic package',
     Package_type:'Just Gym',
     Price:'5000 Rs'

    },
    {
        Name:'Moderate package',
        Package_type:'Just Gym + Cardio',
        Price:'7000 Rs'

    },
    {
        Name:'Premium package',
        Package_type:'Just Gym + Cardio+Trainer',
        Price:'10000 Rs'

    }
]
  
// function ButtonTab(props){
//     return(
   
//          <button 
//         className={props.active === props.index ? "active":""} 
//         onClick={()=>props.SetActive(props.index)}
//         >
//          {props.Name}

//        </button>
//     );
// }



export default function Tut5(){
  const [active,SetActive]=useState(0);
  

function clickHandler(Number){
    console.log("hello world")
    console.log(Number)
    SetActive(Number)

}


 




return(
      <div>
      <header>
        <img src="logo192.png" alt="the logo"/>
        <div>
        <h1>Fitboy</h1>
        <p>The place where you can get fit and healthy</p>
        
        </div>
      </header>

      <div id="tabs">
       <menu>
      
      <ButtonTab active={active}  SetActive={SetActive} Name={Packages[0].Name} index={0}/>
      <ButtonTab  active={active}  SetActive={SetActive} Name={Packages[1].Name} index={1}/>
      <ButtonTab active={active}  SetActive={SetActive}  Name={Packages[2].Name} index={2}/>
       </menu>
        
        <div id="tab-content">
           
          <ul>
          
          <li key={active}> <p>Type: {Packages[active].Package_type}</p></li>
          <li key={active+1}> <p>Price: {Packages[active].Price}</p></li>
           
            
          </ul>
        </div>



      </div>
      </div>


    )
}