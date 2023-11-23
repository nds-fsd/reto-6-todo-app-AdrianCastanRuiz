import { useState } from "react";


const EliminarTarea =  ({setArray, tareaToDelete}) => {

    const handleClick = async  (e) => {

        const id = e.target.value
        const res = await fetch(`http://localhost:3000/todo/${id}`,{"method":"DELETE"})
        const json = await res.json()

        setArray(json)

 
    }








            return(
                <button className="delete-button" onClick={(e)=> handleClick(e)}  value={tareaToDelete.id} >Delete Task</button>
            )
       
    
    


};


export default EliminarTarea;