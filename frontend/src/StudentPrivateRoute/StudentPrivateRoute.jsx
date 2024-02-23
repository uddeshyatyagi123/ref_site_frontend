import { Navigate, Outlet, useNavigate, useOutlet } from 'react-router-dom'
import StudentUseAuth from './StudentUseAuth';
import StudentDashboard from '../Student/StudentDashboard';
const StudentPrivateRoute = () => {
  const { isAuthenticatedStudent } = StudentUseAuth();

  
  return (
    
    isAuthenticatedStudent ? <Outlet/> : <Navigate to = '/student/studentlogin'/>
    
      )
    }
    


export default StudentPrivateRoute;