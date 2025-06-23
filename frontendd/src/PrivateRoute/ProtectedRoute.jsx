import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const ProtectedRoute = ({ children }) => {
  // Check if user is logged in by looking for username and role in session storage
//   const user = sessionStorage.getItem('user') ;
//   const username = sessionStorage.getItem('username');
//   const role = sessionStorage.getItem('role');

const userToken = Cookies.get('status');
console.log(userToken,'usertoken:')

  if (userToken!=='true') {
    // If not logged in, redirect to login page
    return <Navigate to="/" replace />;
  }

  // If logged in, render the protected component

  return children;
};

export default ProtectedRoute;