import React, { useEffect, useState } from 'react'
import Refrel from './Refrel';
import ProfileUpdate from './ProfileUpdate';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import StudentUseAuth from '../StudentPrivateRoute/StudentUseAuth';

function StudentDashboard() {
  const { isAuthenticatedStudent, setIsAuthenticatedStudent, loadingStudent, setLoadingStudent } = StudentUseAuth();
   const navigate = useNavigate()
  var username = localStorage.getItem('username');

    const [selectedComponent, setSelectedComponent] = useState('refrel');
    useEffect(() => {
      // Read data from a cookie
      const myData = Cookies.get('status');
      console.log('Data from cookie:', myData);
      if(myData){
        setIsAuthenticatedStudent(true)
      }
    }, []);


    const logout = () => {
      axios({
        method : 'GET' , 
        url : `https://referral-site.onrender.com/api/logout`,
        headers:{
          'Content-Type' : 'application/json',
        },
        withCredentials : true
      })
      .then(response => {
        console.log('Data logout:', response.data),
        console.log('Button clicked!');
        Cookies.set('status','false');
        navigate('/student/studentdashboard')
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
    };
   
    useEffect(()=>{
      const cookiedata = Cookies.get('status')
      cookiedata?setIsAuthenticatedStudent(true)&&        navigate('/student/studentlogin')  :setIsAuthenticatedStudent(false)
    })
    const renderComponent = () => {
      switch (selectedComponent) {
        case 'refrel':
          return <Refrel/>;
        case 'profileupdate':
          return <ProfileUpdate/>;
        default:
          return null;
      }
    };

  return (
    <>
      <div style={{backgroundColor: '#7FC7D9'}} className='flex h-screen '>
        <div  style={{backgroundColor: '#365486'}} className=' relative flex flex-col bg-clip-border   text-gray-700 h-screen w-full max-w-[20rem]  space-y-4 px-7 py-4'>
    <div>{username}</div>
          <div 
            style={{backgroundColor:'#F0ECE5'}}
            className={`bg-blue-500 cursor-pointer text-black p-3 rounded ${selectedComponent === 'refrel' ? 'selected' : ''}`}
            onClick={() => setSelectedComponent('refrel')}
          >
            Refrel
          </div>
          <div
          style={{backgroundColor:'#F0ECE5'}}
            className={`bg-blue-500 cursor-pointer text-black p-3 rounded ${selectedComponent === 'profileupdate' ? 'selected' : ''}`}
            onClick={() => setSelectedComponent('profileupdate')}
          >
            Profile Update
          </div>
          <button
          style={{ backgroundColor: '#F0ECE5' }}
          className='bg-blue-500 cursor-pointer text-black p-3 rounded mx-12 mb-4 sm:mb-8 md:mb-16 lg:mb-32 xl:mb-64'
          onClick={logout}
        >
            logout
          </button>
        </div>
        <div className='right-panel  overflow-scroll h-screen w-screen'>
          {/* Render the selected component */}
          
          {renderComponent()}
        </div>
      </div>

    </>
  )
}

export default StudentDashboard
