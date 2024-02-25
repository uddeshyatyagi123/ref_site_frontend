import React from 'react'
import { TEInput, TERipple } from "tw-elements-react";
import { useForm } from 'react-hook-form';
import axios from 'axios';


function ProfileUpdate() {
var username = localStorage.getItem('username')
  const{register,handleSubmit , formState : {errors}, getValues } = useForm()

  const Submitprofile = (val) => {
    // const formData = getValues();
    // console.log('Form Data for submission:', formData);
    console.log('val', val)
      
      axios({
        method : 'patch' , 
        url : `https://referral-site.onrender.com/api/profile`,
        data : {
          username:username,
          name: val.name,
          Degree: val.Degree,
          resumelink : val.resumelink
        },

        withCredentials : true 
      }).then(res => {console.log(res.data , 'User updated');  
    })
      .catch(err => console.log('Error:' , err))
  }

  return (
    <>
    
    <div className='flex items-center justify-center h-screen'>
    <div className='h-1/2 w-1/2  '>
    <form onSubmit={handleSubmit(Submitprofile)}>
      <TEInput
                   {...register('name' , {required: {value:false , message : 'Enter your full name'} })}
                   type="name"
                   label="Your full name"
                   size="lg"
                   className="mb-4"
                 ></TEInput>
                               {errors.name && <p className='text-red-500 my-0'>{errors.name.message}</p>}
   
               <TEInput
                   {...register('Degree' , {required: {value:false , message : 'Degree'} })}
                   type="Degree"
                   label="Your degree"
                   size="lg"
                   className="mb-4"
                 ></TEInput>
                               {errors.Degree && <p className='text-red-500 my-0'>{errors.Degree.message}</p>}
               <TEInput
                   {...register('resume' , {required: {value:false , message : 'resume link'} })}
                   type="resume"
                   label="resume link"
                   size="lg"
                   className="mb-4"
                 ></TEInput>
                               {errors.resume && <p className='text-red-500 my-0'>{errors.resume.message}</p>}

                           <TERipple rippleColor="light">
           <button
             type="submit"
             
             className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
           >
             Update
           </button>
         </TERipple>             
                               </form>
                               </div>
                               </div>
    </>
  )
}

export default ProfileUpdate
