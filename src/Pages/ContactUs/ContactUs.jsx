import { useForm, Controller } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ADDRESS, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success(t("messageSentSuccess"));
        reset();
        navigate("/");
      } else {
        toast.error(t("failedToSendMessage"));
      }
    } catch {
      toast.error(t("somethingWentWrong"));
    }
  };

  return (
    <div className="text-white container mx-auto">
      <p className="text-center text-4xl font-semibold pt-10">
        {t("contactUs")}
      </p>
      <p className="text-center mt-2">{t("homeContactUs")}</p>
      <div className="md:flex justify-between gap-36 mt-20 py-20">
        {/* Contact Details */}
        <div className="w-full">
          <p className="text-2xl font-bold">{t("contactDetails")}</p>
          <p className="mt-5">{t("contactDetailsDescription")}</p>
          <p className="flex items-center gap-2 mt-5">
            <FaPhoneAlt color="#22A59A" /> 839949950252
          </p>
          <p className="flex items-center gap-2 mt-2">
            <IoMdMail color="#22A59A" /> infocompany@gmail.com
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaLocationDot color="#22A59A" /> 123 Main St, Springfield, IL
            62701, USA
          </p>
        </div>

        {/* Contact Form */}
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <div className="mb-4">
              <label className="text-white text-lg">{t("fullName")}</label>
              <Controller
                name="fullName"
                control={control}
                rules={{ required: t("fullNameRequired") }}
                render={({ field }) => (
                  <Input {...field} size="large" placeholder={t("typeName")} />
                )}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="text-white text-lg">{t("email")}</label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: t("emailRequired"),
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: t("emailValid"),
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    type="email"
                    placeholder={t("typeEmail")}
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="text-white text-lg">{t("phoneNumber")}</label>
              <Controller
                name="phone"
                control={control}
                rules={{ required: t("phoneRequired") }}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    type="tel"
                    placeholder={t("phonePlaceholder")}
                  />
                )}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="text-white text-lg">{t("message")}</label>
              <Controller
                name="message"
                control={control}
                rules={{ required: t("messageRequired") }}
                render={({ field }) => (
                  <TextArea
                    {...field}
                    size="large"
                    placeholder={t("messagePlaceholder")}
                  />
                )}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-[#22A59A] w-full text-white rounded-sm py-2 text-xl cursor-pointer"
            >
              {t("submit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
