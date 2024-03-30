import React, { useState } from "react";
import { Button, Card, Input } from "@nextui-org/react";

function UploadProof() {
  const [driveLink, setDriveLink] = useState("");
  const [email, setEmail] = useState("");

  const handleUpload = () => {
    console.log("Uploading:", driveLink, email);
  };

  return (
    <div className="lg:pl-[15rem] min-h-screen flex flex-col">
      <div className="flex flex-col justify-center items-center gap-[3em] md:pt-16 pt-8">
        <h1 className="sm:text-[2.5em] text-[1em] font-bold">
          Don't just be a <span className="italic text-red-600">good</span>{" "}
          refree, be a <span className="italic text-sky-600">great</span> one!
        </h1>
        <p className="sm:text-[1.5em] text-center text-[0.8em] font-bold">
          Upload your documents and unleash your full potential.
        </p>

        <Card className="p-8 flex flex-col gap-4 border-sky-700 border-1 bg-gradient-to-br from-sky-300 to-sky-100 w-1/2">
          <Input
            type="text"
            id="driveLink"
            radius="full"
            placeholder="Enter the drive link"
            label="Drive Link"
            labelPlacement="outside"
            value={driveLink}
            classNames={{label:"font-bold"}}
            isRequired
            onChange={(e) => setDriveLink(e.target.value)}
          />
          <Input
            type="text"
            id="email"
            radius="full"
            placeholder="Enter your e-mail"
            label="Email"
            labelPlacement="outside"
            value={email}
            classNames={{label:"font-bold"}}
            isRequired
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            color="primary"
            variant="shadow"
            radius="full"
            className="self-center mt-4 font-bold"
            onClick={handleUpload}
          >
            Upload
          </Button>
        </Card>

        <div className="w-1/2 flex justify-between">
          <Button className="bg-white border-1 border-blue-400 shadow-blue-400 shadow-lg text-gray-500">
            Total Earnings:
          </Button>
          <Button color="primary" variant="shadow">
            Withdraw
          </Button>
        </div>
      </div>
      <div className="sm:text-[1em] text-[0.6em] text-center border-t-2 mt-auto">
        Don't wait completing your profile and proofs brings you closer to the
        rewards you deserve.
      </div>
    </div>
  );
}

export default UploadProof;
