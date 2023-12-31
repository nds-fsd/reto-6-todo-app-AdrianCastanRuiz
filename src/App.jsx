
import './App.css'
import { useState, useEffect } from 'react';
import AgregarTarea from '../Components/AgregarTareas';
import EliminarTarea from '../Components/EliminarTarea';
import TaskComplete from '../Components/TaskComplete';


function App() {
  


  const [tareas, setTareas] = useState(null)  
  const [done, setDone] = useState(false);

  useEffect(()=>{

  const getTareas = async ()=> {

    try{
         const res = await fetch("http://localhost:3000/todo");

        if (res.ok) {
           const json = await res.json();
           setTareas(json)

        }
         
      

      }

      catch(err) {

        console.log(err)
      }
     }

     getTareas();
    }, [])
    
    console.log(tareas)
   

  return (
    <>
    <h1>TASK LIST</h1>
   
    <div className='main-container'>



    
     {tareas&&tareas.map((tarea)=>{
      
      return <div className='task' key={"div: " + tarea.id}> <p key={tarea.id}>{tarea.text}</p> 

      
       <TaskComplete  setArray={setTareas} tareaToPatch={tarea} tareas={tareas} setDone={setDone}/>  
      
       
      
      <EliminarTarea key={"delete " + tarea.id}  setArray={setTareas} tareas={tareas} tareaToDelete={tarea}/>

     
      </div>
     })}




     
     <AgregarTarea  setArray={setTareas} />

    </div>
    </>
  ) 
}

export default App


