import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";
import { Profile } from "../../Components/Profile/Profile";
import ChnagePassword from "../../Components/ChnagePassword/ChnagePassword";
import MemberShip from "../../Components/MemberShip/MemberShip";
import Wallet from "../../Components/Wallet/Wallet";
import RefferralHistory from "../../Components/RefferralHistory/RefferralHistory";

const MyAccount = () => {
  const [changeRoute, setChangeRoute] = useState("profile");
  return (
    <div className="text-white container mx-auto">
      <p className="text-center text-4xl font-semibold pt-10">My Account</p>
      <p className="text-center mt-2">Home/My Account</p>

      {/* Profile  */}

      <div className="grid grid-cols-12 gap-10 mt-10 ">
        <div className="col-span-3 bg-[#0D0D0D] p-10">
          <p className="text-2xl font-bold pb-5">Manage Account</p>
          <div className="space-y-5">
            <p
              onClick={() => setChangeRoute("profile")}
              className={` ${
                changeRoute === "profile" && "bg-[#22A59A]"
              } w-full p-1 px-5 rounded-sm shadow-2xl flex items-center justify-between cursor-pointer`}
            >
              Profile <MdOutlineKeyboardArrowRight color="white" size={20} />
            </p>
            <p
              onClick={() => setChangeRoute("password")}
              className={` ${
                changeRoute === "password" && "bg-[#22A59A]"
              } w-full p-1 px-5 rounded-sm shadow-2xl flex items-center justify-between cursor-pointer`}
            >
              Change Password <MdOutlineKeyboardArrowRight color="white" size={20} />
            </p>
            
            <p className="text-2xl font-bold">My Dashboard</p>
            {/* My membership*/}
            <p
              onClick={() => setChangeRoute("membership")}
              className={` ${
                changeRoute === "membership" && "bg-[#22A59A]"
              } w-full p-1 px-5 rounded-sm shadow-2xl flex items-center justify-between cursor-pointer`}
            >
              My Membership <MdOutlineKeyboardArrowRight color="white" size={20} />
            </p>
            {/* My Wallet*/}
            <p
              onClick={() => setChangeRoute("wallet")}
              className={` ${
                changeRoute === "wallet" && "bg-[#22A59A]"
              } w-full p-1 px-5 rounded-sm shadow-2xl flex items-center justify-between cursor-pointer`}
            >
              Wallet <MdOutlineKeyboardArrowRight color="white" size={20} />
            </p>
            {/* My referral */}
            <p
              onClick={() => setChangeRoute("referral")}
              className={` ${
                changeRoute === "referral" && "bg-[#22A59A]"
              } w-full p-1 px-5 rounded-sm shadow-2xl flex items-center justify-between cursor-pointer`}
            >
              Referral History <MdOutlineKeyboardArrowRight color="white" size={20} />
            </p>
            <button className="mt-2 ml-5">Logout</button>
          </div>
        </div>
        <div className="col-span-9 bg-[#0D0D0D]">
          {changeRoute === "profile" && <Profile />}
          {changeRoute === "password" && <ChnagePassword />}
          {changeRoute === "membership" && <MemberShip/>}
          {changeRoute === "wallet" && <Wallet/>}
          {changeRoute === "referral" && <RefferralHistory/>}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
