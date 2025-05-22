import TaskCard from "./TaskCard"

import { GrInProgress } from "react-icons/gr";
import { IoCheckmarkSharp } from "react-icons/io5";

const TasksList = ({tasks,deleteTask,makeCompleted,editTask}) => {
  return (
    <div className='col-12 mx-auto bg-dark mt-5 mb-3 py-4 ms-1 rounded-3 d-flex flex-column align-items-center gap-4'>
    
        <h3 className="text-light">In Progress <GrInProgress className="h4"/> </h3>
        {tasks.map((task)=>
          !task.completed && <TaskCard key={task.id} task={task} deleteTask={deleteTask} makeCompleted={makeCompleted} editTask={editTask}/>
        )}
        <h3 className="text-light">Completed  <IoCheckmarkSharp className="h4"/></h3>
        {tasks.map((task)=>
          task.completed && <TaskCard key={task.id} task={task} deleteTask={deleteTask} makeCompleted={makeCompleted} editTask={editTask}/>
        )}
    </div>
  )
}

export default TasksList
