import React from "react";
import bg from "../../assets/images/login.png";
import { Form, Input } from "antd";

const ForgetPassword = () => {
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
        <p className="text-center text-[32px] text-white">Forget Password? </p>
        <p className="mb-8">Please enter your email to get verification code</p>
        <Form layout="vertical">
            <Form.Item label={<p className="text-white">Email Address</p>}>
                <Input  placeholder="esteban_schiller@gmail.com" />
            </Form.Item>
            <button className="bg-[#22A59A] py-2 text-white w-full rounded-sm cursor-pointer">Continue</button>
        </Form>
      </div>
    </div>
  );
};

export default ForgetPassword;
