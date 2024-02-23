import React from 'react'
import { TEInput, TERipple } from "tw-elements-react";
import { useForm } from 'react-hook-form';
import axios from 'axios';


function Profile(username) {
  var username = localStorage.getItem('username');
  const{register,handleSubmit , formState : {errors}, getValues } = useForm()

  const Submitprofile = (val) => {
    // const formData = getValues();
    // console.log('Form Data for submission:', formData);
    console.log('val', val)
      
      axios({
        method : 'post' , 
        url : `https://referral-site.onrender.com/api/addreferral`,
        data : {
          posted_by : username,
          company_name : val.Company,
          description : val.Description,
          qualifications : val.role,
          price : '4000'
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
    <form  onSubmit={handleSubmit(Submitprofile)}>
      <TEInput
                   {...register('Company' , {required: {value:true , message : 'Enter your Company name'} })}
                   type="Company"
                   label="Company name"
                   size="lg"
                   className="mb-4"
                 ></TEInput>
                               {errors.Company && <p className='text-red-500 my-0'>{errors.Company.message}</p>}
   
               <TEInput
                   {...register('role' , {required: {value:true , message : 'Appplying for what role'} })}
                   type="role"
                   label="role in company"
                   size="lg"
                   className="mb-4"
                 ></TEInput>
                               {errors.role && <p className='text-red-500 my-0'>{errors.role.message}</p>}
               <TEInput
                   {...register('Description' , {required: {value:true , message : 'Description'} })}
                   type="Description"
                   label="Description"
                   size="lg"
                   className="mb-4"
                 ></TEInput>
                               {errors.Description && <p className='text-red-500 my-0'>{errors.Description.message}</p>}

           <TERipple rippleColor="light">
           <button
             type="update"
             
             className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
           >
             update
           </button>
         </TERipple>

                               </form>
                               </div>
                               </div>
    </>
  )
}

export default Profile
