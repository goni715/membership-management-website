import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";  // Changed from 'react-router' to 'react-router-dom'
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import { jwtDecode } from "jwt-decode";
import { currentAccessToken } from "@/redux/features/auth/authSlice";
import { useProfileQuery } from "@/redux/features/auth/authApi";
import { useSelector } from "react-redux";
import Loading from "../shared/Loading";
import { Avatar, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import english from "@/assets/images/uk-flag.png";
import spanish from "@/assets/images/spain.png";
import { useTranslation } from "react-i18next";  // Import useTranslation hook from react-i18next

// Language options for the dropdown
const options = [
  {
    value: "en",  // English language code
    label: (
      <div className="flex gap-1 items-center">
        <img
          className="h-5 w-5"
          src={english}
          height={20}
          width={20}
          alt="English"
        />
        <span>English</span>
      </div>
    ),
  },
  {
    value: "es",  // Spanish language code
    label: (
      <div className="flex gap-1 items-center">
        <img
          className="h-5 w-5"
          src={spanish}
          height={20}
          width={20}
          alt="Spanish"
        />
        <span>Spanish</span>
      </div>
    ),
  },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [decodedToken, setDecodedToken] = useState(null);
  const accessToken = useSelector(currentAccessToken);

  const { i18n, t } = useTranslation();  // Get the translation function (t) and i18n instance

  const { data: profileData, isLoading } = useProfileQuery();

  // Decode token and get user information
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

  // Handle language change from dropdown
  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value); // Change the language using i18next
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="bg-[#333333] text-white">
        <div className="container mx-auto py-2">
          <div className="flex items-center justify-between">
            {/* Logo and company Name */}
            <Link to={"/"}>
              <div className="flex items-center gap-2">
                <img src={logo} className="h-[50px] w-[50px]" alt="Logo" />
                <p className="text-[24px]">AVANTRA</p>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>

            {/* Menu bars */}
            <div className="space-x-10 hidden md:flex items-center">
              <NavLink to={"/"}>{t("home")}</NavLink>
              <NavLink to={"/videos"}>{t("videos")}</NavLink>
              <NavLink to={"/files"}>{t("files")}</NavLink>
              <NavLink to={"/contact-us"}>{t("contactUs")}</NavLink>
              <Select
                defaultValue="en" // Set default value to English
                style={{ width: 110, marginRight: "10px" }}
                optionLabelProp="label"
                options={options}
                onChange={handleLanguageChange} // On language change, trigger i18n change
              />

              {decodedToken?.userId ? (
                <>
                  <NavLink to={"/notification"} className={"bg-white p-1.5 rounded-full"}>
                    <IoMdNotificationsOutline size={22} color="#22A59A" />
                  </NavLink>
                  <NavLink to={"/my-profile"}>
                    <Avatar
                      size="large"
                      icon={<UserOutlined />}
                      src={profileData?.photoUrl}
                      alt="Profile image"
                    />
                  </NavLink>
                </>
              ) : (
                <NavLink to={"/login"}>
                  <button className="bg-[#22A59A] cursor-pointer px-4 py-2 rounded-sm shadow-2xl">
                    {t("login")}
                  </button>
                </NavLink>
              )}
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden fixed top-0 left-0 w-full h-full bg-black z-50 flex flex-col items-center justify-center transform ${
                menuOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300`}
            >
              <button className="absolute top-5 right-5 text-gray-800" onClick={() => setMenuOpen(false)}>
                <HiX size={28} />
              </button>
              {decodedToken?.userId && (
                <NavLink to={"/my-profile"} className={"mb-5"}>
                  <Avatar
                    size="large"
                    icon={<UserOutlined />}
                    src={profileData?.photoUrl}
                    alt="Profile image"
                  />
                </NavLink>
              )}

              <NavLink to={"/"} className={"mb-2"} onClick={() => setMenuOpen(false)}>
                {t("home")}
              </NavLink>
              <NavLink to={"/videos"} className={"mb-2"} onClick={() => setMenuOpen(false)}>
                {t("videos")}
              </NavLink>
              <NavLink to={"/files"} className={"mb-2"} onClick={() => setMenuOpen(false)}>
                {t("files")}
              </NavLink>
              <NavLink to={"/contact-us"} className={"mb-2"} onClick={() => setMenuOpen(false)}>
                {t("contactUs")}
              </NavLink>
              {decodedToken?.userId ? (
                <NavLink to={"/notification"} onClick={() => setMenuOpen(false)} className={"bg-white p-1.5 rounded-full mb-2"}>
                  <IoMdNotificationsOutline size={22} color="#22A59A" />
                </NavLink>
              ) : (
                <NavLink to={"/login"}>
                  <button className="bg-[#22A59A] px-4 py-2 rounded-sm shadow-2xl">
                    {t("login")}
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
