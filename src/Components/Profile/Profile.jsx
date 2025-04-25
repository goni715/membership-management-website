import React from "react";
import { useProfileQuery } from "@/redux/features/auth/authApi";
import Loading from "../shared/Loading";
import moment from "moment";

export const Profile = ({ setChangeRoute }) => {
  const { data: profileData, isLoading } = useProfileQuery();

  if (isLoading) {
    return <Loading />;
  }

  const formattedDateOfBirth = profileData?.dateOfBirth
    ? moment(profileData.dateOfBirth).format("DD/MM/YYYY")
    : "N/A"; 

  return (
    <div className="p-4">
      <p className="text-xl font-bold">Profile</p>
      <div className="flex justify-center flex-col items-center">
        <img src={profileData?.photoUrl} className="h-20 w-20 rounded-full" alt="" />
        <p className="mt-2 text-2xl font-semibold">{profileData?.name}</p>
        <p>{profileData?.email}</p>
      </div>
      <div className="max-w-2xl mx-auto my-10 space-y-4">
        <p className="flex justify-between">
          <span>Phone Number :</span> <span>{profileData?.phoneNumber}</span>
        </p>
        <p className="flex justify-between">
          <span>Date of Birth:</span> <span>{formattedDateOfBirth}</span>
        </p>
      </div>
      <div className="flex justify-center my-10">
        <button
          onClick={() => setChangeRoute("updateProfile")}
          className="bg-[#22A59A] px-5 py-2 rounded-sm cursor-pointer "
        >
          Update
        </button>
      </div>
    </div>
  );
};
