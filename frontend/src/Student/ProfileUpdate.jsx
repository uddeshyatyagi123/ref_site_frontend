import React from 'react'
import { TEInput, TERipple } from "tw-elements-react";
import { useForm } from 'react-hook-form';


function ProfileUpdate() {

  const{register,handleSubmit , formState : {errors}, getValues } = useForm()


  return (
    <>
    
    <div className='flex items-center justify-center h-screen'>
    <div className='h-1/2 w-1/2  '>
    <form>
      <TEInput
                   {...register('name' , {required: {value:true , message : 'Enter your full name'} })}
                   type="name"
                   label="Your full name"
                   size="lg"
                   className="mb-4"
                 ></TEInput>
                               {errors.name && <p className='text-red-500 my-0'>{errors.name.message}</p>}
   
               <TEInput
                   {...register('role' , {required: {value:true , message : 'Appplying for what role'} })}
                   type="role"
                   label="role in company"
                   size="lg"
                   className="mb-4"
                 ></TEInput>
                               {errors.role && <p className='text-red-500 my-0'>{errors.role.message}</p>}
               <TEInput
                   {...register('resume' , {required: {value:true , message : 'resume link'} })}
                   type="resume"
                   label="resume link"
                   size="lg"
                   className="mb-4"
                 ></TEInput>
                               {errors.resume && <p className='text-red-500 my-0'>{errors.resume.message}</p>}
                               </form>
                               </div>
                               </div>
    </>
  )
}

export default ProfileUpdate
