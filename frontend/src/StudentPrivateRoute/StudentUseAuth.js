import { useState, useEffect } from 'react';

const StudentUseAuth = () => {
  const [isAuthenticatedStudent, setIsAuthenticatedStudent] = useState(false);
  const [loadingStudent, setLoadingStudent] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     setIsAuthenticated(true);
  //   }
  // }, []);

  return { isAuthenticatedStudent, setIsAuthenticatedStudent, loadingStudent, setLoadingStudent };
};

export default StudentUseAuth;