import React, { useState } from "react";
import img from "../../assets/images/money.png";
import {
  useGetBalanceQuery,
  useGetWithdrawHistoryQuery,
  useWithdrawMutation,
} from "@/redux/features/auth/dashboardApi";
import Loading from "../shared/Loading";
import moment from "moment";
import { Modal, InputNumber } from "antd";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Wallet = () => {
  const { t } = useTranslation();

  const {
    data,
    isLoading,
    refetch: withdrawRefetch,
  } = useGetWithdrawHistoryQuery();
  const {
    data: amountResponse,
    isLoading: balanceLoading,
    refetch: balanceRefetch,
  } = useGetBalanceQuery();
  const [withdrawFN, { isLoading: withdrawLoading }] = useWithdrawMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState(null);

  const withdraws = data?.withdraw_history || [];
  const balance = amountResponse?.balance || 0;

  if (isLoading || balanceLoading) {
    return <Loading />;
  }

  const handleWithdrawClick = () => {
    setWithdrawAmount(null);
    setIsModalOpen(true);
  };

  const handleModalOk = async () => {
    if (!withdrawAmount || withdrawAmount < 100) {
      return toast.error(t("minimumWithdrawalError"));
    }

    if (withdrawAmount > balance) {
      return toast.error(t("insufficientBalanceError"));
    }

    try {
      await withdrawFN(withdrawAmount).unwrap();
      toast.success(t("withdrawalRequestSubmitted"));
      setIsModalOpen(false);
      balanceRefetch();
      withdrawRefetch();
    } catch {
      toast.error(t("somethingWentWrong"));
    }
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 mb-10 text-white">
      <p className="text-xl font-bold mb-6">{t("walletTitle")}</p>

      {/* Wallet Info */}
      <div className="flex flex-col justify-center items-center bg-[#1f1f1f] p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2">
          <img src={img} alt={t("walletIconAlt")} className="w-8 h-8" />
          <p>{t("totalBalance")}:</p>
          <h1 className="text-xl font-semibold text-green-400">${balance}</h1>
        </div>

        <button
          onClick={handleWithdrawClick}
          className="bg-[#22A59A] mt-5 px-6 py-2 rounded-sm hover:bg-[#1f7f79] transition cursor-pointer"
        >
          {t("withdrawNow")}
        </button>

        <p className="text-xs mt-2 text-gray-400">
          *{t("minimumWithdrawalNotice")}
        </p>

        <p className="mt-10 text-lg font-semibold">{t("withdrawHistory")}</p>
      </div>

      {/* Withdraw History */}
      <div className="mt-6">
        {withdraws.length > 0 ? (
          withdraws.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-4 py-4 border-b border-[#333333]"
            >
              <div>
                <p className="text-sm text-white font-medium">
                  {t("transactionId")} #{item.transactionId}
                </p>
                <p className="text-sm text-gray-400">
                  {moment(item.createdAt).format("DD MMM, YYYY • hh:mm A")}
                </p>
              </div>
              <div className="text-right">
                <p className="text-white font-semibold">${item.amount}</p>
                <p
                  className={`text-xs ${
                    item.status === "completed"
                      ? "text-green-500"
                      : item.status === "pending"
                      ? "text-yellow-400"
                      : "text-red-500"
                  }`}
                >
                  {t("status")}:{" "}
                  {t(
                    item.status === "completed"
                      ? "statusCompleted"
                      : item.status === "pending"
                      ? "statusPending"
                      : "statusFailed"
                  )}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-10">
            {t("noWithdrawHistory")}
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal
        title={t("enterWithdrawalAmount")}
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText={t("submit")}
        confirmLoading={withdrawLoading}
      >
        <p>
          {t("minimumAmountNotice", { min: 100, max: balance })}
        </p>
        <InputNumber
          size="large"
          className="w-full mt-5"
          max={balance}
          placeholder={t("enterAmountPlaceholder")}
          value={withdrawAmount}
          onChange={(value) => setWithdrawAmount(value)}
        />
      </Modal>
    </div>
  );
};

export default Wallet;
