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
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-[#242424] py-4">
        <div className="container mx-auto text-white md:flex justify-between items-center">
          <div className="flex items-center justify-center">
            <img src={logo} alt={t("avantraLogoAlt")} />
            <p className="text-xl">AVANTRA</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
            <div className="flex justify-between py-5 mx-5">
              <p className="mr-5">
                <Link to={"/terms-conditions"}>{t("termsConditions")}</Link>
              </p>
              <Link to={"/privacy-policy"}>{t("privacyPolicy")}</Link>
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
          © 2025 Avantra {t("allRightsReserved")}
        </p>
      </div>
    </div>
  );
};

export default Footer;
