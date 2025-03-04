import React from "react";
import logo from "../../assets/images/logo.png";
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#242424] py-4">
        <div className="container mx-auto text-white flex justify-between items-center">
          <div className="flex items-center ">
            <img src={logo} alt="" />
            <p className="text-xl">AVANTRA</p>
          </div>
          <div className="flex items-center gap-4">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <FaFacebookF size={22} />
            <FaTwitter size={22} />
            <FaInstagramSquare size={22} />
            <FaLinkedinIn size={22} />
            <FaYoutube size={22} />
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
