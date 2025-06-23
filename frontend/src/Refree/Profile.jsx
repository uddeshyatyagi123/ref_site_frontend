import React from "react";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import bro from "../assets/bro.jpg";

function Profile() {
  return (
    <div className="lg:pl-[15rem] min-h-screen flex flex-col">
      <div className="flex flex-col gap-6 items-center py-6">
        <h1 className="sm:text-[2.5em] text-[1em] font-bold">
          Become a Candidate{" "}
          <span className="text-blue-500 underline">Magnet!</span>
        </h1>
        <p className="sm:text-[1.5em] text-center text-[0.8em] w-7/12">
          Attract top talent with a profile that showcase your value. Update
          your details and watch promising candidates gravitate towards your
          guidance.
        </p>
        <Button
          variant="shadow"
          className="bg-blue-400 font-bold shadow-lg"
          size="lg"
        >
          <Link to="update">Update your profile</Link>
        </Button>
        <img draggable="false" src={bro} alt="" width={420} />
      </div>
      <div className="sm:text-[1em] text-[0.6em] text-center border-t-2 mt-auto">
        Don't wait completing your profile and proofs brings you closer to the
        rewards you deserve.
      </div>
    </div>
  );
}

export default Profile;
