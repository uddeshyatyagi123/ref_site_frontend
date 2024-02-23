import React, { useEffect, useState } from 'react'
import Card2 from './Card2'
import axios from 'axios'

function Refrel() {

  const [referrals, setReferrals] = useState([]);


  useEffect(()=>{
    axios({
      method : 'GET' , 
      url : `https://referral-site.onrender.com/api/referrals`,
      headers:{
        'Content-Type' : 'application/json',
      },
      withCredentials : true
    })
    .then(response => {
      console.log('Data from API:', response.data);
      setReferrals(response.data.data)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
  },[])



  return (
    <>
    <div>
      <p className="text-center mt-6 text-2xl font-semibold ">New Arrivals</p>
      <ul className="flex justify-center flex-wrap gap-4">
          {referrals.map(referral => (
            <li key={referral.id}>
              <Card2
                companyName={referral.company_name}
                position={referral.qualifications}
                cost={referral.price
                }
                // Add more props based on your actual data structure
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Refrel
