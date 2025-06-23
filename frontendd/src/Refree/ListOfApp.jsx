import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

function ListOfApp() {
  const [referrals, setReferrals] = useState([]);
  const backendURL  = import.meta.env.VITE_BACKEND_URL;


  var username = localStorage.getItem("username");
  useEffect(() => {
    axios({
      method: "post",
      url: `${backendURL }/api/myreferrals`,
      data: {
        asked_to: username,
      },
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((response) => {
        console.log("Data from API:", response.data);
        setReferrals(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="lg:pl-[15rem] min-h-screen">
        <p className="text-center pt-6 text-3xl font-bold ">New Arrivals</p>
        <div className="mt-4 p-6">
          <ul className="flex justify-center flex-wrap gap-4 w-full">
            {referrals.map((referral) => (
              <li key={referral.id}>
                <Cards
                  username={referral.asked_by}
                  post={referral.qualifications}
                  income={referral.price}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ListOfApp;
