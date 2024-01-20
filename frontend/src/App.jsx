import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import RefreeSignUp from './Components/RefreeSignUp'
import { createBrowserRouter , RouterProvider  } from 'react-router-dom'
import RefreeLogIn from './Components/RefreeLogIn'


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
    }]
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
