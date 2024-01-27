
export default function ButtonTab(props){
    return(
   
         <button 
        className={props.active === props.index ? "active":""} 
        onClick={()=>props.SetActive(props.index)}
        >
         {props.Name}

       </button>
    );
}