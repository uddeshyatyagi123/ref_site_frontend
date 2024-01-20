import React, { useState } from 'react';
import Profile from './Profile';
import ListOfApp from './ListOfApp';
import UploadProof from './UploadProof';

function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState(null);

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
        <div className='flex-col h-screen  bg-yellow-400'>
          <button onClick={() => setSelectedComponent('ListOfApp')}>List Of Applicants</button>
          <button onClick={() => setSelectedComponent('UploadProof')}>Upload Proof</button>
          <button onClick={() => setSelectedComponent('Profile')}>Profile</button>
        </div>
        <div>
          {/* Render the selected component */}
          {renderComponent()}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
