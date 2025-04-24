import React from "react";
import bg from "../../assets/images/login.png";
import { Form, Input } from "antd";
import { Link, useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
import Loading from "@/Components/shared/Loading";

const Register = () => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  // This function will be called on form submit
  const navigate = useNavigate();

  const [registerFn] = useRegisterMutation();

  const onSubmit = (data) => {
    registerFn(data)
      .unwrap()
      .then((res) => {
        if (res?.success) {
          navigate("/verify-otp", { state: { email: data?.email } });
          toast(res?.message);
        }
        //! remove it: after checking OTP
        console.log(res);
      })
      .catch((error) => {
        toast.error(error?.data?.message);
      });
  };

  return (
    <>
      {isSubmitting && <Loading />}
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
          <p className="text-center text-[32px] text-white">
            Welcome to AVANTRA!
          </p>
          <p className="mb-8 text-center">Please sign up to continue access.</p>

          {/* Ant Design Form */}
          <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
            {/* User Name */}
            <Form.Item label={<p className="text-white">Full Name</p>}>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <Input {...field} size="large" placeholder="Type here" />
                )}
              />
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}
            </Form.Item>

            {/* Email Address */}
            <Form.Item label={<p className="text-white">Email Address</p>}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    placeholder="esteban_schiller@gmail.com"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </Form.Item>

            {/* Password */}
            <Form.Item label={<p className="text-white">Password</p>}>
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    size="large"
                    placeholder="**************"
                  />
                )}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </Form.Item>

            {/* Confirm Password */}
            <Form.Item label={<p className="text-white">Confirm Password</p>}>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match",
                }}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    size="large"
                    placeholder="**************"
                  />
                )}
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </Form.Item>

            {/* Avantra Referral Code */}
            <Form.Item
              label={<p className="text-white">Avantra Referral Code</p>}
            >
              <Controller
                name="referralCode"
                control={control}
                render={({ field }) => (
                  <Input {...field} size="large" placeholder="Code here" />
                )}
              />
            </Form.Item>

            <button className="bg-[#22A59A] text-white w-full rounded-md py-2 cursor-pointer">
              Sign Up
            </button>
          </Form>

          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link to={"/login"} className="text-[#22A59A]">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
