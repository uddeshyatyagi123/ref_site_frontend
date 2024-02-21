import React, { useState } from 'react'
import { TEInput, TERipple } from "tw-elements-react";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios'

function StudentSignup() {

    const[email,setEmail]  = useState('')
    const[userName,setUserName]  = useState('')
  
    const{register,handleSubmit , formState : {errors}, getValues } = useForm()
  

  
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
        method : 'post',
        url : `https://referral-site.onrender.com/api/studentregister`,
        data : {
          username : userName,
          email : email
        }
      }).then(res => console.log(res.data , 'otp sended'))
      .catch(err => console.log('OTPERROR:' ,err ))
    };

    const Submitdata = async(val) => {
        // const formData = getValues();
        // console.log('Form Data for submission:', formData);
        console.log('val', val)
         axios({
          method : 'post' , 
          url : `https://referral-site.onrender.com/api/studentverify`,
          data : {
            username : val.username,
            email: val.email,
            password :val.password,
            otp : val.otp,
            degree : val.degree,
            name: val.name
          }
        }).then(res => console.log(res.data , 'User registered'))
        .catch(err => console.log('Error:' , err))

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

      }

  return (
    <>
       {console.log(errors)}
    
    <section className="h-screen">
         <div className="h-full">
           {/* <!-- Left column container with background--> */}
           <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
             <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
               <img
               
                //  src={girl}
                 className="w-full "
                 alt="Sample image"
               />
             </div>
   
             {/* <!-- Right column container --> */}
             <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
               <form  onSubmit={handleSubmit(Submitdata) }>
   
   
               <TEInput
                   {...register('name' , {required: {value:true , message : 'Enter your full name'} })}
                   type="name"
                   label="Your full name"
                   size="lg"
                   className="mb-4"
                 ></TEInput>
                               {errors.name && <p className='text-red-500 my-0'>{errors.name.message}</p>}
   
                               
               <TEInput
                   {...register('username' , {required: {value:true , message : 'Enter your Username'} })}
                   value = {userName}
                   onChange={handleUserNameChange}
                   type="username"
                   label="User Name"
                   size="lg"
                   className="mb-4"
                 ></TEInput>
                               {errors.username && <p className='text-red-500 my-0'>{errors.username.message}</p>}
   
               <TEInput
                   {...register('degree' , {required: {value:true , message : 'degree is required'} })}
                   type="degree"
                   label="Degree"
                   size="lg"
                   className="mb-4"
                 ></TEInput>
                               {errors.degree && <p className='text-red-500 my-0'>{errors.degree.message}</p>}
   
   
                 {/* <!-- Email input --> */}
                 <TEInput
                   {...register('email' ,{required: {value:true , message : 'enter email'} , 
                     pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z\.]+[a-zA-Z]+$/ , message:"Enter a valid email" })}
                     value = {email}
                     onChange={handleEmailChange}
                   type="email"
                   label="Email verification"
                   size="lg"
                   className="mb-4"
                 ></TEInput>
                               {errors.email && <p className='text-red-500 my-0'>{errors.email.message}</p>}
   
   
                 {/* <!--Password input--> */}
                 <TEInput
                   {...register('password' , {required: {value:true , message : 'please enter the password'}  })}
                   type="Set password"
                   label="Password"
                   className="mb-4"
                   size="lg"
                 ></TEInput>
                               {errors.password && <p className='text-red-500 my-0'>{errors.password.message}</p>}
   
                 <TEInput
                   {...register('otp' , {required: {value:true , message : 'Enter the otp'} })}
                   type="otp"
                   label="OTP"
                   className="mb-4"
                   size="lg"
                 ></TEInput>
                               {errors.otp && <p className='text-red-500 my-0'>{errors.otp.message}</p>}
   
                 
   
                 <div className="mb-6 flex items-center justify-between">
   
    <button onClick={getOtp}
           type="button"
           className="inline-block rounded-full bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
         >
           Send OTP
         </button>
   
                   {/* <!--Forgot password link--> */}
                   <a href="#!">Terms and conditions</a>
                 </div>
   
                 {/* <!-- Login button --> */}
                 <div className="text-center lg:text-left">
                   {/* <TERipple rippleColor="light">
                     <button
                       type="button"
                       className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                     >
                       Register
                     </button>
                   </TERipple> */}
   
                   <input type='submit' value='submit'/>
   
                   {/* <!-- Register link --> */}
                   <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                     Have an account?{" "}
                     <Link
                       to="/student/studentlogin"
                       className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                     >
                       Login
                     </Link>
                   </p>
                 </div>
               </form>
             </div>
           </div>
         </div>
       </section>
    </>
  )
}

export default StudentSignup



// username : val.username,
// email: val.email,
// password :val.password,
// otp : val.otp,
// degree : val.degree,
// name: val.name
