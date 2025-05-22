import { TiDeleteOutline } from "react-icons/ti";
import { MdEdit } from "react-icons/md";

import { toast } from 'react-toastify';

const TaskCard = ({task,deleteTask,makeCompleted,editTask}) => {

  const handleEditTask= () =>{
      editTask(task.id,)
  }

  const handleDeleteTask = ()=>{
    deleteTask(task.id)
    toast.error(`${task.task} has been deleted`)
  }

  const handleClick = ()=>{
    makeCompleted(task.id)
    !task.completed?toast.success(`'${task.task}' Has been Marked as Completed`):toast.info(`'${task.task}' Moved to Progress from Completed`)
  }

  return (
    <div className='bg-light rounded-3 p-2 w-100 d-flex justify-content-between' style={{borderLeft:task.completed && '15px solid purple', textDecoration: task.completed && "line-through"}}>
        <div className="w-100"  onClick={handleClick}> 
            <h4>{task.task}</h4>
            <h6><span>{task.date.split("T")[0]}</span> <span className='ms-3'>{task.date.split("T")[1]}</span> </h6>
        </div>
        <div className='d-flex align-items-center justify-content-center' style={{cursor:'pointer'}}>
          <MdEdit className='h3 text-secondary pe-auto' />
          <TiDeleteOutline className='h2 text-danger' onClick={handleDeleteTask}/>
        </div>
    </div>
  )
}

export default TaskCard



