import { useState } from 'react';

import Header from "../components/header/Header"
import TasksList from "../components/tasks/TasksList"

const Home = () => {

    const [tasks,setTasks] = useState([
    {id:"first",task:"Finish this week's interview questions",date:"2025-05-24T20:35",completed:false,completedAt:''},
    {id:"second",task:"Finish some trainings from work",date:"2025-05-25T20:36",completed:false,completedAt:''}
  ])

    const addTask=(newTask)=>{
      setTasks([newTask,...tasks])
    }

    const editTask = (id,editedTask,editedDate) =>{
        setTasks(tasks.map(task=>task.id===id?{...task,task:editedTask,date:editedDate}:task))
    }

    const makeCompleted = (id) => {
        setTasks(tasks.map(task=>task.id===id ? {...task,completed:!task.completed,completedAt:new Date().toString()}:task))
    }

    const deleteTask = (id) =>{
        setTasks(tasks.filter((task)=>task.id!==id))
    }


  return (
    <div className='container mt-5' >
        <Header addTask={addTask}/>
        
        {tasks.length!==0 
        ? 
        (<TasksList tasks={tasks} deleteTask={deleteTask} makeCompleted={makeCompleted} editTask={editTask}/>)
        :
        (<h4 className='text-center mt-5 w-50 rounded-4 mx-auto p-4 text-danger bg-warning'>No Tasks To Show</h4>) }
    </div>
  )
}

export default Home
