import React from 'react'
import logo from '../../assets/images/logo.png'
import profile from '../../assets/images/profile1.png'
import { NavLink } from 'react-router'
import { IoMdNotificationsOutline } from 'react-icons/io'
const NavBar = () => {
  return (
    <div className='bg-[#333333] text-white '>
        <div className='container mx-auto py-2 '>
            <div className='flex items-center justify-between'>
                {/* Logo and company Name */}
                <div className='flex  items-center gap-2'>
                    <img src={logo} className='h-[50px] w-[50px]' alt="" />
                    <p className='text-[24px]'>AVANTRA</p>
                </div>

                {/* Menu bars */}
                <div className='space-x-10 flex items-center'>
                    <NavLink>Home</NavLink>
                    <NavLink>Videos</NavLink>
                    <NavLink>Files</NavLink>
                    <NavLink to={'/contact-us'}>Contact Us</NavLink>
                    <NavLink to={'/notification'} className={"bg-white p-1.5 rounded-full"}><IoMdNotificationsOutline size={22} color='#22A59A' /></NavLink>
                    <NavLink to={'/my-profile'}><img src={profile} className='h-10' alt="" /></NavLink>
                    <button className='bg-[#22A59A] px-4 py-2 rounded-sm shadow-2xl'>Log in</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar