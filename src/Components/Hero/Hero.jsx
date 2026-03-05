import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    switch (platform) {
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${encodeURIComponent(referralLink)}`,
          "_blank",
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`,
          "_blank",
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(referralLink)}`,
          "_blank",
        );
        break;
      case "instagram":
        toast.error("Instagram does not support sharing via URL. Use the app.");
        break;
      case "telegram":
        window.open(
          `https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${encodeURIComponent(referralLink)}`,
          "_blank",
        );
        break;
      case "messenger":
        window.open(
          `https://www.messenger.com/t/?text=${encodeURIComponent(referralLink)}`,
          "_blank",
        );
        break;
      default:
        break;
    }
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#1f8f87",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="text-white grid grid-cols-1 md:grid-cols-2 justify-between py-20 px-2 md:px-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <motion.p
          className="text-[30px] md:text-[64px] font-bold mb-5"
          variants={itemVariants}
        >
          {t("referEarnRewards")}
        </motion.p>
        <motion.p className="mb-2" variants={itemVariants}>
          {t("referFriendsEarnCash")}
        </motion.p>
        <motion.p className="mb-5" variants={itemVariants}>
          {t("noLimitsNoHassle")}
        </motion.p>

        <motion.div
          className="md:flex items-center gap-4"
          variants={itemVariants}
        >
          <p>{t("shareReferralCodeThrough")}</p>
          <div className="flex items-center gap-1 my-5">
            {[facebook, whatsapp, instagram, telegram, messenger, twitter].map(
              (icon, idx) => (
                <motion.img
                  key={idx}
                  src={icon}
                  alt=""
                  whileHover={{ scale: 1.2 }}
                  className="cursor-pointer"
                  onClick={() =>
                    handleShare(
                      [
                        "facebook",
                        "whatsapp",
                        "instagram",
                        "telegram",
                        "messenger",
                        "twitter",
                      ][idx],
                    )
                  }
                />
              ),
            )}
          </div>
        </motion.div>

        {!decodedToken ? (
          <motion.button
            onClick={handleReferring}
            className="bg-[#22A59A] px-5 text-white rounded-sm py-2 cursor-pointer max-h-10"
            variants={itemVariants}
            whileHover={buttonVariants.hover}
            whileTap={buttonVariants.tap}
          >
            {t("startReferring")}
          </motion.button>
        ) : (
          <motion.div
            className="flex items-center gap-4 rounded-md"
            variants={itemVariants}
          >
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
            <motion.button
              className="bg-[#22A59A] px-5 text-white rounded-sm py-2 cursor-pointer max-h-10"
              onClick={() => handleShare("whatsapp")}
              whileHover={buttonVariants.hover}
              whileTap={buttonVariants.tap}
            >
              Invite Now
            </motion.button>
          </motion.div>
        )}
      </div>

      <motion.div
        className="mx-auto"
        variants={itemVariants}
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { type: "spring", stiffness: 80, delay: 0.5 },
        }}
      >
        <img src={img} alt="hero_img" className="w-full max-w-md" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
