import React from 'react'
import {  RouterProvider, } from 'react-router-dom'
import router from './router'
import useAuth from './PrivateRoute/useAuth'
import Dashboard from './Refree/Dashboard';

function App() {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useAuth();


  return (
    <>
<RouterProvider router = {router}/>
    </>
  )
}

export default App
