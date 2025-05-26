import React, { useState } from 'react'

import { toast } from 'react-toastify';

const EditModal = ({task,modalId,editTask}) => {

    const [editedTask, setEditedTask] = useState(task.task)
    const [editedDate, setEditedDate] = useState(task.date)

    const handleEditTask= (e) =>{  
      e.preventDefault()

      if(editedTask.trim()===""){
        toast.error("Please fill out the Task Field!")
        return
      }

      editTask(task.id,editedTask,editedDate)
      
      toast.warning(`Task Edited`)
      setEditedTask('')
      setEditedDate('')
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
                <h5 className="modal-title" id={`${modalId}Label`}>Add Task</h5>
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
                    <label htmlFor="taskName" className="form-label">Task Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="taskName"
                        placeholder="Enter Your Task"
                        required
                        value={editedTask}
                        onChange={(e)=>setEditedTask(e.target.value)}
                         />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="taskDateTime" className="form-label">Date & Time</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="taskDateTime"
                        required
                        value={editedDate}
                        onChange={(e)=>setEditedDate(e.target.value)}
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
                        data-bs-dismiss="modal">
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
