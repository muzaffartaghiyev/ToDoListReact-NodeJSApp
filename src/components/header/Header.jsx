import { useState } from 'react'


import Button from "./Button"
import AddTask from './AddTask';

const Header = ({addTask}) => {
  const [show, setShow] = useState(false)
  
  return (
    <div className='container mt-5 text-center w-50'>
          <h1 className='mb-3 display-3'>To Do List</h1>
          <Button show={show} setShow={setShow} />
          {show && <AddTask addTask={addTask}/>}
    </div>     
  )
}

export default Header


