import Loading from "@/Components/shared/Loading";
import { useTermsQuery } from "@/redux/features/auth/authApi";
import React from "react";
import { useTranslation } from "react-i18next";

const TermsConditions = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useTermsQuery();

  if (isLoading) {
    return <Loading />;
  }

  // If `data.content` contains raw HTML
  const content = data?.content || "";

  return (
    <div className="text-white container mx-auto">
      <p className="text-center text-4xl font-semibold pt-10">
        {t("termsConditionsTitle")}
      </p>
      <p className="text-center mt-2">{t("breadcrumbHomeTerms")}</p>

      <div className="py-10">
        {/* Display raw HTML content */}
        <div
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default TermsConditions;
