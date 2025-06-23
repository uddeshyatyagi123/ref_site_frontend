import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Divider, Input } from "@heroui/react";
import { CutEyeIcon } from "../assets/Icons/CutEyeIcon";
import { EyeIcon } from "../assets/Icons/EyeIcon";
import bro from "../assets/rafiki.png";

function StudentSignup() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const getOtp = () => {
    // const formData = getValues();
    // console.log('Form Data before submission:', formData);
    axios({
      method: "post",
      url: `https://referral-site.onrender.com/api/studentregister`,
      data: {
        username: userName,
        email: email,
      },
    })
      .then((res) => console.log(res.data, "otp sended"))
      .catch((err) => console.log("OTPERROR:", err));
  };

  const Submitdata = async (val) => {
    // const formData = getValues();
    // console.log('Form Data for submission:', formData);
    console.log("val", val);
    axios({
      method: "post",
      url: `https://referral-site.onrender.com/api/studentverify`,
      data: {
        username: val.username,
        email: val.email,
        password: val.password,
        otp: val.otp,
        degree: val.degree,
        name: val.name,
      },
    })
      .then((res) => console.log(res.data, "User registered"))
      .catch((err) => console.log("Error:", err));

    //     try{

    //         const res = await axios.post(`https://referral-site.onrender.com/api/studentverify`,
    //         JSON.stringify(
    //             {username : val.username,
    // email: val.email,
    // password :val.password,
    // otp : val.otp,
    // degree : val.degree,
    // name: val.name}
    //         )
    //         )
    //         console.log(response.data)
    //     }catch(err) { console.log('axioserr' , err)}
  };

  return (
    <section className="min-h-screen flex flex-col gap-4 p-4">
      <h1 className="sm:text-[2.5em] text-[1.5em] font-bold text-center leading-10">
        Student today, Professional tomorrow. <br /> Launch your career journey
        here...
      </h1>
      <p className="sm:text-[1.2em] text-[1em] font-semibold text-center">
        Have an account?{" "}
        <Link
          to="/student/studentlogin"
          className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
        >
          Login
        </Link>
      </p>
      <div className="flex w-full">
        <img src={bro} alt="Frustrated boy" className="w-5/12 lg:flex hidden" />
        <div className="flex flex-col justify-center items-center lg:w-7/12 w-full">
          <form
            onSubmit={handleSubmit(Submitdata)}
            className="flex flex-col gap-4 w-2/3"
          >
            <div className="flex sm:flex-row flex-col gap-4">
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
                label="Username"
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
              {...register("degree", {
                required: { value: true },
              })}
              type="degree"
              label="Your Degree"
              placeholder="Your degree name"
              labelPlacement="outside"
              radius="full"
              classNames={{ label: "font-bold" }}
              errorMessage={errors.degree && "Please enter a degree name"}
            />

            <Input
              {...register("email", {
                required: { value: true, message: "enter company email" },
                pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z\.]+[a-zA-Z]+$/,
                message: "Enter a valid email",
              })}
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              type="email"
              radius="full"
              label="Email"
              labelPlacement="outside"
              classNames={{ label: "font-bold" }}
              errorMessage={errors.email && "Please enter company email"}
            />

            <div className="flex sm:flex-row flex-col gap-4">
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
          <div>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-800 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-800">
              <p className="mx-4 mb-0 text-center font-bold dark:text-white">
                OR
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className="font-bold text-lg">Sign up with</p>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  {/* <!-- Twitter --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentSignup;
