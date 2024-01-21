import React, { useState } from 'react';
import Profile from './Profile';
import ListOfApp from './ListOfApp';
import UploadProof from './UploadProof';

function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState('ListOfApp');

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
