import React, { useState } from "react";
import girl from "../assets/refereesignupgirl.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Divider, Input } from "@nextui-org/react";
import { CutEyeIcon } from "../assets/Icons/CutEyeIcon";
import { EyeIcon } from "../assets/Icons/EyeIcon";
import bg from "../assets/referralSignupback.png";
// import { API_DETAILS } from '../config';

function RefreeSignUp() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const backendURL  = import.meta.env.VITE_BACKEND_URL;

    const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const Submitdata = (val) => {
    // const formData = getValues();
    // console.log('Form Data for submission:', formData);
    console.log("val", val);
    axios({
      method: "post",
      url: `${backendURL }/api/referrerverify`,
      data: {
        username: val.username,
        email: val.email,
        password: val.password,
        otp: val.otp,
        company: val.companyname,
        name: val.name,
      },
    })
      .then((res) => {console.log(res.data, "User registered")
        navigate("/refree/applications");

      })
      .catch((err) => console.log("Error:", err));
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const getOtp = () => {
    console.log(backendURL )
    // const formData = getValues();
    // console.log('Form Data before submission:', formData);
    axios({
      method: "post",
      url: `${backendURL }/api/referrerregister`,
      data: {
        username: userName,
        email: email,
      },
      withCredentials: true
    })
      .then((res) => console.log(res.data, "otp sended"))
      .catch((err) => {console.log("OTPERROR:", err,'url:',backendURL ) });
  };

  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
      className="min-h-screen flex p-6"
    >
      <div className="flex flex-col justify-center items-center gap-12 lg:w-7/12 w-full">
        <div className="self-center flex flex-col gap-4">
          <h1 className="sm:text-[3em] text-[1.2em] font-bold">
            <span className="bg-blue-400 rounded-md">Connecting</span> Talents
          </h1>
          <div className="flex gap-4 items-center">
            <p className="sm:text-[1.2em] text-[1em] font-semibold">
              Create a new account
            </p>
            <Divider orientation="vertical" className="h-6 bg-black" />
            <p className="sm:text-[1.2em] text-[1em] font-semibold">
              Have an account?{" "}
              <Link
                to="/refree/refreelogin"
                className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(Submitdata)}
          className="flex flex-col gap-4 w-2/3"
        >
          <div className="flex gap-4">
            <Input
              {...register("name", {
                required: { value: true },
              })}
              type="name"
              label="Your name"
              radius="full"
              labelPlacement="outside"
              classNames={{ label: "font-bold" }}
              placeholder="Enter your full name"
              errorMessage={errors.name && "Please enter your name"}
            />

            <Input
              {...register("username", {
                required: { value: true },
              })}
              type="username"
              label="User Name"
              labelPlacement="outside"
              placeholder="Enter a username"
              classNames={{ label: "font-bold" }}
              value={userName}
              radius="full"
              onChange={handleUserNameChange}
              errorMessage={errors.username && "Please enter a username"}
            />
          </div>

          <Input
            {...register("companyname", {
              required: { value: true },
            })}
            type="companyname"
            label="Company Name"
            placeholder="Your company name"
            labelPlacement="outside"
            radius="full"
            classNames={{ label: "font-bold" }}
            errorMessage={errors.companyname && "Please enter a company name"}
          />

          <Input
            {...register("post", {
              required: { value: true },
            })}
            type="post"
            label="Post in company"
            placeholder="Enter your post"
            labelPlacement="outside"
            radius="full"
            classNames={{ label: "font-bold" }}
            errorMessage={errors.post && "Please enter a post"}
          />

          <Input
            {...register("email", {
              required: { value: true, message: "enter company email" },
              pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z\.]+[a-zA-Z]+$/,
              message: "Enter a valid email",
            })}
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your company email"
            type="email"
            radius="full"
            label="Company Email verification"
            labelPlacement="outside"
            classNames={{ label: "font-bold" }}
            errorMessage={errors.email && "Please enter company email"}
          />
          <div className="flex gap-4">
            <Input
              {...register("password", {
                required: { value: true },
              })}
              label="Password"
              labelPlacement="outside"
              radius="full"
              classNames={{ label: "font-bold" }}
              placeholder="Enter your passwrod"
              errorMessage={errors.password && "Please enter your password"}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? <CutEyeIcon /> : <EyeIcon />}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />

            <Input
              {...register("otp", {
                required: { value: true },
              })}
              type="otp"
              label="OTP"
              radius="full"
              placeholder="Enter the OTP"
              labelPlacement="outside"
              classNames={{ label: "font-bold", inputWrapper: "pr-0" }}
              errorMessage={errors.otp && "Enter the OTP"}
              endContent={
                <Button
                  onClick={getOtp}
                  radius="full"
                  variant=""
                  className="font-bold bg-blue-400"
                >
                  Get OTP
                </Button>
              }
            />
          </div>

          <Button
            type="submit"
            radius="full"
            variant="shadow"
            color="primary"
            className="self-center mt-4"
          >
            Register
          </Button>
        </form>
      </div>
      <div className="lg:flex hidden flex-col justify-center gap-20 items-center w-1/3">
        <div className="w-7/12 aspect-square rotate-45 bg-white rounded-[2em] overflow-hidden shadow-2xl">
          <img className="-rotate-45 scale-150 mt-8 ml-2" src={girl} alt="" />
        </div>
        <h1 className="sm:text-[2.5em] text-[1em] font-bold">
          <span className="bg-blue-400 rounded-md">Empowering</span> Careers
        </h1>
      </div>
    </section>
  );
}

export default RefreeSignUp;
