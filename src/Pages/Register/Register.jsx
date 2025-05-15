import React, { useEffect } from "react";
import bg from "../../assets/images/login.png";
import { Form, Input } from "antd";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
import Loading from "@/Components/shared/Loading";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const referralCode = queryParams.get("code");

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      referralCode: "",
    },
  });

  useEffect(() => {
    if (referralCode) {
      setValue("referralCode", referralCode);
    }
  }, [referralCode, setValue]);

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
        // Remove this after OTP flow is checked
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
            {t("welcomeToAvantra")}
          </p>
          <p className="mb-8 text-center">{t("pleaseSignUpToContinue")}</p>

          <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
            <Form.Item label={<p className="text-white">{t("fullName")}</p>}>
              <Controller
                name="name"
                control={control}
                rules={{ required: t("nameIsRequired") }}
                render={({ field }) => (
                  <Input {...field} size="large" placeholder={t("typeHere")} />
                )}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </Form.Item>

            <Form.Item
              label={<p className="text-white">{t("emailAddress")}</p>}
            >
              <Controller
                name="email"
                control={control}
                rules={{
                  required: t("emailIsRequired"),
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: t("invalidEmailFormat"),
                  },
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

            <Form.Item label={<p className="text-white">{t("password")}</p>}>
              <Controller
                name="password"
                control={control}
                rules={{ required: t("passwordIsRequired") }}
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

            <Form.Item
              label={<p className="text-white">{t("confirmPassword")}</p>}
            >
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: t("confirmPasswordIsRequired"),
                  validate: (value) =>
                    value === getValues("password") || t("passwordsDoNotMatch"),
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

            <Form.Item
              label={<p className="text-white">{t("avantraReferralCode")}</p>}
            >
              <Controller
                name="referralCode"
                control={control}
                render={({ field }) => (
                  <Input {...field} size="large" placeholder={t("codeHere")} />
                )}
              />
            </Form.Item>

            <button className="bg-[#22A59A] text-white w-full rounded-md py-2 cursor-pointer">
              {t("signUp")}
            </button>
          </Form>

          <p className="text-center mt-5">
            {t("alreadyHaveAccount")}{" "}
            <Link to={"/login"} className="text-[#22A59A]">
              {t("signIn")}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
