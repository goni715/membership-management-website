import { Avatar, Form, Input, Upload } from "antd";
import React, { useState } from "react";
import { CameraOutlined } from "@ant-design/icons";
import profile from "../../assets/images/profile1.png";
const UpdateProfile = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = (info) => {
    if (info.file.status === "done" || info.file.status === "uploading") {
      const reader = new FileReader();
      reader.onload = () => setImageUrl(reader.result);
      reader.readAsDataURL(info.file.originFileObj);
    }
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }
    return isImage;
  };
  return (
   <div>
    <p className="p-5">Edit Profile</p>
     <div className="flex justify-center mt-10">
      <div className="h-32 w-32 rounded-full  flex justify-center items-center ">
        <Upload
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleImageChange}
        >
          <Avatar
            size={128}
            src={imageUrl ? imageUrl : profile}
            className="cursor-pointer"
            icon={<CameraOutlined />}
          />
        </Upload>
      </div>
     
    </div>

    <Form layout="vertical">
        <div className="flex gap-8 px-20 mt-10 ">
          <Form.Item label={<p className="text-white">Full Name</p>} className="w-full">
            <Input placeholder="Robert smith"  />
          </Form.Item>
          <Form.Item label={<p className="text-white">Email</p>} className="w-full">
            <Input placeholder="Robert smith" />
          </Form.Item>
        </div>
        <div className="flex gap-8 px-20  ">
          <Form.Item label={<p className="text-white">Phone Number</p>} className="w-full">
            <Input placeholder="Robert smith"  />
          </Form.Item>
          <Form.Item label={<p className="text-white">Date of Birth</p>} className="w-full">
            <Input placeholder="Robert smith" />
          </Form.Item>
        </div>
        <div className='flex justify-center my-10'>
        <button  className='bg-[#22A59A] px-5 py-2 rounded-sm cursor-pointer text-white'>Save Change</button>
        </div>
      </Form>
   </div>
  );
};

export default UpdateProfile;
