import React from "react";
import easy from "../../assets/images/easy.png";
import Affiliate from "../../assets/images/Affiliate.png";
import tracking from "../../assets/images/tracking.png";
import reward from "../../assets/images/reward.png";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white mt-10 px-2 md:px-0">
      <p className="text-center text-[30px] md:text-[48px] font-bold">
        {t("whyChooseUs")}
      </p>
      <p className="text-center mt-5">{t("unlockOpportunitiesPart1")}</p>
      <p className="text-center">{t("unlockOpportunitiesPart2")}</p>

      <div className="md:flex justify-between items-center py-10 mt-20">
        <div className="flex flex-col justify-center items-center my-5">
          <img src={easy} alt={t("easyFreeSignupAlt")} />
          <p className="text-xl font-semibold my-3">
            {t("easyFreeSignupTitle")}
          </p>
          <p>{t("easyFreeSignupLine1")}</p>
          <p>{t("easyFreeSignupLine2")}</p>
        </div>
        <div className="flex flex-col justify-center items-center my-5">
          <img src={Affiliate} alt={t("multiLevelEarningsAlt")} />
          <p className="text-xl font-semibold my-3">
            {t("multiLevelEarningsTitle")}
          </p>
          <p>{t("multiLevelEarningsLine1")}</p>
          <p>{t("multiLevelEarningsLine2")}</p>
          <p>{t("multiLevelEarningsLine3")}</p>
        </div>
        <div className="flex flex-col justify-center items-center my-5">
          <img src={tracking} alt={t("seamlessTrackingAlt")} />
          <p className="text-xl font-semibold my-3">
            {t("seamlessTrackingTitle")}
          </p>
          <p>{t("seamlessTrackingLine1")}</p>
          <p>{t("seamlessTrackingLine2")}</p>
          <p>{t("seamlessTrackingLine3")}</p>
        </div>
        <div className="flex flex-col justify-center items-center my-5">
          <img src={reward} alt={t("instantRewardsAlt")} />
          <p className="text-xl font-semibold my-3">
            {t("instantRewardsTitle")}
          </p>
          <p>{t("instantRewardsLine1")}</p>
          <p>{t("instantRewardsLine2")}</p>
          <p>{t("instantRewardsLine3")}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
