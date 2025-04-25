import { useForm, Controller } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const ContactUs = () => {
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
        toast.success("Message sent successfully");
        reset();
        navigate("/");
      } else {
        toast.error("Failed to send message");
      }
    } catch {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="text-white container mx-auto">
      <p className="text-center text-4xl font-semibold pt-10">Contact Us</p>
      <p className="text-center mt-2">Home / Contact Us</p>
      <div className="md:flex justify-between gap-36 mt-20 py-20">
        {/* Contact Details */}
        <div className="w-full">
          <p className="text-2xl font-bold">Contact Details</p>
          <p className="mt-5">
            We’re here to help! If you have any questions, concerns, or feedback
            regarding our Refer & Earn Program, feel free to reach out to us.
          </p>
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
              <label className="text-white text-lg">Full Name</label>
              <Controller
                name="fullName"
                control={control}
                rules={{ required: "Full name is required" }}
                render={({ field }) => (
                  <Input {...field} size="large" placeholder="Type Name" />
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
              <label className="text-white text-lg">Email</label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Please enter a valid email address",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    type="email"
                    placeholder="Type Email"
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
              <label className="text-white text-lg">Phone Number</label>
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    type="tel"
                    placeholder="Phone Number..."
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
              <label className="text-white text-lg">Message</label>
              <Controller
                name="message"
                control={control}
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <TextArea {...field} size="large" placeholder="Message..." />
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
