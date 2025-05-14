import React from "react";
import logo from "../../assets/images/logo.png";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#242424] py-4">
        <div className="container mx-auto text-white   md:flex justify-between items-center">
          <div className="flex items-center  justify-center">
            <img src={logo} alt="" />
            <p className="text-xl">AVANTRA</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
            <div className="flex justify-between py-5 mx-5">
              <p className="mr-5">
                <Link to={"/terms-conditions"}>Terms & Conditions</Link>
              </p>
              <Link to={"/privacy-policy"}>Privacy Policy</Link>
            </div>
            <div className="flex justify-between mx-5 ">
              <FaFacebookF size={22} />
              <FaTwitter size={22} />
              <FaInstagramSquare size={22} />
              <FaLinkedinIn size={22} />
              <FaYoutube size={22} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#050505]">
        <p className="text-center text-white text-sm py-4">
          © 2025 Avantra All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
