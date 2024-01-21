import React, { useState } from 'react';
import Card from './Card';

function UploadProof() {
  const [driveLink, setDriveLink] = useState('');
  const [email, setEmail] = useState('');

  const handleUpload = () => {
    console.log('Uploading:', driveLink, email);
  };

  return (
    <div className='flex flex-col items-center mt-2'>
      <h2 className="text-center mt-20 text-2xl font-semibold ">
        Don't just be a <em className='text-red-500'>good</em> referee, be a{' '}
        <em className='text-red-500'>great</em> one
      </h2>
      <h2 className="text-center font-medium mt-20 text-xl">
        Upload your documents and unleash your full potential
      </h2>

      <div  style={{backgroundColor:'#FFE7C1'}} className='w-1/2 mt-4 p-6 m-4 border border-gray-300 rounded-lg shadow-md'>
        <div className='mb-2'>
          <label htmlFor='driveLink' className='block text-gray-600 mb-1'>
            Drive link
          </label>
          <input
            type='text'
            id='driveLink'
            value={driveLink}
            onChange={(e) => setDriveLink(e.target.value)}
            className='border-2 rounded-xl p-2 w-full focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-600 mb-1'>
            Email
          </label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 rounded-xl p-2 w-full focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className='mt-4 bg-blue-500 cursor-pointer hover:bg-blue-800 rounded-full p-2 text-center text-white font-semibold' onClick={handleUpload}>
          Upload
        </div>
      </div>
    </div>
  );
}

export default UploadProof;
