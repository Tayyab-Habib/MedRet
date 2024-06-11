import React from 'react'
import { Container} from "react-bootstrap"
import { Outlet } from 'react-router-dom'
// import { ToastContainer} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  return (
    <>
        <Outlet/>
    </>
    
  )
}

export default App