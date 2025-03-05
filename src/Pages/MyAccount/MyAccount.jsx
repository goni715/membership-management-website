import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";
import { Profile } from "../../Components/Profile/Profile";
import ChnagePassword from "../../Components/ChnagePassword/ChnagePassword";

const MyAccount = () => {
    const [changeRoute, setChangeRoute] = useState("profile")
  return (
    <div className="text-white container mx-auto">
      <p className="text-center text-4xl font-semibold pt-10">Contact Us</p>
      <p className="text-center mt-2">Home/Contact Us</p>

      {/* Profile  */}

      <div className="grid grid-cols-12 gap-10 mt-10">
        <div className="col-span-3 bg-[#0D0D0D] p-10">
          <p className="text-2xl font-bold pb-5">Manage Account</p>
          <div className="space-y-5">
            <p onClick={()=> setChangeRoute('profile')} className={` ${changeRoute === "profile" && "bg-[#22A59A]"} w-full p-1 px-5 rounded-sm shadow-2xl flex items-center justify-between cursor-pointer`}>
              Profile <MdOutlineKeyboardArrowRight color="white" size={20} />
            </p>
            <p onClick={()=> setChangeRoute('password')} className={` ${changeRoute === "password" && "bg-[#22A59A]"} w-full p-1 px-5 rounded-sm shadow-2xl flex items-center justify-between cursor-pointer`}>
              Change Password{" "}
              <MdOutlineKeyboardArrowRight color="white" size={2
                
              } />
            </p>
          </div>
        </div>
        <div className="col-span-9 bg-[#0D0D0D]">
            {
                changeRoute === "profile" && <Profile />
            }
            {
                changeRoute === "password" && <ChnagePassword/>
            }
          
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
