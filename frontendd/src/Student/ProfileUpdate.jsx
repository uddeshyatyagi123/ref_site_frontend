import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Card, Input, Button } from "@nextui-org/react";

function ProfileUpdate() {
  var username = localStorage.getItem("username");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const Submitprofile = (val) => {
    // const formData = getValues();
    // console.log('Form Data for submission:', formData);
    console.log("val", val);

    axios({
      method: "patch",
      url: `https://referral-site.onrender.com/api/profile`,
      data: {
        username: username,
        name: val.name,
        Degree: val.Degree,
        resumelink: val.resumelink,
      },

      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data, "User updated");
      })
      .catch((err) => console.log("Error:", err));
  };

  return (
    <>
      <div className="lg:pl-[15rem] min-h-screen flex flex-col items-center justify-center">
        <div className="w-2/3 h-[calc(100vh-2em)] flex flex-col items-center justify-evenly">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="sm:text-[2.5em] text-[1em] font-bold text-center">
              Spotlight Your Skills, Amplify Your Referrals
            </h1>
            <p className="sm:text-[1.5em] text-center text-[1em] w-2/3">
              Showcase your expertise with a profile that shines, and watch the referrals roll in!
            </p>
          </div>
          <Card className="p-4 border-sky-700 border-1 bg-gradient-to-br from-sky-300 to-sky-100 w-2/3">
            <form
              onSubmit={handleSubmit(Submitprofile)}
              className="flex flex-col gap-4 font-lg"
            >
              <Input
                {...register("name", {
                  required: { value: true },
                })}
                type="name"
                label="Your full name"
                labelPlacement="outside"
                classNames={{ label: "font-bold" }}
                placeholder="Enter your full name"
                errorMessage={errors.name && "Name required"}
              />
              <Input
                {...register("Degree", {
                  required: { value: true },
                })}
                type="Degree"
                label="Degree"
                labelPlacement="outside"
                classNames={{ label: "font-bold" }}
                placeholder="Enter your degree"
                errorMessage={errors.Degree && "Degree required"}
              />
              <Input
                {...register("resume", {
                  required: { value: true },
                })}
                type="resume"
                label="Resume link"
                labelPlacement="outside"
                classNames={{ label: "font-bold" }}
                placeholder="Enter your resume link"
                errorMessage={errors.resume && "Link required"}
              />
              <Button
                type="submit"
                variant="shadow"
                radius="full"
                className="bg-blue-400 font-bold self-center"
              >
                Update
              </Button>
            </form>
          </Card>
        </div>
        <div className="sm:text-[1.2em] text-[0.8em] text-center border-t-2 mt-auto w-full">
          Give your profile a makeover abd watch those referral doors swing wide
          open...
        </div>
      </div>
    </>
  );
}

export default ProfileUpdate;
