import React from 'react';
import { TEInput } from 'tw-elements-react';

function Card({ username, post, income }) {
  return (
    <div  style={{backgroundColor:'#FFE7C1'}} className='block max-w-sm p-6 m-4 border border-gray-300 rounded-lg shadow-md'>
      <div className='border-b-2 pb-2 mb-2 text-xl font-semibold text-gray-800'>{username}</div>
      <div className='mb-2 text-gray-600'>Post in Company:{post}</div>
      <div className='mb-4 text-gray-700'>${income}</div>
      <div className='flex space-x-2'>
        <div className='flex-1 border cursor-pointer hover:bg-blue-500 hover:text-white border-blue-800 rounded-md p-2 text-blue-800 text-center'>Resume</div>
        <div className='flex-1 border cursor-pointer hover:bg-red-500 hover:text-white border-red-500 rounded-md p-2 text-red-500 text-center'>Decline</div>
      </div>
      <div className='mt-4 bg-blue-500 cursor-pointer hover:bg-blue-800 rounded-full p-2 text-center text-white font-semibold'>
        Accept
      </div>
    </div>
  );
}

export default Card;
