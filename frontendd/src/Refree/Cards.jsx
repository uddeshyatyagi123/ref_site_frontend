import React from "react";
import { Button, Card, Input } from "@nextui-org/react";

function Cards({ username, post, income }) {
  return (
    <Card className="p-4 flex flex-col gap-2 border-sky-700 border-1 bg-gradient-to-br from-sky-300 to-sky-100 w-1/4">
      <Input radius="full" value={username} isReadOnly label="Username" labelPlacement="outside" />
      <Input radius="full" value={post} isReadOnly label="Post" labelPlacement="outside"/>
      <Input radius="full" value={income} isReadOnly label="Income" labelPlacement="outside"/>
      <div className="flex justify-between mt-2">
        <Button variant="ghost" color="primary" radius="full">
          Resume
        </Button>
        <Button variant="ghost" color="danger" radius="full">
          Decline
        </Button>
      </div>
      <div className="flex justify-center">
        <Button color="primary" radius="full">
          Accept
        </Button>
      </div>
    </Card>
  );
}

export default Cards;
