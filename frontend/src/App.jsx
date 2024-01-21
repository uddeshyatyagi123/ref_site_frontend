import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import RefreeSignUp from './Refree/RefreeSignUp'
import { createBrowserRouter , RouterProvider  } from 'react-router-dom'
import RefreeLogIn from './Refree/RefreeLogIn'
import Dashboard from './Refree/Dashboard'


const router = createBrowserRouter([
  {
    path : '/',
    element : '',
    children:
    [{
      path : 'signup' ,
      element : <RefreeSignUp/>
    },
    {
      path : 'login',
      element : <RefreeLogIn/>,
    },
    {
      path : 'dashboard',
      element : <Dashboard/>,
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
