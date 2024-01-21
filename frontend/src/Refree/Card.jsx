import React from 'react'
import { TEInput } from 'tw-elements-react'

function Card() {
  return (
    <div className='block max-w-sm p-6 m-4 bg-blue-300 border border-gray-200 rounded-lg shadow flex-col space-y-1'>
        <div className='border-2 rounded-md p-1'>company name</div>
        <div className='border-2 rounded-md p-1'>post in company</div>
        <div className='border-2 rounded-md p-1'>income</div>
        <div className='flex space-x-1'>
            <div className='border-2 border-blue-200 rounded-md p-1'>resume</div>
            <div className='border-2 border-blue-200 rounded-md p-1'>decline</div>
        </div>
            <div className='bg-blue-400 rounded-2xl p-1 text-center text-white'>Accept</div>
    </div>
  )
}

export default Card