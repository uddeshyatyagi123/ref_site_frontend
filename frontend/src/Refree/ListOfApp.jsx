import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";


function ListOfApp() {
  const [referrals, setReferrals] = useState([]);

  var username = localStorage.getItem('username');
  useEffect(()=>{
    axios({
      method : 'post' , 
      url : `https://referral-site.onrender.com/api/myreferrals`,
      data:{
        asked_to : username,
      },
      headers:{
        'Content-Type' : 'application/json',
      },
      withCredentials : true
    })
    .then(response => {
      console.log('Data from API:', response.data);
      setReferrals(response.data)
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
        {referrals.map((referral) => (
          <li key={referral.id}>
            <Card 
            username={referral.asked_by}
            post={referral.qualifications} 
            income={referral.price} />
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default ListOfApp;
