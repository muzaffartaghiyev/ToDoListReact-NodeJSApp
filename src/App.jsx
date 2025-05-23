import { ToastContainer } from "react-toastify";
import "./App.css"


function App() {
  return (
    <>
      <Home/>
      {/* Toastify container to show pop up messages */}
      <ToastContainer position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"/>
    </>
  )
}

export default App
