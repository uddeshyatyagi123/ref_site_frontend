import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('username');
  //   if (token) {
  //     setIsAuthenticated(true);
  //   }
  // }, []);

  

  return { isAuthenticated, setIsAuthenticated, loading, setLoading };
};

export default useAuth;