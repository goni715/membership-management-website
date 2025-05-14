import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router";
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

const options = [
  {
    value: "English",
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
    value: "Spanish",
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
  // Access the accessToken from the Redux store
  const accessToken = useSelector(currentAccessToken);

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

  const { data: profileData, isLoading } = useProfileQuery();

  return (
    <>
      {isLoading && <Loading />}
      <div className="bg-[#333333] text-white ">
        <div className="container mx-auto py-2 ">
          <div className="flex items-center justify-between">
            {/* Logo and company Name */}
            <Link to={"/"}>
              <div className="flex  items-center gap-2">
                <img src={logo} className="h-[50px] w-[50px]" alt="" />
                <p className="text-[24px]">AVANTRA</p>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden "
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>

            {/* Menu bars */}
            <div className="space-x-10 hidden md:flex items-center">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/videos"}>Videos</NavLink>
              <NavLink to={"/files"}>Files</NavLink>
              <NavLink to={"/contact-us"}>Contact Us</NavLink>
              <Select
                defaultValue="English"
                style={{ width: 110, marginRight: "10px" }}
                optionLabelProp="label"
                options={options}
              />

              {decodedToken?.userId ? (
                <>
                  <NavLink
                    to={"/notification"}
                    className={"bg-white p-1.5 rounded-full"}
                  >
                    <IoMdNotificationsOutline size={22} color="#22A59A" />
                  </NavLink>
                  <NavLink to={"/my-profile"}>
                    <Avatar
                      size="large"
                      icon={<UserOutlined />}
                      src={profileData?.photoUrl}
                      alt="profile image"
                    />
                  </NavLink>
                </>
              ) : (
                <NavLink to={"/login"}>
                  <button className="bg-[#22A59A] cursor-pointer px-4 py-2 rounded-sm shadow-2xl">
                    Login
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
              <button
                className="absolute top-5 right-5 text-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                <HiX size={28} />
              </button>
              {decodedToken?.userId && (
                <NavLink to={"/my-profile"} className={"mb-5"}>
                  <Avatar
                    size="large"
                    icon={<UserOutlined />}
                    src={profileData?.photoUrl}
                    alt="profile image"
                  />
                </NavLink>
              )}

              <NavLink
                to={"/"}
                className={"mb-2"}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to={"/videos"}
                className={"mb-2"}
                onClick={() => setMenuOpen(false)}
              >
                Videos
              </NavLink>
              <NavLink
                to={"/files"}
                className={"mb-2"}
                onClick={() => setMenuOpen(false)}
              >
                Files
              </NavLink>
              <NavLink
                to={"/contact-us"}
                className={"mb-2"}
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </NavLink>
              {decodedToken?.userId ? (
                <NavLink
                  to={"/notification"}
                  onClick={() => setMenuOpen(false)}
                  className={"bg-white p-1.5 rounded-full mb-2"}
                >
                  <IoMdNotificationsOutline size={22} color="#22A59A" />
                </NavLink>
              ) : (
                <NavLink to={"/login"}>
                  <button className="bg-[#22A59A] px-4 py-2 rounded-sm shadow-2xl">
                    Log in
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
