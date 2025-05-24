import { TiDeleteOutline } from "react-icons/ti";
import { MdEdit } from "react-icons/md";

import { toast } from 'react-toastify';

import EditModal from "./EditModal"


const TaskCard = ({task,deleteTask,makeCompleted,editTask}) => {

  const currentTime =  task.completedAt.split(" ")
  const now = {
      month:currentTime[1],
      day:currentTime[2],
      year:currentTime[3],
      hour:currentTime[4],
  }


  const handleDeleteTask = ()=>{
    deleteTask(task.id)
    toast.error(`"${task.task}" has been deleted`)
  }

  const handleClick = ()=>{
    makeCompleted(task.id)
    !task.completed?
    toast.success(`"${task.task}" Has been Marked as Completed`):
    toast.info(`"${task.task}" Moved to Progress from Completed`)
  }
  return (
      <div className='bg-light rounded-3 p-2 w-100 d-flex justify-content-between' style={{borderLeft:task.completed && '15px solid purple'}}>
          <div className="row w-100"  onClick={handleClick}> 
              <div className="col" style={{textDecoration: task.completed && "line-through"}}>
                  <h4>{task.task}</h4>
                  <h6><span>{task.date.split("T")[0]}</span> <span className='ms-3'>{task.date.split("T")[1]}</span> </h6>
              </div>

              <div className="col d-flex align-items-center">
                  {task.completed && (<h5 className="text-primary">Completed at <span className="text-danger">{now.hour.split(":")[0]}:{now.hour.split(":")[1]}</span> in <span className="text-danger">{now.day}-{now.month}-{now.year}</span>  </h5>)}
              </div>     
          </div>
          <div className='d-flex align-items-center justify-content-center' style={{cursor:'pointer'}}>
            <MdEdit className='h3 text-secondary pe-auto me-2' data-bs-toggle="modal"
          data-bs-target={`#taskModal-${task.id}`}/>
            <TiDeleteOutline className='h2 text-danger' onClick={handleDeleteTask}/>
          </div>
          <EditModal task={task} modalId={`taskModal-${task.id}`} editTask={editTask} />
      </div>

  )
}

export default TaskCard



