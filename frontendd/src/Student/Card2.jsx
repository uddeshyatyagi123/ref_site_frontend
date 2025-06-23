import React from "react";
import axios from "axios";
import { Button, Card, Input } from "@nextui-org/react";
function Card2({ companyName, position, cost, refreeusername }) {
  var username = localStorage.getItem("username");
  const backendURL  = import.meta.env.VITE_BACKEND_URL;

  const submit = () => {
    axios({
      method: "post",
      url: `${backendURL }/api/askreferral`,
      data: {
        asked_by: username,
        asked_to: refreeusername,
      },
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data, "User registered");
      })
      .catch((err) => console.log("Error:", err));
  };
  return (
    <Card className="p-4 flex flex-col gap-2 border-sky-700 border-1 bg-gradient-to-br from-sky-300 to-sky-100 w-1/4">
      <Input
        isReadOnly
        labelPlacement="outside"
        value={companyName}
        label="Company name"
        radius="full"
        classNames={{ label: "font-semibold" }}
      />
      <Input
        isReadOnly
        labelPlacement="outside"
        value={position}
        label="Position"
        radius="full"
        classNames={{ label: "font-semibold" }}
      />
      <Input
        isReadOnly
        labelPlacement="outside"
        value={cost}
        label="Cost"
        radius="full"
        classNames={{ label: "font-semibold" }}
      />
      <Button
        type="submit"
        variant="shadow"
        radius="full"
        onClick={submit}
        className="bg-blue-400 self-center font-bold mt-2"
      >
        Get Referral
      </Button>
    </Card>
  );
}

export default Card2;
