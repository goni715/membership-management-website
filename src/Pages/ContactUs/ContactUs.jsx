import { Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

const ContactUs = () => {
  return (
    <div className='text-white container mx-auto '>
        <p className='text-center text-4xl font-semibold pt-10'>Contact Us</p>
        <p className='text-center mt-2'>Home/Contact Us</p>
        <div className='md:flex  justify-between gap-36 mt-20 py-20'>
            <div className='w-full'>
               <p className='text-2xl font-bold'>Contact Details</p> 
               <p className='mt-5'>We’re here to help! If you have any questions, concerns, or feedback regarding our Refer & Earn Program, feel free to reach out to us.</p>
               <p className='flex items-center gap-2 mt-5'><FaPhoneAlt  color='#22A59A' /> 839949950252</p>
               <p className='flex items-center gap-2 mt-2'><IoMdMail color='#22A59A' />infocompany@gmail.com</p>
               <p className='flex items-center gap-2 mt-2'><FaLocationDot color='#22A59A' />infocompany@gmail.com</p>
            </div>
            <div className='w-full'>
                <Form layout='vertical'>
                    <Form.Item label={<p className='text-white'>Full Name</p>}>
                        <Input placeholder='Type Name'/>
                    </Form.Item>
                    <Form.Item label={<p className='text-white'>Email</p>}>
                        <Input placeholder='Type Email'/>
                    </Form.Item>
                    <Form.Item label={<p className='text-white'>Phone Number</p>}>
                        <Input placeholder='Phone Number...'/>
                    </Form.Item>
                    <Form.Item label={<p className='text-white'>Message</p>}>
                        <TextArea placeholder='Message...'/>
                    </Form.Item>
                    <button className='bg-[#22A59A] w-full text-white rounded-sm py-1 text-xl cursor-pointer'>Submit</button>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default ContactUs