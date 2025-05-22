import { useState } from 'react'


import Button from "./Button"
import AddTask from '../tasks/AddTask';

const Header = ({addTask}) => {
  const [show, setShow] = useState(false)
  
  return (
    <div className='col-12 mt-5 text-center'>
          {/* <h1 className='mb-3'>To Do List</h1> */}
          <Button show={show} setShow={setShow} />
          {show && <AddTask addTask={addTask}/>}
    </div>     
  )
}

export default Header


