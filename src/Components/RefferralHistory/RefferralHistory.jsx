import React from "react";
import { useGetReferralHistoryQuery } from "@/redux/features/auth/dashboardApi";
import Loading from "../shared/Loading";
import moment from "moment";

const RefferralHistory = () => {
  const { data, isLoading } = useGetReferralHistoryQuery();

  if (isLoading) {
    return <Loading />;
  }

  const referrals = data || [];

  return (
    <div className="p-4">
      <p className="text-xl font-semibold mb-8 text-white">Referral History</p>

      {referrals.length > 0 ? (
        referrals.map((user, index) => (
          <div
            key={index}
            className="border-b border-[#333333] pb-4 mb-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={user.photoUrl || "https://ui-avatars.com/api/"}
                alt={user.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-white font-medium">{user.name}</p>
                <p className="text-sm text-gray-400">
                  {moment(user.createdAt).format("MMM DD, YYYY • hh:mm A")}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white">${user.commission.toFixed(2)}</p>
              <p
                className={`text-sm ${
                  user.active ? "text-green-500" : "text-red-500"
                }`}
              >
                Status: {user.active ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="text-gray-400 text-center py-10">
          No referral history found.
        </div>
      )}
    </div>
  );
};

export default RefferralHistory;
