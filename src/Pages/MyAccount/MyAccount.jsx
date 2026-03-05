import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Profile } from "../../Components/Profile/Profile";
import ChnagePassword from "../../Components/ChnagePassword/ChnagePassword";
import MemberShip from "../../Components/MemberShip/MemberShip";
import Wallet from "../../Components/Wallet/Wallet";
import RefferralHistory from "../../Components/RefferralHistory/RefferralHistory";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import { useDispatch } from "react-redux";
import { removeToken } from "@/redux/features/auth/authSlice";
import { useTranslation } from "react-i18next";

const MyAccount = () => {
  const { t } = useTranslation();
  const [changeRoute, setChangeRoute] = useState("profile");
  const dispatch = useDispatch();

  return (
    <div className="text-white container mx-auto">
      <p className="text-center text-4xl font-semibold pt-10 ">
        {t("myAccountTitle")}
      </p>
      <p className="text-center mt-2">{t("breadcrumbHomeMyAccount")}</p>

      <div className="grid grid-cols-12 gap-10 mt-10 pb-10">
        <div className="col-span-8 md:col-span-3 flex flex-col justify-center items-center ml-5 md:ml-0 bg-[#0D0D0D] ">
          <p className="text-2xl font-bold pb-5">{t("manageAccount")}</p>
          <div className="space-y-5">
            <p
              onClick={() => setChangeRoute("profile")}
              className={` ${
                changeRoute === "profile" && "bg-[#22A59A]"
              } w-full p-1 px-5 rounded-sm shadow-2xl flex items-center justify-between cursor-pointer`}
            >
              {t("profile")}{" "}
              <MdOutlineKeyboardArrowRight color="white" size={20} />
            </p>
            <p
              onClick={() => setChangeRoute("password")}
              className={` ${
                changeRoute === "password" && "bg-[#22A59A]"
              } w-full p-1 px-5 rounded-sm shadow-2xl flex items-center justify-between cursor-pointer`}
            >
              {t("changePassword")}{" "}
              <MdOutlineKeyboardArrowRight color="white" size={20} />
            </p>

            <p className="text-2xl font-bold">{t("myDashboard")}</p>

            <p
              onClick={() => setChangeRoute("membership")}
              className={` ${
                changeRoute === "membership" && "bg-[#22A59A]"
              } w-full p-1 px-5 rounded-sm shadow-2xl flex items-center justify-between cursor-pointer`}
            >
              {t("myMembership")}{" "}
              <MdOutlineKeyboardArrowRight color="white" size={20} />
            </p>

            <p
              onClick={() => setChangeRoute("wallet")}
              className={` ${
                changeRoute === "wallet" && "bg-[#22A59A]"
              } w-full p-1 px-5 rounded-sm shadow-2xl flex items-center justify-between cursor-pointer`}
            >
              {t("wallet")}{" "}
              <MdOutlineKeyboardArrowRight color="white" size={20} />
            </p>

            <p
              onClick={() => setChangeRoute("referral")}
              className={` ${
                changeRoute === "referral" && "bg-[#22A59A]"
              } w-full p-1 px-5 rounded-sm shadow-2xl flex items-center justify-between cursor-pointer`}
            >
              {t("referralHistory")}{" "}
              <MdOutlineKeyboardArrowRight color="white" size={20} />
            </p>
            <button
              className="mt-2 ml-5 cursor-pointer px-4 py-2 transition duration-200 ease-in-out hover:bg-[#1a8b763a] rounded-md"
              onClick={() => dispatch(removeToken())}
            >
              {t("logout")}
            </button>
          </div>
        </div>
        <div className="col-span-8 md:col-span-9 bg-[#0D0D0D] ml-5 md:ml-0 ">
          {changeRoute === "profile" && (
            <Profile setChangeRoute={setChangeRoute} />
          )}
          {changeRoute === "password" && (
            <ChnagePassword setChangeRoute={setChangeRoute} />
          )}
          {changeRoute === "membership" && <MemberShip />}
          {changeRoute === "wallet" && <Wallet />}
          {changeRoute === "referral" && <RefferralHistory />}
          {changeRoute === "updateProfile" && <UpdateProfile />}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
