import {
  useMakePaymentMutation,
  usePaymentHistoryQuery,
} from "@/redux/features/auth/dashboardApi";
import React from "react";
import Loading from "../shared/Loading";
import moment from "moment";
import { useSelector } from "react-redux";
import { currentAccessToken } from "@/redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const MemberShip = () => {
  const { t } = useTranslation();

  // Fetch payment history data
  const { data, isLoading } = usePaymentHistoryQuery();
  const assessToken = useSelector(currentAccessToken);

  const [paymentFN] = useMakePaymentMutation();

  if (isLoading) {
    return <Loading />;
  }

  const decoded = jwtDecode(assessToken);

  // Calculate the last payment date and next expiration date
  const lastPayment = data && data.length > 0 ? data[0] : null;
  const lastPaymentDate = lastPayment
    ? moment(lastPayment.createdAt).format("DD MMM, YYYY")
    : t("notAvailable");
  const expirationDate = lastPayment
    ? moment(lastPayment.createdAt).add(1, "months").format("DD MMM, YYYY")
    : t("notAvailable");

  const handlePayment = () => {
    paymentFN(decoded?.userId)
      .unwrap()
      .then((res) => {
        if (res?.url) {
          window.location.href = res?.url;
        } else {
          toast.error(t("somethingWentWrong"));
        }
      })
      .catch((err) => {
        toast.error(
          err?.data?.message || t("somethingWentWrong")
        );
      });
  };

  return (
    <div className="p-4 mb-10">
      <p className="text-xl font-bold">{t("myMembershipTitle")}</p>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">
          ${lastPayment ? lastPayment.amount : "10.00"}
        </h1>
        <p className="text-xs">{t("perMonth")}</p>
        <p className="mt-5 mb-1 text-sm">
          {t("lastDateOfPayment")}: {lastPaymentDate}
        </p>
        <p className="text-sm">
          {t("subscriptionExpiresOn")} {expirationDate}
        </p>
        <button
          onClick={handlePayment}
          className="bg-[#22A59A] mt-8 px-4 py-2 rounded-sm cursor-pointer hover:brightness-90"
        >
          {t("payNow")}
        </button>
        <p className="mt-8">{t("paymentHistory")}</p>
      </div>

      {/* Payment History */}
      <div className="mt-10">
        {data && data.length > 0 ? (
          data.map((payment, index) => (
            <div
              key={index}
              className="flex justify-between items-center mt-10 mx-10 pb-2 border-b border-[#333333]"
            >
              <div>
                <p className="text-sm">
                  {t("transactionId")} # {payment.paymentId.slice(30)}
                </p>
                <p className="text-sm">
                  {moment(payment.createdAt).format("DD MMM, YYYY • hh:mm A")}
                </p>
              </div>
              <div>
                <p className="font-semibold">${payment.amount}</p>
                <p
                  className={`text-xs ${
                    payment.paymentStatus === "paid"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {t("status")}:{" "}
                  {t(payment.paymentStatus === "paid" ? "paid" : "unpaid")}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-5">
            {t("noPaymentHistory")}
          </p>
        )}
      </div>
    </div>
  );
};

export default MemberShip;
