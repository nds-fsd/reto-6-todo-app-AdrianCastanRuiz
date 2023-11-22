
import './App.css'
import { useState, useEffect } from 'react';
import AgregarTarea from '../Components/AgregarTareas';







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
      return <div> <p key={tarea.id}>{tarea.text}</p> <input type="checkbox" />
      </div>
     })}
     
     <AgregarTarea/>

    </div>
    </>
  ) 
}

export default App


