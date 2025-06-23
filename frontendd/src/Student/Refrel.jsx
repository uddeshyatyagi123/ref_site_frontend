import React, { useEffect, useState } from "react";
import Card2 from "./Card2";
import axios from "axios";

function Refrel() {
  const [referrals, setReferrals] = useState([]);
  const backendURL  = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios({
      method: "GET",
      url: `${backendURL }/api/referrals`,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((response) => {
        console.log("Data from API:", response.data);
        setReferrals(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="lg:pl-[15rem] min-h-screen">
        <div className="p-6 flex flex-col gap-4 w-full items-center">
          <h1 className="sm:text-[2.5em] text-[1em] font-bold!">
            We're not just connecting{" "}
            <span className="italic font-bold">jobs</span>, we're connecting{" "}
            <span className="italic text-blue-500 font-bold">people</span>.
          </h1>
          <ul className="flex justify-center flex-wrap gap-4">
            {referrals.map((referral) => (
              <li key={referral.id}>
                <Card2
                  companyName={referral.company_name}
                  position={referral.qualifications}
                  cost={referral.price}
                  refreeusername={referral.posted_by}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Refrel;
