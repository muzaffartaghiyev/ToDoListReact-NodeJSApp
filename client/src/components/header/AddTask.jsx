import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

import axios from "axios"

const AddTask = ({getTasks}) => {

  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')


  const postTask = async (newTask) => {
    
    try {
      await axios.post(import.meta.env.VITE_APP_URL, newTask)

    } catch (error) {
      console.log(error)
    }
    getTasks()
  }

  const handleSubmit = (e) =>{    
    e.preventDefault()
    if(title.trim()==="" || description.trim()===""){
      toast.error("Please fill out all Fields!");
      return
    }

    const newTask = {title, description}
    postTask(newTask)

    toast.success("Task Added Successfully")
    setTitle('')
    setDescription('')
  }

  return (
    <form className='bg-primary-subtle my-3 text-start p-3 rounded-3' onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="exampleInputText1" className="form-label h5">Title</label>
              <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp"
              onChange={(e)=>setTitle(e.target.value)}
              value={title} placeholder='Enter Your Task'
              />
              
            </div>
            <div className="mb-3">
              <label for="exampleInputText1" className="form-label h5">Description</label>
              <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp"
              onChange={(e)=>setDescription(e.target.value)}
              value={description} placeholder='Enter Your Task'
              />
              
            </div>
            <div className='text-center'>
                <button type="submit" className="btn btn-primary px-5">Save Task</button>
            </div>
            
    </form>
  )
}

export default AddTask
