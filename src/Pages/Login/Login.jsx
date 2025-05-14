import React from "react";
import bg from "../../assets/images/login.png";
import { Checkbox, Form, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/features/auth/authSlice";
import toast from "react-hot-toast";
import Loading from "@/Components/shared/Loading";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const dispatch = useDispatch();
  const { state } = useLocation();

  const navigate = useNavigate();

  const [loginFn] = useLoginMutation();

  const onSubmit = (data) => {
    loginFn(data)
      .unwrap()
      .then((res) => {
        if (res?.accessToken) {
          dispatch(
            setToken({
              accessToken: res.accessToken,
              refreshToken: res?.refreshToken,
            })
          );
          navigate(state ? state : "/");
          toast.success(res?.message);
        }
      })
      .catch((error) => {
        toast.error(error?.data?.message || "Failed to login!");
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
        <div className="text-white bg-black opacity-90 p-10 rounded-2xl shadow-2xl">
          <p className="text-center text-[32px] text-white">Login to Account</p>
          <p className="mb-8">
            Please enter your email and password to continue
          </p>

          {/* React Hook Form */}
          <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
            {/* Email Address */}
            <Form.Item label={<p className="text-white">Email Address</p>}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: "Invalid email format",
                  },
                }}
                render={({ field }) => (
                  <Input
                    className="login-input text-white"
                    {...field}
                    placeholder="esteban_schiller@gmail.com"
                    size="large" // Set the size to "large"
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
                    placeholder="**************"
                    size="large" // Set the size to "large"
                  />
                )}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </Form.Item>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center mb-5">
              <p className="text-white">
                <Controller
                  name="remember_me"
                  control={control}
                  render={({ field }) => (
                    <Checkbox {...field} checked={field.value} />
                  )}
                />{" "}
                Remember me
              </p>
              <Link to="/forget-password">
                <p className="text-white cursor-pointer">Forgot password?</p>
              </Link>
            </div>

            {/* Submit Button */}
            <button className="bg-[#22A59A] text-white w-full rounded-md py-2 cursor-pointer max-h-10">
              Sign in
            </button>
          </Form>

          {/* Signup Link */}
          <p className="text-center mt-5">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#22A59A]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
