import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Card, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";

const RefreeProfileUpdate = () => {
  var username = localStorage.getItem("username");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const backendURL  = import.meta.env.VITE_BACKEND_URL;

  const Submitprofile = (val) => {
    // const formData = getValues();
    // console.log('Form Data for submission:', formData);
    console.log("val", val);
    

    axios({
      method: "post",
      url: `${backendURL }/api/addreferral`,
      data: {
        posted_by: username,
        company_name: val.Company,
        description: val.Description,
        qualifications: val.role,
        price: "4000",
      },

      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data, "User updated");
      })
      .catch((err) => console.log("Error:", err));
  };
  return (
    <div className="lg:pl-[15rem] min-h-screen flex flex-col items-center justify-center">
      <Button variant="shadow" radius="full" className="absolute left-64 top-4 font-bold bg-blue-400">
        <Link to="/refree/profile">Back</Link>
      </Button>
      <Card className="p-4 w-1/2 border-sky-700 border-1 bg-gradient-to-br from-sky-300 to-sky-100">
        <form
          onSubmit={handleSubmit(Submitprofile)}
          className="flex flex-col gap-4 font-lg"
        >
          <Input
            {...register("Company", {
              required: { value: true },
            })}
            type="Company"
            label="Company name"
            labelPlacement="outside"
            classNames={{ label: "font-bold" }}
            placeholder="Enter your company name"
            errorMessage={errors.Company && "Company name required"}
          />
          <Input
            {...register("role", {
              required: { value: true },
            })}
            type="role"
            label="Role in company"
            labelPlacement="outside"
            classNames={{ label: "font-bold" }}
            placeholder="Enter your role"
            errorMessage={errors.role && "Appplying for what role"}
          />
          <Input
            {...register("Description", {
              required: { value: true, message: "Description is needed" },
            })}
            type="Description"
            label="Description"
            labelPlacement="outside"
            classNames={{ label: "font-bold" }}
            placeholder="Describe the role"
            errorMessage={errors.Description && "Description is needed"}
          />
          <Button
            type="submit"
            radius="full"
            variant="shadow"
            className="bg-blue-400 self-center mt-3 font-bold"
          >
            Update
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default RefreeProfileUpdate;
