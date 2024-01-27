import { useState } from 'react';
import './tut3.css';

export default function Tut3(){
    let Arr=[];
    const [clickEvent,SetClickEvent]=useState([]);
    const [InputTask,SetInputText]=useState('');
  function save(){
    console.log(InputTask);
     Arr=[...clickEvent,InputTask];
    SetClickEvent(Arr);
    console.log(Arr);
  };
    
  function GetText(e){
    SetInputText(e.target.value);
  }
  
  return(
   <div>
    <h1>Task Scheduler</h1>
    <input type="text" 
            placeholder="enter your task"
            id="mytask"
            onChange={GetText}
    ></input>
    <button
      onClick={save}
    >Submit</button>
    <div id="TaskList">
       
        {clickEvent.map((texts,index)=>(
              <ul key={index}>{texts}</ul>
            ))}
    </div>
   </div>
  )

}