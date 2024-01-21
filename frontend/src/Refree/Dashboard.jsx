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
      <div className='flex h-screen'>
        <div className='relative flex flex-col bg-clip-border   text-gray-700 h-[calc(100vh)] w-full max-w-[20rem]  bg-slate-600 space-y-4 px-7 py-4'>
          <div
            className={`bg-blue-500 cursor-pointer text-white p-3 rounded ${selectedComponent === 'ListOfApp' ? 'selected' : ''}`}
            onClick={() => setSelectedComponent('ListOfApp')}
          >
            List Of Applicants
          </div>
          <div
            className={`bg-blue-500 cursor-pointer text-white p-3 rounded ${selectedComponent === 'UploadProof' ? 'selected' : ''}`}
            onClick={() => setSelectedComponent('UploadProof')}
          >
            Upload Proof
          </div>
          <div
            className={`bg-blue-500 cursor-pointer text-white p-3 rounded ${selectedComponent === 'Profile' ? 'selected' : ''}`}
            onClick={() => setSelectedComponent('Profile')}
          >
            Profile
          </div>
        </div>
        <div className='right-panel  overflow-scroll '>
          {/* Render the selected component */}
          {renderComponent()}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
