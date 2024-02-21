import { Navigate, Outlet, useNavigate, useOutlet } from 'react-router-dom'
import useAuth from './useAuth';
const PrivateRoutes = () => {
  const { isAuthenticated } = useAuth();

  
  return (
    
        isAuthenticated ? <Outlet/> : <Navigate to = '/refree/refreelogin'/>
    
      )
    }
    


export default PrivateRoutes;


