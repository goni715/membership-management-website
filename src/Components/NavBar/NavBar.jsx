import React from 'react'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router'
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
                <div className='space-x-10'>
                    <NavLink>Home</NavLink>
                    <NavLink>Videos</NavLink>
                    <NavLink>Files</NavLink>
                    <NavLink>Contact Us</NavLink>
                    <button className='bg-[#22A59A] px-4 py-2 rounded-sm shadow-2xl'>Log in</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar