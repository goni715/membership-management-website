import React, { useState } from "react";
import bg from "../../assets/images/login.png";
import { useLocation, useNavigate } from "react-router";
import OTPInput from "otp-input-react";
import { useValidateOTPMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";

const VerifyOtp = () => {
  const [OTP, setOTP] = useState("");

  const { state } = useLocation();
  const navigate = useNavigate();

  const [validateFn] = useValidateOTPMutation();

  const handleVerify = () => {
    if (!OTP) {
      // If OTP is empty, show an error message
      toast.error("Please enter the OTP");
      return;
    }

    if (!state?.email) {
      // If email is not present in state, show an error message
      toast.error("Email is missing. Please try again.");
      return;
    }

    const data = { otp: OTP, email: state?.email };
    // console.log(data);

    validateFn(data)
      .unwrap()
      .then((res) => {
        if (res?.success) {
          navigate("/login");
          toast.success(res?.message);
        }
      })
      .catch((error) => {
        toast.error(error?.data?.message);
      });
  };

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
      <div className="text-white bg-black opacity-75 p-10 rounded-2xl shadow-2xl">
        <p className="text-center text-[32px] text-white">Check your email</p>
        <p className="mb-8">
          We sent a code to your email address. Please check your email for the
          6 digit code.
        </p>
        <div className="my-10">
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={6}
            otpType="number"
            inputClassName="w-8 h-10 md:w-10 md:h-12 text-lg md:text-xl text-center border border-[#FFC0A3] rounded-md"
            className="flex justify-center gap-2 sm:gap-3 md:gap-4"
            disabled={false}
          />
        </div>

        <button
          className={"py-2 bg-[#22A59A] w-full rounded-sm cursor-pointer"}
          onClick={handleVerify}
        >
          Verify
        </button>

        <p className="mt-2 text-center">
          You have not received the email?
          <span className="text-[#22A59A]">Resend</span>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;
