import React, { useState } from "react";
import bg from "../../assets/images/login.png";
import { useLocation, useNavigate } from "react-router";
import OTPInput from "otp-input-react";
import {
  useResendOTPMutation,
  useValidateOTPMutation,
} from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const VerifyOtp = () => {
  const { t } = useTranslation();

  const [OTP, setOTP] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const [validateFn] = useValidateOTPMutation();
  const [resendOtpFn] = useResendOTPMutation();

  const handleVerify = () => {
    if (!OTP) {
      toast.error(t("pleaseEnterOtp"));
      return;
    }

    if (!state?.email) {
      toast.error(t("emailMissing"));
      return;
    }

    const data = { otp: OTP, email: state.email };

    validateFn(data)
      .unwrap()
      .then((res) => {
        if (res?.success) {
          navigate("/login");
          toast.success(res?.message);
        }
      })
      .catch((error) => {
        toast.error(error?.data?.message || t("verificationFailed"));
      });
  };

  const handleResendOtp = () => {
    if (!state?.email) {
      toast.error(t("emailMissing"));
      return;
    }

    const resendOtpData = { email: state.email, type: "signup" };

    resendOtpFn(resendOtpData)
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
        console.log(res);
      })
      .catch((error) => {
        toast.error(error?.data?.message || t("failedToResendOtp"));
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
        <p className="text-center text-[32px] text-white">
          {t("checkYourEmail")}
        </p>
        <p className="mb-8">{t("emailCodeSentInstruction")}</p>
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
          className="py-2 bg-[#22A59A] w-full rounded-sm cursor-pointer"
          onClick={handleVerify}
        >
          {t("verify")}
        </button>

        <p className="mt-2 text-center">
          {t("notReceivedEmail")}
          <span
            onClick={handleResendOtp}
            className="text-[#22A59A] cursor-pointer ml-2 font-medium"
          >
            {t("resend")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;
