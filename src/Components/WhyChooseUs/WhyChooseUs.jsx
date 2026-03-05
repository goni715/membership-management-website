/* eslint-disable no-unused-vars */
import React from "react";
import easy from "../../assets/images/easy.png";
import Affiliate from "../../assets/images/Affiliate.png";
import tracking from "../../assets/images/tracking.png";
import reward from "../../assets/images/reward.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white mt-10 px-2 md:px-0">
      {/* Title Animation */}
      <motion.p
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-[30px] md:text-[48px] font-bold"
      >
        {t("whyChooseUs")}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mt-5"
      >
        {t("unlockOpportunitiesPart1")}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center"
      >
        {t("unlockOpportunitiesPart2")}
      </motion.p>

      {/* Cards Animation */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="md:flex justify-between items-center py-10 mt-20"
      >
        {/* Card 1 */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col justify-center items-center my-5"
        >
          <img src={easy} alt={t("easyFreeSignupAlt")} />
          <p className="text-xl font-semibold my-3">
            {t("easyFreeSignupTitle")}
          </p>
          <p>{t("easyFreeSignupLine1")}</p>
          <p>{t("easyFreeSignupLine2")}</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col justify-center items-center my-5"
        >
          <img src={Affiliate} alt={t("multiLevelEarningsAlt")} />
          <p className="text-xl font-semibold my-3">
            {t("multiLevelEarningsTitle")}
          </p>
          <p>{t("multiLevelEarningsLine1")}</p>
          <p>{t("multiLevelEarningsLine2")}</p>
          <p>{t("multiLevelEarningsLine3")}</p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col justify-center items-center my-5"
        >
          <img src={tracking} alt={t("seamlessTrackingAlt")} />
          <p className="text-xl font-semibold my-3">
            {t("seamlessTrackingTitle")}
          </p>
          <p>{t("seamlessTrackingLine1")}</p>
          <p>{t("seamlessTrackingLine2")}</p>
          <p>{t("seamlessTrackingLine3")}</p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col justify-center items-center my-5"
        >
          <img src={reward} alt={t("instantRewardsAlt")} />
          <p className="text-xl font-semibold my-3">
            {t("instantRewardsTitle")}
          </p>
          <p>{t("instantRewardsLine1")}</p>
          <p>{t("instantRewardsLine2")}</p>
          <p>{t("instantRewardsLine3")}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
