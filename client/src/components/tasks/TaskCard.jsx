import axios from "axios"

import { TiDeleteOutline } from "react-icons/ti";
import { MdEdit } from "react-icons/md";

import { toast } from 'react-toastify';

import EditModal from "./EditModal"


const TaskCard = ({task,getTasks}) => {


  const toLocal = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-based
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}-${month}-${year} ${hours}:${minutes}`;

};


// Patch and Delete Calls
  const patchTask = async (updatedTask) => {
      try {

        await axios.patch(`${import.meta.env.VITE_APP_URL}${task._id}/`, updatedTask);
        getTasks();

      } catch (error) {
        console.log(error.message);
      }
  }

  const deleteTask = async () =>{
    try{
      await axios.delete(`${import.meta.env.VITE_APP_URL}${task._id}`)
      getTasks()
    }catch(error){
      console.log(error.message)
    }
  }


// Click handles
  const handleDeleteTask = ()=>{
    deleteTask()
    toast.error(`"${task.title}" has been deleted`)
  }

  const handleIsDoneClick = ()=>{
    patchTask({isDone: !task.isDone})
    !task.isDone
      ?toast.success(`"${task.title}" Has been Marked as Completed`)
      :toast.warning(`"${task.title}" Moved to Progress from Completed`)
  }

  return (
      <div className='bg-light rounded-3 p-2 w-100 d-flex justify-content-between' style={{borderLeft:task.isDone && '15px solid purple'}}>
          <div className="row w-100"  onClick={handleIsDoneClick}> 
              <div className="col" style={{textDecoration: task.isDone && "line-through"}}>
                  <h4>{task.title}</h4>
                  <h4 className="">{task.description}</h4>
                  <h6 className="text-success">
                    Created: {toLocal(task.createdAt)}
                  </h6>
              </div>
              {}

              <div className="col d-flex align-items-center">
                  {task.isDone && (<h5 className="text-primary">Completed at <span className="text-danger">{toLocal(task.updatedAt).split(" ")[1]}</span> in <span className="text-danger">{toLocal(task.updatedAt).split(" ")[0]}</span>  </h5>)}
              </div>     
          </div>
          <div className='d-flex align-items-center justify-content-center' style={{cursor:'pointer'}}>
            {!task.isDone && (<MdEdit className='h3 text-secondary pe-auto me-2' data-bs-toggle="modal"
          data-bs-target={`#taskModal-${task._id}`}/>)}
            
            <TiDeleteOutline className='h2 text-danger' onClick={handleDeleteTask}/>
          </div>
          <EditModal task={task} getTasks={getTasks} modalId={`taskModal-${task._id}`}/>
      </div>

  )
}

export default TaskCard



