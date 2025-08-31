import { toast } from 'react-toastify';

const Button = ({show,setShow}) => {

  const handleClick = ()=>{
      setShow(!show)
      show?toast.error("Add Task Bar Closed"):toast.info("Add Task Bar Opened")
  }

  return (
    <button className={`btn btn-lg ${show?'btn-danger':'btn-primary'} my-5`} onClick={handleClick}>
              {show?'Close - Add Task Bar':'Show - Add Task Bar'}
    </button>
  )
}

export default Button
