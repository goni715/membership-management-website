import React from 'react'
import img from '../../assets/images/profile1.png'
export const Profile = () => {
  return (
    <div className='p-4'>
        <p className='text-xl font-bold'>Profile</p>
        <div className='flex justify-center flex-col items-center'>
            <img src={img} className='h-20' alt="" />
            <p className='mt-2 text-2xl font-semibold'>Robert Smith</p>
            <p>robertsmithctg23@gmail.com</p>
        </div>
        <div className='max-w-2xl mx-auto my-10 space-y-4'>
            <p className='flex justify-between'><span>Phone Number :</span> <span>+3489 9999 9778</span></p>
            <p className='flex justify-between'><span>Date of Birth:</span> <span>12/04/2002</span></p>
        </div>
        <div className='flex justify-center my-10'>
        <button className='bg-[#22A59A] px-5 py-2 rounded-sm cursor-pointer '>Update</button>
        </div>
    </div>
  )
}
