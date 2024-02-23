import React, { useState } from 'react';
import Profile from './Profile';
import ListOfApp from './ListOfApp';
import UploadProof from './UploadProof';
import axios from 'axios';
import Cookies from 'js-cookie';

function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState('ListOfApp');
  var username = localStorage.getItem('username');

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
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'ListOfApp':
        return <ListOfApp />;
      case 'UploadProof':
        return <UploadProof />;
      case 'Profile':
        return <Profile />;
      default:
        return null;
    }
  };

  return (
    <>
      <div style={{backgroundColor: '#7FC7D9'}} className='flex h-screen '>
        <div  style={{backgroundColor: '#365486'}} className=' relative flex flex-col bg-clip-border   text-gray-700 h-screen w-full max-w-[20rem]  space-y-4 px-7 py-4'>
        {username}

          <div 

            style={{backgroundColor:'#F0ECE5'}}
            className={`bg-blue-500 cursor-pointer text-black p-3 rounded ${selectedComponent === 'ListOfApp' ? 'selected' : ''}`}
            onClick={() => setSelectedComponent('ListOfApp')}
          >
            List Of Applicants
          </div>

          <div
          style={{backgroundColor:'#F0ECE5'}}
            className={`bg-blue-500 cursor-pointer text-black p-3 rounded ${selectedComponent === 'UploadProof' ? 'selected' : ''}`}
            onClick={() => setSelectedComponent('UploadProof')}
          >
            Upload Proof
          </div>
          <div
          style={{backgroundColor:'#F0ECE5'}}
            className={`bg-blue-500 cursor-pointer text-black p-3 rounded ${selectedComponent === 'Profile' ? 'selected' : ''}`}
            onClick={() => setSelectedComponent('Profile')}
          >
            Profile
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
  );
}

export default Dashboard;
