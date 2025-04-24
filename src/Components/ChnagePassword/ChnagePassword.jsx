import React, { useState } from "react";
import { Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";

const ChangePassword = ({ setChangeRoute }) => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  // State for managing password visibility
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [ChangePasswordFN] = useChangePasswordMutation();

  // Handle form submission
  const onSubmit = (data) => {
    const { new_password, old_password } = data;

    ChangePasswordFN({ new_password, old_password })
      .unwrap()
      .then((res) => {
        setChangeRoute("profile");
        toast.success(res?.message);
      })
      .catch((error) => {
        toast.error(error?.data?.message);
      });
  };

  // Toggle password visibility function
  const togglePasswordVisibility = (field) => {
    if (field === "currentPassword") {
      setShowCurrentPassword(!showCurrentPassword);
    } else if (field === "newPassword") {
      setShowNewPassword(!showNewPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="p-4">
      <p className="text-xl font-bold">Change Password</p>
      <div className="px-20 mt-10">
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          {/* Current Password */}
          <Form.Item label={<p className="text-white">Current Password</p>}>
            <div className="relative">
              <Controller
                name="old_password"
                control={control}
                rules={{ required: "Current password is required" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="******"
                    type={showCurrentPassword ? "text" : "password"}
                    size="large"
                  />
                )}
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => togglePasswordVisibility("currentPassword")}
              >
                {showCurrentPassword ? (
                  <EyeInvisibleOutlined />
                ) : (
                  <EyeOutlined />
                )}
              </span>
            </div>
            {errors.currentPassword && (
              <p className="text-red-500">{errors.currentPassword.message}</p>
            )}
          </Form.Item>

          {/* New Password */}
          <Form.Item label={<p className="text-white">New Password</p>}>
            <div className="relative">
              <Controller
                name="new_password"
                control={control}
                rules={{ required: "New password is required" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="******"
                    type={showNewPassword ? "text" : "password"}
                    size="large"
                  />
                )}
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => togglePasswordVisibility("newPassword")}
              >
                {showNewPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              </span>
            </div>
            {errors.newPassword && (
              <p className="text-red-500">{errors.newPassword.message}</p>
            )}
          </Form.Item>

          {/* Confirm Password */}
          <Form.Item label={<p className="text-white">Confirm Password</p>}>
            <div className="relative">
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === getValues("new_password") ||
                    "Passwords do not match",
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="******"
                    type={showConfirmPassword ? "text" : "password"}
                    size="large"
                  />
                )}
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => togglePasswordVisibility("confirmPassword")}
              >
                {showConfirmPassword ? (
                  <EyeInvisibleOutlined />
                ) : (
                  <EyeOutlined />
                )}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </Form.Item>

          <div className="flex justify-center pb-10">
            <button
              className="bg-[#22A59A] text-white p-2 rounded-sm"
              type="submit"
            >
              Change Password
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;
