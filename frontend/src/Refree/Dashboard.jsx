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
      <div className='flex'>
        <div className='flex-col h-screen  bg-slate-600 space-y-4 px-7 py-4'>
          <div
            className={`bg-blue-500 text-white p-3 rounded ${selectedComponent === 'ListOfApp' ? 'selected' : ''}`}
            onClick={() => setSelectedComponent('ListOfApp')}
          >
            List Of Applicants
          </div>
          <div
            className={`bg-blue-500 text-white p-3 rounded ${selectedComponent === 'UploadProof' ? 'selected' : ''}`}
            onClick={() => setSelectedComponent('UploadProof')}
          >
            Upload Proof
          </div>
          <div
            className={`bg-blue-500 text-white p-3 rounded ${selectedComponent === 'Profile' ? 'selected' : ''}`}
            onClick={() => setSelectedComponent('Profile')}
          >
            Profile
          </div>
        </div>
        <div >
          {/* Render the selected component */}
          {renderComponent()}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
