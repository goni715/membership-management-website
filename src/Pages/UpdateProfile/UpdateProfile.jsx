import { Avatar, Form, Input, Upload, DatePicker } from "antd";
import React, { useState, useEffect } from "react";
import { CameraOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import {
  useProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/features/auth/authApi";
import Loading from "@/Components/shared/Loading";
import { useForm, Controller } from "react-hook-form";
import moment from "moment";

const UpdateProfile = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  // Get profile data from the API
  const { data: profileData, isLoading } = useProfileQuery();

  // React Hook Form initialization
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Fetch profile data when available
  useEffect(() => {
    if (profileData) {
      console.log(profileData);
      setValue("name", profileData.name);
      setValue("email", profileData.email);
      setValue("phoneNumber", profileData.phoneNumber);
      // setValue("dateOfBirth", profileData?.dateOfBirth);
      const formattedDateOfBirth = profileData?.dateOfBirth
        ? moment(profileData.dateOfBirth)
        : null;

      setValue("dateOfBirth", formattedDateOfBirth);
    }
  }, [profileData, setValue]);

  // Handle image change
  const handleImageChange = (info) => {
    if (info.file.status === "done" || info.file.status === "uploading") {
      const reader = new FileReader();
      reader.onload = () => setImageUrl(reader.result);
      reader.readAsDataURL(info.file.originFileObj);
      setImageFile(info.file.originFileObj); // Set image file for upload
    }
  };

  // Before image upload validation
  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      toast.error("You can only upload image files!");
    }
    return isImage;
  };

  const [updateProfileFN] = useUpdateProfileMutation();

  // Handle form submission
  const onSubmit = (data) => {
    // Convert date from DatePicker (moment object) to YYYY-MM-DD for backend
    const formattedDate = data.dateOfBirth
      ? data.dateOfBirth.format("DD/MM/YYYY") // Convert to correct format
      : ""; // Format date if available

    // Create a FormData object
    const formData = new FormData();

    // Append form data
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phoneNumber);
    formData.append("date_of_birth", formattedDate); // Use formatted date for submission

    // Append image file if available
    if (imageFile) {
      formData.append("photo", imageFile);
    }

    // Call the API mutation
    updateProfileFN(formData)
      .unwrap()
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        toast.error(error?.data?.message);
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <p className="p-5">Edit Profile</p>
      <div className="flex justify-center mt-10">
        <div className="h-32 w-32 rounded-full flex justify-center items-center">
          <Upload
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleImageChange}
          >
            <Avatar
              size={128}
              src={imageUrl || profileData?.photoUrl}
              className="cursor-pointer"
              icon={<CameraOutlined />}
            />
          </Upload>
        </div>
      </div>

      {/* Form with react-hook-form */}
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <div className="flex gap-8 px-20 mt-10 ">
          {/* Full Name */}
          <Form.Item
            label={<p className="text-white">Full Name</p>}
            className="w-full"
          >
            <Controller
              name="name"
              control={control}
              defaultValue={profileData?.name}
              rules={{ required: "Full Name is required" }}
              render={({ field }) => (
                <Input {...field} placeholder="Enter Full Name" size="large" />
              )}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </Form.Item>

          {/* Email Address */}
          <Form.Item
            label={<p className="text-white">Email</p>}
            className="w-full"
          >
            <Controller
              name="email"
              control={control}
              defaultValue={profileData?.email}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <Input {...field} placeholder="Enter Email" size="large" />
              )}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </Form.Item>
        </div>

        <div className="flex gap-8 px-20">
          {/* Phone Number */}
          <Form.Item
            label={<p className="text-white">Phone Number</p>}
            className="w-full"
          >
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue={profileData?.phoneNumber}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter Phone Number"
                  size="large"
                />
              )}
            />
          </Form.Item>

          {/* Date of Birth */}
          <Form.Item
            label={<p className="text-white">Date of Birth</p>}
            className="w-full"
          >
            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field }) => (
                <DatePicker
                  className="w-full"
                  {...field}
                  format="DD/MM/YYYY" // Format to show as DD/MM/YYYY
                  placeholder="Select Date of Birth"
                  size="large"
                  onChange={(date) => field.onChange(date)} // Handle change
                />
              )}
            />
            {errors.dateOfBirth && (
              <p className="text-red-500">{errors.dateOfBirth.message}</p>
            )}
          </Form.Item>
        </div>

        <div className="flex justify-center my-10">
          <button
            type="submit"
            className="bg-[#22A59A] px-5 py-2 rounded-sm cursor-pointer text-white"
          >
            Save Changes
          </button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateProfile;
