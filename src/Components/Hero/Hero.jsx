import React, { useEffect, useState } from "react";
import img from "../../assets/images/hero.png";
import face from "../../assets/images/facebook.png";
import whats from "../../assets/images/whatsapp.png";
import instagram from "../../assets/images/instagram.png";
import telegram from "../../assets/images/telegram.png";
import messenger from "../../assets/images/messenger.png";
import twitter from "../../assets/images/twitter.png";
import { Input, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { useProfileQuery } from "@/redux/features/auth/authApi";
import { useSelector } from "react-redux";
import { currentAccessToken } from "@/redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";

const Hero = () => {
  const { data: profileData } = useProfileQuery();
  const [decodedToken, setDecodedToken] = useState(null);
  // Access the accessToken from the Redux store
  const accessToken = useSelector(currentAccessToken);

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      try {
        // Decode the token
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
        message.success("Referral code copied to clipboard!"); // Success message
      })
      .catch(() => {
        message.error("Failed to copy text!"); // Error message
      });
  };

  const handleReferring = () => {
    navigate("/login");
  };

  return (
    <div className="text-white grid grid-cols-1 md:grid-cols-2 justify-between py-20 px-2 md:px-0">
      <div>
        <p className="text-[30px] md:text-[64px]  font-bold mb-5">
          Refer & Earn Rewards
        </p>
        <p>Refer Your Friends, Earn Real Cash, and Withdraw Instantly</p>
        <p>– No Limits, No Hassle!</p>
        <div className="md:flex items-center gap-4">
          <p>Share referral code through</p>

          <div className="flex items-center gap-1 my-5">
            <img src={face} alt="" />
            <img src={whats} alt="" />
            <img src={instagram} alt="" />
            <img src={telegram} alt="" />
            <img src={messenger} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>

        {!decodedToken ? (
          <button
            onClick={handleReferring}
            className="bg-[#22A59A] px-5  text-white rounded-sm py-2 cursor-pointer max-h-10"
          >
            Start Referring
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <Input
              value={profileData?.referralCode}
              readOnly
              className="max-w-[320px] bg-[#444444] text-white"
              size="large"
              addonAfter={
                <button
                  onClick={() => handleCopy(profileData?.referralCode)}
                  className="bg-[#22A59A] text-white rounded-sm px-3 py-2 cursor-pointer"
                >
                  <CopyOutlined />
                </button>
              }
            />
            <button className="bg-[#22A59A] px-5  text-white rounded-sm py-2 cursor-pointer max-h-10">
              invite now
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
