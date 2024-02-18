import { Navigate, Outlet, useNavigate, useOutlet } from 'react-router-dom'
import StudentUseAuth from './StudentUseAuth';
const StudentPrivateRoute = () => {
  const { isAuthenticatedStudent } = StudentUseAuth();

  
  return (
    
    isAuthenticatedStudent ? <Outlet/> : <Navigate to = '/refree/refreelogin'/>
    
      )
    }
    


export default StudentPrivateRoute;