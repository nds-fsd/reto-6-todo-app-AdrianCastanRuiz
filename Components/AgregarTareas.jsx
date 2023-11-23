import { useState } from "react"


const AgregarTarea = ({setArray}) =>{

    const [nuevaTarea, setNuevaTarea] = useState('')
     
    const submit = async (tarea) => {

        try{
            const res = await fetch('http://localhost:3000/todo',
           {
            "method": "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                text: tarea,
                done: false
              })
            
            }
            
            )
            const json = await res.json()

            
            

            setNuevaTarea('');
            setArray(json)
            
            
            
        }
        catch(err){
            console.log(err)
        }
     }

     
  

     
    
    return(
   
   <div>
    <input type="text" value={nuevaTarea} onChange={(e)=> {setNuevaTarea(e.target.value)}}/>
    <button className="add-task-button" onClick={()=> submit(nuevaTarea) } type="submit">Add task</button>
    </div>
    // dont forget to ask how to add a new task by pressing Enter
    
        
    )
    
}

   
export default AgregarTarea;

