import React from "react";
import { useTranslation } from "react-i18next";

const StepEarn = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white py-20 px-2 ms:px-0">
      <p className="text-center text-[30px] md:text-[48px] font-bold pb-10">
        {t("threeStepsToEarn")}
      </p>
      <div className="mt-10 md:flex justify-between items-center">
        <div className="bg-[#0D0D0D] rounded-md shadow-2xl p-10 relative">
          <p className="bg-[#1479FD] p-5 rounded-full text-4xl font-extrabold inline-block absolute -top-8">
            01
          </p>
          <p className="text-xl font-bold mt-10">{t("step1Title")}</p>
          <p>{t("step1Line1")}</p>
          <p>{t("step1Line2")}</p>
          <p>{t("step1Line3")}</p>
        </div>
        <div className="bg-[#0D0D0D] rounded-md shadow-2xl p-10 relative">
          <p className="bg-[#1479FD] p-5 rounded-full text-4xl font-extrabold inline-block absolute -top-8">
            02
          </p>
          <p className="text-xl font-bold mt-10">{t("step2Title")}</p>
          <p>{t("step2Line1")}</p>
          <p>{t("step2Line2")}</p>
          <p>{t("step2Line3")}</p>
        </div>
        <div className="bg-[#0D0D0D] rounded-md shadow-2xl p-10 relative">
          <p className="bg-[#1479FD] p-5 rounded-full text-4xl font-extrabold inline-block absolute -top-8">
            03
          </p>
          <p className="text-xl font-bold mt-10">{t("step3Title")}</p>
          <p>{t("step3Line1")}</p>
          <p>{t("step3Line2")}</p>
          <p>{t("step3Line3")}</p>
        </div>
      </div>
    </div>
  );
};

export default StepEarn;
