import { useState } from 'react';
import './tut4.css';
import dumbell from './Assets/dumbells.jpeg';
import barbell from './Assets/barbells.jpeg';
import pully from './Assets/pully machine.jpeg';

const Cards_info=[
{
 image:dumbell,
 title:'Dumbells',
 description:'You can start working with high Quality dumbells!',
Price:'5$ per kg'
},
{
image:barbell,
 title:'barbell',
 description:'its time to shake those muscles with barbell!',
 Price:'5$ per kg'
}
,
{
    image:pully,
     title:'Pully',
     description:'lets pull up all the burden and make yourself whole again!',
     Price:'100$ per kg'
}



]

function Cards(props){
    return(
       <li>
           
          <img id='backGd' src={props.image}  alt={props.title}/>
          <h1 id='title'>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.Price}</p>
            <button className='button'>Readmore</button>
        </li>
    )
}

export default function Tut4(){


return(
   <div>
   <main>
    <section id='core-concepts'>
    <ul>
        {Cards_info.map((cards)=>(
 <Cards {...cards}/>
        ))}
     
   
    
    </ul>
    </section>
    </main>
    
     
   </div>

)
}