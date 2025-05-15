import React, { useEffect, useState } from "react";
import img from "../../assets/images/hero.png";
import facebook from "../../assets/images/facebook.png";
import whatsapp from "../../assets/images/whatsapp.png";
import instagram from "../../assets/images/instagram.png";
import telegram from "../../assets/images/telegram.png";
import messenger from "../../assets/images/messenger.png";
import twitter from "../../assets/images/twitter.png";
import { Input } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { useProfileQuery } from "@/redux/features/auth/authApi";
import { useSelector } from "react-redux";
import { currentAccessToken } from "@/redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

const Hero = () => {
  const { t } = useTranslation();
  const { data: profileData } = useProfileQuery();
  const [decodedToken, setDecodedToken] = useState(null);
  const accessToken = useSelector(currentAccessToken);

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      try {
        const decoded = jwtDecode(accessToken);
        setDecodedToken(decoded);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, [accessToken]);

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success(t("referralCodeCopied"));
      })
      .catch(() => {
        toast.error(t("failedToCopy"));
      });
  };

  const handleReferring = () => {
    navigate("/login");
  };

  const handleShare = (platform) => {
    const referralLink = `${window.location.origin}/register?code=${profileData?.referralCode}`;
    const message = `Hey! Join me on this amazing platform and earn rewards with my referral code: ${profileData?.referralCode}`;

    switch (platform) {
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${encodeURIComponent(referralLink)}`,
          "_blank"
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            referralLink
          )}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            referralLink
          )}`,
          "_blank"
        );
        break;
      case "instagram":
        message.warning(
          "Instagram does not support sharing via URL. Please use the Instagram app."
        );
        break;
      case "telegram":
        window.open(
          `https://t.me/share/url?url=${encodeURIComponent(
            referralLink
          )}&text=${encodeURIComponent(referralLink)}`,
          "_blank"
        );
        break;
      case "messenger":
        window.open(
          `https://www.messenger.com/t/?text=${encodeURIComponent(referralLink)}`,
          "_blank"
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="text-white grid grid-cols-1 md:grid-cols-2 justify-between py-20 px-2 md:px-0">
      <div>
        <p className="text-[30px] md:text-[64px] font-bold mb-5">
          {t("referEarnRewards")}
        </p>
        <p>{t("referFriendsEarnCash")}</p>
        <p>{t("noLimitsNoHassle")}</p>
        <div className="md:flex items-center gap-4">
          <p>{t("shareReferralCodeThrough")}</p>

          <div className="flex items-center gap-1 my-5">
            <img
              src={facebook}
              alt=""
              onClick={() => handleShare("facebook")}
            />
            <img
              src={whatsapp}
              alt=""
              onClick={() => handleShare("whatsapp")}
            />
            <img
              src={instagram}
              alt=""
              onClick={() => handleShare("instagram")}
            />
            <img
              src={telegram}
              alt=""
              onClick={() => handleShare("telegram")}
            />
            <img
              src={messenger}
              alt=""
              onClick={() => handleShare("messenger")}
            />
            <img src={twitter} alt="" onClick={() => handleShare("twitter")} />
          </div>
        </div>

        {!decodedToken ? (
          <button
            onClick={handleReferring}
            className="bg-[#22A59A] px-5 text-white rounded-sm py-2 cursor-pointer max-h-10"
          >
            {t("startReferring")}
          </button>
        ) : (
          <div className="flex items-center gap-4 rounded-md">
            <Input
              value={profileData?.referralCode}
              readOnly
              className="max-w-[320px] text-white bg-white rounded-md"
              size="large"
              addonAfter={
                <button
                  onClick={() => handleCopy(profileData?.referralCode)}
                  className="text-[#22A59A] font-black rounded-sm px-3 py-2 cursor-pointer"
                >
                  <CopyOutlined size={40} />
                </button>
              }
            />
            <button
              className="bg-[#22A59A] px-5 text-white rounded-sm py-2 cursor-pointer max-h-10"
              onClick={() => handleShare("whatsapp")} // This could be modified to any preferred platform
            >
              Invite Now
            </button>
          </div>
        )}
      </div>
      <div className="mx-auto">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
