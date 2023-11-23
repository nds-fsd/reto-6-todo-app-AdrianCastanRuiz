import { useState } from "react"

const TaskComplete = ({setArray, tareaToPatch}) =>{

    const handleClick = async (e) => {

        const id = e.target.value
        
        const res = await fetch(`http://localhost:3000/todo/${id}`,
        {
            "method": "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( { done: !tareaToPatch.done } )
        }
      )
       
      const json = await res.json()
      setArray(json)
     }
    return(
        <input className="complete-button" onClick={(e)=> handleClick(e)} value={tareaToPatch.id}  type="checkbox"  />
    )
}


export default TaskComplete;