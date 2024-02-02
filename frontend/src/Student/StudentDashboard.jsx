import React, { useState } from 'react'
import Refrel from './Refrel';
import ProfileUpdate from './ProfileUpdate';

function StudentDashboard() {

    const [selectedComponent, setSelectedComponent] = useState('refrel');

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
