
import './App.css'
import { useState, useEffect } from 'react';
import AgregarTarea from '../Components/AgregarTareas';
import EliminarTarea from '../Components/EliminarTarea';
import TaskComplete from '../Components/TaskComplete';


function App() {
  


  const [tareas, setTareas] = useState(null)  

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
    
   

  return (
    <>
    <h1>LISTA DE TAREAS</h1>
   
    <div className='main-container'>



    
     {tareas&&tareas.map((tarea)=>{
      
      return <div key={"div: " + tarea.id}> <p key={tarea.id}>{tarea.text}</p> 
      
       
      
      <EliminarTarea key={"delete " + tarea.id} setArray={setTareas} tareaToDelete={tarea}/>

      <TaskComplete  setArray={setTareas} tareaToPatch={tarea} />
     
      </div>
     })}




     
     <AgregarTarea  setArray={setTareas} />

    </div>
    </>
  ) 
}

export default App


