/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
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
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const options = [
  {
    value: "en",
    label: (
      <div className="flex gap-1 items-center">
        <img className="h-5 w-5" src={english} alt="English" />
        <span>English</span>
      </div>
    ),
  },
  {
    value: "es",
    label: (
      <div className="flex gap-1 items-center">
        <img className="h-5 w-5" src={spanish} alt="Spanish" />
        <span>Spanish</span>
      </div>
    ),
  },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [decodedToken, setDecodedToken] = useState(null);

  const accessToken = useSelector(currentAccessToken);
  const { data: profileData, isLoading } = useProfileQuery();

  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (accessToken) {
      try {
        const decoded = jwtDecode(accessToken);
        setDecodedToken(decoded);
      } catch (error) {
        console.error("Token decode error:", error);
      }
    }
  }, [accessToken]);

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <>
      {isLoading && <Loading />}

      {/* Navbar */}
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-50 bg-black/80 backdrop-blur-md py-4"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between bg-[#111] border border-gray-700 rounded-full px-6 py-3">
              {/* Logo */}
              <Link to="/">
                <div className="flex items-center gap-2">
                  <img src={logo} className="h-[40px]" alt="logo" />
                  <p className="text-white text-xl font-semibold">AVANTRA</p>
                </div>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8 bg-[#1a1a1a] px-8 py-2 rounded-full text-white text-sm">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <NavLink to="/">{t("home")}</NavLink>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }}>
                  <NavLink to="/videos">{t("videos")}</NavLink>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }}>
                  <NavLink to="/files">{t("files")}</NavLink>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }}>
                  <NavLink to="/contact-us">{t("contactUs")}</NavLink>
                </motion.div>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-4">
                {/* Language */}
                <div className="hidden md:block">
                  <Select
                    defaultValue="en"
                    style={{ width: 110 }}
                    optionLabelProp="label"
                    options={options}
                    onChange={handleLanguageChange}
                  />
                </div>

                {decodedToken?.userId ? (
                  <>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <NavLink
                        to="/notification"
                        className="bg-white p-2 rounded-full hidden md:block"
                      >
                        <IoMdNotificationsOutline size={20} color="#22A59A" />
                      </NavLink>
                    </motion.div>

                    <NavLink to="/my-profile" className="hidden md:block">
                      <Avatar
                        size="large"
                        icon={<UserOutlined />}
                        src={profileData?.photoUrl}
                      />
                    </NavLink>
                  </>
                ) : (
                  <NavLink to="/login" className="hidden md:block">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 py-2 rounded-full text-white"
                    >
                      {t("login")}
                    </motion.button>
                  </NavLink>
                )}

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden text-white"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-black border-t border-gray-700 mt-3"
              >
                <div className="flex flex-col items-center gap-5 py-6 text-white">
                  <NavLink to="/" onClick={() => setMenuOpen(false)}>
                    {t("home")}
                  </NavLink>

                  <NavLink to="/videos" onClick={() => setMenuOpen(false)}>
                    {t("videos")}
                  </NavLink>

                  <NavLink to="/files" onClick={() => setMenuOpen(false)}>
                    {t("files")}
                  </NavLink>

                  <NavLink to="/contact-us" onClick={() => setMenuOpen(false)}>
                    {t("contactUs")}
                  </NavLink>

                  <Select
                    defaultValue="en"
                    style={{ width: 150 }}
                    optionLabelProp="label"
                    options={options}
                    onChange={handleLanguageChange}
                  />

                  {decodedToken?.userId ? (
                    <NavLink
                      to="/notification"
                      onClick={() => setMenuOpen(false)}
                      className="bg-white p-2 rounded-full"
                    >
                      <IoMdNotificationsOutline size={22} color="#22A59A" />
                    </NavLink>
                  ) : (
                    <NavLink to="/login">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#22A59A] px-6 py-2 rounded-full"
                      >
                        {t("login")}
                      </motion.button>
                    </NavLink>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
    </>
  );
};

export default NavBar;
