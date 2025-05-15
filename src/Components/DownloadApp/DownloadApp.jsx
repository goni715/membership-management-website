import React from "react";
import mobile from "../../assets/images/mobile.png";
import qr from "../../assets/images/qr.png";
import google from "../../assets/images/google.png";
import app from "../../assets/images/app.png";
import { useTranslation } from "react-i18next";

const DownloadApp = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between text-white px-2 md:px-0">
      <div className="w-full md:flex flex-col justify-center items-center">
        <div>
          <p className="text-[40px] md:text-[60px] font-bold text-center">
            {t("download")}
          </p>
          <p className="text-[40px] text-center font-bold">{t("ourApp")}</p>
          <p className="text-center mt-2">{t("tipYourFavoritePlayers1")}</p>
          <p className="text-center">{t("tipYourFavoritePlayers2")}</p>
          <p className="text-center">{t("tipYourFavoritePlayers3")}</p>
          <div className="md:flex items-center gap-5 mt-10">
            <div className="flex justify-center mb-5">
              <img src={qr} alt={t("qrCodeAlt")} />
            </div>
            <div className="space-y-3 flex flex-col justify-center gap-5 px-10 pb-10">
              <img src={google} alt={t("googlePlayAlt")} />
              <img src={app} alt={t("appStoreAlt")} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full hidden md:block">
        <img src={mobile} alt={t("mobileAppAlt")} />
      </div>
    </div>
  );
};

export default DownloadApp;
