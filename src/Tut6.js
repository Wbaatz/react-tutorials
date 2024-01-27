import { useState } from "react"
import "./tut6.css"
export default function Tut6(){
//can also store jsx code as variables as well.
    const [Flag,SetFlag]=useState(true);

    function save(){
      if(Flag==false){
        SetFlag(true)
      }
      else if(Flag==true){
        SetFlag(false)
      }
      };
  let User_label=<b>Usernamae: </b>
  let Pass_Label=<b>Password: </b>


  let Form_page=<div > <label for="user">{User_label}</label>
  <input type="text" name="user"></input> <br></br>
  <label for="pass">{Pass_Label}</label>
  <input name="pass" type="password"></input>
  <br></br></div>
   return(
   <div style={{paddingLeft:"100px"}}>

    { !Flag ?  <h2>Log In</h2>:<h2>Sign Up</h2>}
    <br></br>
    <form  >
       {Form_page}
    {Flag && <div> <label><b>Confirm Password :</b></label>
    <input type="password"></input></div>}
   
    </form >
    <button id="btn"
      onClick={save}
    >Submit</button>
   </div>

    )
}