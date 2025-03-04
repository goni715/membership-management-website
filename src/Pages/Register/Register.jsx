import React from 'react'
import bg from '../../assets/images/login.png'
import { Checkbox, Form, Input } from 'antd'
import { Link } from 'react-router'
const Register = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="h-screen flex justify-center items-center"
    >
      <div className=" text-white bg-black opacity-75 p-10 px-16 rounded-2xl shadow-2xl">
        <p className="text-center text-[32px] text-white">Welcome to AVANTRA!  </p>
        <p className="mb-8 text-center">Please sign up to continue access.</p>
        <Form layout="vertical">
          <Form.Item label={<p className="text-white">User Name</p>}>
            <Input placeholder="Type here" />
          </Form.Item>
          <Form.Item label={<p className="text-white">Email Address</p>}>
            <Input placeholder="esteban_schiller@gmail.com" />
          </Form.Item>
          <Form.Item label={<p className="text-white">Password</p>}>
            <Input.Password placeholder="**************" />
          </Form.Item>
          <Form.Item label={<p className="text-white">Confirm Password</p>}>
            <Input.Password placeholder="**************" />
          </Form.Item>
          <Form.Item label={<p className="text-white">Avantra Referral Code</p>}>
            <Input placeholder='Code here' />
          </Form.Item>
          <button className="bg-[#22A59A] text-white w-full rounded-md py-2 cursor-pointer">
            Sign in
          </button>
        </Form>
        <p className="text-center mt-5">Already have an account? <Link to={'/login'} className="text-[#22A59A]">Sign in</Link></p>
      </div>
    </div>
  )
}

export default Register