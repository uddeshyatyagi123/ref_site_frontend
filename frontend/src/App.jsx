import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import RefreeSignUp from './Refree/RefreeSignUp'
import { createBrowserRouter , RouterProvider  } from 'react-router-dom'
import RefreeLogIn from './Refree/RefreeLogIn'
import Dashboard from './Refree/Dashboard'
import StudentSignup from './Student/StudentSignup'


const router = createBrowserRouter([
  {
    path : '/',
    element : '',
    children:
    [{
      path : 'refreesignup' ,
      element : <RefreeSignUp/>
    },
    {
      path : 'refreelogin',
      element : <RefreeLogIn/>,
    },
    {
      path : 'rafreedashboard',
      element : <Dashboard/>,
    },
    {
      path: 'studentsignup',
      element: <StudentSignup/>
    }
  ]
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <RouterProvider router = {router}/>
    </>
  )
}

export default App
