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

const Wallet = () => {
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
      return toast.error("Minimum withdrawal amount is $100");
    }

    if (withdrawAmount > balance) {
      return toast.error("You don't have enough balance for this withdrawal.");
    }

    try {
      await withdrawFN(withdrawAmount).unwrap();
      toast.success("Withdrawal request submitted!");
      setIsModalOpen(false);
      balanceRefetch();
      withdrawRefetch();
    } catch {
      toast.error("Something went wrong!");
    }
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 mb-10 text-white">
      <p className="text-xl font-bold mb-6">Wallet</p>

      {/* Wallet Info */}
      <div className="flex flex-col justify-center items-center bg-[#1f1f1f] p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2">
          <img src={img} alt="wallet icon" className="w-8 h-8" />
          <p>Total Balance:</p>
          <h1 className="text-xl font-semibold text-green-400">${balance}</h1>
        </div>

        <button
          onClick={handleWithdrawClick}
          className="bg-[#22A59A] mt-5 px-6 py-2 rounded-sm hover:bg-[#1f7f79] transition cursor-pointer"
        >
          Withdraw Now
        </button>

        <p className="text-xs mt-2 text-gray-400">
          *Minimum withdrawal amount is $100
        </p>

        <p className="mt-10 text-lg font-semibold">Withdraw History</p>
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
                  Trans ID #{item.transactionId}
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
                  Status:{" "}
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-10">
            No withdrawal history found.
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal
        title="Enter Withdrawal Amount"
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="Submit"
        confirmLoading={withdrawLoading}
      >
        <p>Minimum $100 — Max ${balance}</p>
        <InputNumber
          size="large"
          className="w-full mt-5"
          max={balance}
          placeholder="Enter amount"
          value={withdrawAmount}
          onChange={(value) => setWithdrawAmount(value)}
        />
      </Modal>
    </div>
  );
};

export default Wallet;
