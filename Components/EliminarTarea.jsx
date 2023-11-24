import { useState } from "react";


const EliminarTarea =  ({setArray, tareaToDelete, tareas}) => {

    const handleClick =  async (e) => {
        

        const id = e.target.value

        const res = await fetch(`http://localhost:3000/todo/${id}`,{"method":"DELETE"})
        const json = await res.json()

       const index = tareas.findIndex(element => element.id == id)

      const tareasUpdated = tareas.filter(element => element.id != id )

       setArray(tareasUpdated)

     






       

 
    }








            return(
                <button className="delete-button" onClick={(e)=> handleClick(e)}  value={tareaToDelete.id} >Delete Task</button>
            )
       
    
    


};


export default EliminarTarea;