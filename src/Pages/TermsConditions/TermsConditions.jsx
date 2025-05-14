import Loading from "@/Components/shared/Loading";
import { useTermsQuery } from "@/redux/features/auth/authApi";
import React from "react";

const TermsConditions = () => {
  const { data, isLoading } = useTermsQuery();

  if (isLoading) {
    return <Loading />;
  }

  // If `data.content` contains raw HTML
  const content = data?.content || "";

  return (
    <div className="text-white container mx-auto">
      <p className="text-center text-4xl font-semibold pt-10">
        Terms & Conditions
      </p>
      <p className="text-center mt-2">Home/Terms & Conditions</p>

      <div className="py-10">
        {/* Display raw HTML content */}
        <div
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: content }} // Inject HTML content here
        />
      </div>
    </div>
  );
};

export default TermsConditions;
