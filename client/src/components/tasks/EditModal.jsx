import React, { useEffect, useState } from 'react'

import axios from "axios"

import { toast } from 'react-toastify';

const EditModal = ({task,modalId,getTasks}) => {

    const [editData, setEditTask] = useState(task)
      
    const [title, setTitle] = useState(editData.title)
    const [description, setDescription] = useState(editData.description)

    useEffect(() => {

        if(task){
            setEditTask(task)
            setTitle(task.title)
            setDescription(task.description)
        }
    }, [task])


    const putTask = async (updatedTask) => {
    try {

      await axios.put(`${import.meta.env.VITE_APP_URL}${task._id}/`, updatedTask);
      getTasks();

    } catch (error) {
      console.log(error.message);
    }
    }

    const handleEditTask= (e) =>{  
      e.preventDefault()

      if(title.trim()===""){
        toast.error("Please fill out the Task Field!")
        return
      }

      if(description.trim()===""){
        toast.error("Please fill out the Description Field!")
        return
      }

      const updatedTask = {title, description}

      putTask(updatedTask)
      
      toast.warning(`Task Edited`)
    //   setTitle('')
    //   setDescription('')

    // Close modal manually
    const modalEl = document.getElementById(modalId);
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    modal.hide();
    }

  return (
    <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby={`${modalId}Label`}
        aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content ">
                <div className="modal-header">
                <h5 className="modal-title" id={`${modalId}Label`}>Edit Task</h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
                </div>
                <div className="modal-body">
                <form id="taskForm" onSubmit={handleEditTask}>
                    <div className="mb-3">
                    <label htmlFor="taskName" className="form-label">Task</label>
                    <input
                        type="text"
                        className="form-control"
                        id="taskName"
                        placeholder="Enter Your Task"
                        // required
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                         />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="taskDescription" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="taskDescription"
                        placeholder="Enter Task Description"
                        // required
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                         />
                    </div>
                    <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal">
                        Close
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        // data-bs-dismiss="modal"
                        >
                        Edit
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditModal
