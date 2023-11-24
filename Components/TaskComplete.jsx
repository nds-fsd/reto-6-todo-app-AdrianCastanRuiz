import { useState } from "react"

const TaskComplete = ({setArray, tareaToPatch, tareas, setDone}) =>{

    const handleClick = async (e) => {

        const id = e.target.value
        const index = tareas.findIndex(element => element.id == id)
        
        const res = await fetch(`http://localhost:3000/todo/${id}`,
        {
            "method": "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( { done: !tareaToPatch.done } )
        } 
      )
       
      const json = await res.json()
      
      
      
      

      Object.assign(tareas[index], json)
      setArray(tareas)
     
      json.done ? e.target.className =  "complete-button-true" : e.target.className = "complete-button-false";
  
    
       
      

      


     }
    return(
        <button className={tareaToPatch.done ? "complete-button-true":"complete-button-false"} onClick={(e)=> handleClick(e)} value={tareaToPatch.id}    /> 
    )
}


export default TaskComplete;