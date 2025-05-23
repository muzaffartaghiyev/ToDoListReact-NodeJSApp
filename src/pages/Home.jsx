import { useState } from 'react';

import Header from "../components/header/Header"
import TasksList from "../components/tasks/TasksList"

const Home = () => {

    const [tasks,setTasks] = useState([
    {id:"fsfsds",task:"fsdfd",date:"2025-05-04T20:35",completed:false},
    {id:"fsfssdsds",task:"fsrewrwerdfd",date:"2025-05-04T20:35",completed:true}
  ])

    const addTask=(newTask)=>{
      setTasks([newTask,...tasks])
    }

    const editTask = (id,newDetails) =>{
        setTasks(tasks.map(task=>task.id===id?{...task,newDetails}:task))
    }

    const makeCompleted = (id) => {
        setTasks(tasks.map(task=>task.id===id ? {...task,completed:!task.completed}:task))
    }

    const deleteTask = (id) =>{
        setTasks(tasks.filter((task)=>task.id!==id))
    }


  return (
    <div className='container bg-warning rounded-2 py-2 my-5 d-flex justify-content-around' >
      
      <div className='row w-100' >
          <Header addTask={addTask}/>
        
          {tasks.length!==0 
          ? 
          (<TasksList tasks={tasks} deleteTask={deleteTask} makeCompleted={makeCompleted} editTask={editTask}/>)
          :
          (<h4 className='col-12 text-center my-auto p-5 text-danger'>No Tasks To Show</h4>) }
      </div>
      
    </div>
  )
}

export default Home
