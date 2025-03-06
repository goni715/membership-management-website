import React from "react";
import bg from "../../assets/images/login.png";
import { Form, Input } from "antd";
import { Link } from "react-router";

const SetNewPassword = () => {
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
        <p className="text-center text-[32px] text-white">Set a new password</p>
        <p className="mt-5">Create a new password. Ensure it differs from</p>
        <p className="mb-8 text-center">previous ones for security</p>
        <Form layout="vertical">
            <Form.Item label={<p className="text-white">New Password</p>}>
                <Input.Password  placeholder="************" />
            </Form.Item>
            <Form.Item label={<p className="text-white">Confirm Password</p>}>
                <Input.Password  placeholder="************" />
            </Form.Item>
            <Link to={'/'}><button className="bg-[#22A59A] py-2 text-white w-full rounded-sm cursor-pointer">Continue</button></Link>
        </Form>
      </div>
    </div>
  );
};

export default SetNewPassword;
