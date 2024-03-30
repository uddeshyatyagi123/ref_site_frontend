import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

const StudentUseAuth = () => {
  const [isAuthenticatedStudent, setIsAuthenticatedStudent] = useState(true);
  const [loadingStudent, setLoadingStudent] = useState(false);

  // useEffect(() => {
  //   const token = Cookies.get('jwt');
  //   if (token) {
  //     setIsAuthenticated(true);
  //     console.log(token)
  //   }
  // }, []);
  // useEffect(()=>{
  //   const cookiedata = Cookies.get('status')
  //   cookiedata?setIsAuthenticatedStudent(true) :setIsAuthenticatedStudent(false)
  // })
  

  return { isAuthenticatedStudent, setIsAuthenticatedStudent, loadingStudent, setLoadingStudent };
};

export default StudentUseAuth;