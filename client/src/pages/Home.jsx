import { useEffect, useState } from 'react';
import axios from "axios"


import Header from "../components/header/Header"
import TasksList from "../components/tasks/TasksList"

const Home = () => {

  const[tasks,setTasks] = useState([])

    const getTasks = async () => {
      try {
          const res = await axios(import.meta.env.VITE_APP_URL)
          
          setTasks(res.data.result.reverse())
        } catch (error) {
          console.log(error)
        }
      }

    useEffect(() => {
      getTasks()
    }, [])

  return (
    <div className='container mt-5' >
        <Header getTasks={getTasks}/>
        
        {tasks.length!==0 
        ? 
        (<TasksList tasks={tasks} getTasks={getTasks}/>)
        :
        (<h4 className='text-center mt-5 w-50 rounded-4 mx-auto p-4 text-danger bg-warning'>No Tasks To Show</h4>) }
    </div>
  )
}

export default Home
