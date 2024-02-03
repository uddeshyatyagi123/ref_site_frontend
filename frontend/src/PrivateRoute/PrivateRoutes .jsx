import { Navigate, Outlet, useNavigate, useOutlet } from 'react-router-dom'
import useAuth from './useAuth';
const PrivateRoutes = () => {
  const { isAuthenticated } = useAuth();

      const outlet = useOutlet()
      const navigate = useNavigate() 
  
  return (
    
        isAuthenticated ? <Outlet/> : <Navigate to = '/refree/refreelogin'/>
    
      )
    }
    


export default PrivateRoutes;


