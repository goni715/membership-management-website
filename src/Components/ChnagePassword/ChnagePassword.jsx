import { Form, Input } from "antd";
import React from "react";

const ChnagePassword = () => {
  return (
    <div className="p-4">
      <p className="text-xl font-bold">Change Password</p>
      <div className="px-20 mt-10">
        <Form layout="vertical">
          <Form.Item label={<p className="text-white">Current Password</p>}>
            <Input placeholder="******" />
          </Form.Item>
          <Form.Item label={<p className="text-white">New Password</p>}>
            <Input placeholder="******" />
          </Form.Item>
          <Form.Item label={<p className="text-white">Confirm Password</p>}>
            <Input placeholder="******" />
          </Form.Item>
          <div className="flex justify-center pb-10">
            <button className="bg-[#22A59A] text-white p-2 rounded-sm">
              Change Password
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ChnagePassword;
