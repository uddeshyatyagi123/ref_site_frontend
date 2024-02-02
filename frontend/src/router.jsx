import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RefreeSignUp from './Refree/RefreeSignUp'
import RefreeLogIn from './Refree/RefreeLogIn'
import Dashboard from './Refree/Dashboard'
import StudentSignup from './Student/StudentSignup'
import StudentLogin from './Student/StudentLogin'
import StudentDashboard from './Student/StudentDashboard'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path = '/' element = ''>
        <Route path = 'refree' element =  ''>
            <Route path = 'refreesignup' element = {<RefreeSignUp/>}/>
            <Route path = 'refreelogin' element = {<RefreeLogIn/>}/>
            <Route path = "refreedashboard" element = {<Dashboard/>}/>
        </Route>
        <Route path = 'student' element = ''>
            <Route path = 'studentsignup' element = {<StudentSignup/>}/>
            <Route path = 'refreelogin' element = {<StudentLogin/>}/>
            <Route path = "refreedashboard" element = {<StudentDashboard/>}/>
        </Route>
        </Route>
    )
  )

    

export default router

