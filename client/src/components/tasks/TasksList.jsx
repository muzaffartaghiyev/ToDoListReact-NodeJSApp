import { useState } from "react";
import TaskCard from "./TaskCard"

import { GrInProgress } from "react-icons/gr";
import { IoCheckmarkSharp } from "react-icons/io5";

const TasksList = ({tasks,getTasks}) => {

  return (
    <div className='w-75 mx-auto my-5 bg-dark py-4 px-4 rounded-3 d-flex flex-column align-items-center gap-4'>
    
        <h3 className="text-light">In Progress <GrInProgress className="h4"/> </h3>
        {tasks.map((task)=>
          !task.isDone && <TaskCard key={task._id} task={task} getTasks={getTasks}/>
        )}
        <h3 className="text-light">Completed  <IoCheckmarkSharp className="h4"/></h3>
        {tasks.map((task)=>
          task.isDone && <TaskCard key={task._id} task={task} getTasks={getTasks}/>
        )}
    </div>
  )
}

export default TasksList
