import React from "react";

const StepEarn = () => {
  return (
    <div className=" text-white py-20 px-2 ms:px-0">
      <p className="text-center text-[30px] md:text-[48px]  font-bold pb-10">3 Step to Earn</p>
      <div className="mt-10 md:flex justify-between items-center space-y-20">
        <div className="bg-[#0D0D0D] rounded-md shadow-2xl p-10 relative">
            <p className="bg-[#1479FD] p-5 rounded-full text-4xl font-extrabold inline-block absolute -top-8">01</p>
            <p className="text-xl font-bold mt-10">Refer Friends</p>
            <p>Share your unique referral code </p>
            <p>with friends via text, email, or social </p>
            <p>media.</p>
        </div>
        <div className="bg-[#0D0D0D] rounded-md shadow-2xl p-10 relative">
            <p className="bg-[#1479FD] p-5 rounded-full text-4xl font-extrabold inline-block absolute -top-8">02</p>
            <p className="text-xl font-bold mt-10">Referee Enrolls</p>
            <p>The referee signs up using your </p>
            <p>unique referral code during </p>
            <p>registration.</p>
        </div>
        <div className="bg-[#0D0D0D] rounded-md shadow-2xl p-10 relative">
            <p className="bg-[#1479FD] p-5 rounded-full text-4xl font-extrabold inline-block absolute -top-8">03</p>
            <p className="text-xl font-bold mt-10">Earn Rewards</p>
            <p>Earn commissions from multiple </p>
            <p>referral levels as your network </p>
            <p>expands!</p>
        </div>
        
      </div>
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  );
};

export default StepEarn;
