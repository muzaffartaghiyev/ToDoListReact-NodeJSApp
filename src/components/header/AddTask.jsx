import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const AddTask = ({addTask}) => {

  const [task,setTask] = useState('')
  const [date,setDate] = useState('')

  const handleSubmit = (e) =>{    
    e.preventDefault()
    if(task.trim()===""){
      toast.error("Please fill out the Task Field!");
      return
    }

    addTask({
      id:uuidv4(),
      task:task,
      date:date,
      completed:false,
      completedAt:''
    })
    toast.success("Task Added Successfully")
    setTask('')
    setDate('')
  }

  return (
    <form className='bg-primary-subtle my-3 text-start p-3 rounded-3' onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="exampleInputText1" className="form-label h5">Task</label>
              <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp"
              onChange={(e)=>setTask(e.target.value)}
              value={task} required placeholder='Enter Your Task'
              />
              
            </div>
            <div className="mb-3">
              <label for="exampledatetime1" className="form-label h5">Date & Time</label>
              <input type="datetime-local" className="form-control" id="exampledatetime1"
              onChange={(e)=>setDate(e.target.value)}
              value={date} 
              required
              />
            </div>
            <div className='text-center'>
                <button type="submit" className="btn  btn-primary px-5">Save Task</button>
            </div>
            
    </form>
  )
}

export default AddTask
