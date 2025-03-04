import React from "react";
import bg from "../../assets/images/login.png";
import { Checkbox, Form, Input } from "antd";
import { Link } from "react-router";
const Login = () => {
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
      <div className=" text-white bg-black opacity-75 p-10 rounded-2xl shadow-2xl">
        <p className="text-center text-[32px] text-white">Login to Account </p>
        <p className="mb-8">Please enter your email and password to continue</p>
        <Form layout="vertical">
          <Form.Item label={<p className="text-white">Email Address</p>}>
            <Input placeholder="esteban_schiller@gmail.com" />
          </Form.Item>
          <Form.Item label={<p className="text-white">Password</p>}>
            <Input.Password placeholder="**************" />
          </Form.Item>
          <div className="flex justify-between items-center mb-5">
            <p className="text-white">
              <Checkbox /> Remember me
            </p>
            <Link to={"/forget-password"}>
              <p className="text-white cursor-pointer">Forget password</p>
            </Link>
          </div>
          <button className="bg-[#22A59A] text-white w-full rounded-md py-2 cursor-pointer">
            Sign in
          </button>
        </Form>
        <p className="text-center mt-5">Don't have an account? <Link to={'/register'} className="text-[#22A59A]">Sign up</Link></p>
      </div>
    </div>
  );
};

export default Login;
