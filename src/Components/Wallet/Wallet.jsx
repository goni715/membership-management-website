import React from "react";
import img from "../../assets/images/money.png";
const Wallet = () => {
  return (
    <div className="p-4 mb-10">
      <p className="text-xl font-bold">Wallet</p>
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center gap-2">
            <img src={img} alt="" />
            <p>Total Balance : </p>
          <h1 className="text-xl font-semibold">$10.00</h1>
        </div>
       
        <button className="bg-[#22A59A] mt-5 px-4 py-2  rounded-sm">
          Withdraw Now
        </button>
        <p className="text-xs mt-2">*Minimum withdrawal amount is $ 100</p>
        <p className="mt-8">Withdraw History</p>
      </div>
      <div className="flex justify-between items-center mt-10 mx-10 pb-2 border-b border-[#333333]">
        <div>
          <p className="text-sm">Trans ID #67658585878</p>
          <p className="text-sm">24 Jan, 2025 at 2:34 pm</p>
        </div>
        <div>
          <p>$10.00</p>
          <p className="text-xs">Status: Completed</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5 mx-10 pb-2 border-b border-[#333333]">
        <div>
          <p className="text-sm">Trans ID #67658585878</p>
          <p className="text-sm">24 Jan, 2025 at 2:34 pm</p>
        </div>
        <div>
          <p>$10.00</p>
          <p className="text-xs">Status: Completed</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5 mx-10 pb-2 border-b border-[#333333]">
        <div>
          <p className="text-sm">Trans ID #67658585878</p>
          <p className="text-sm">24 Jan, 2025 at 2:34 pm</p>
        </div>
        <div>
          <p>$10.00</p>
          <p className="text-xs">Status: Completed</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5 mx-10 pb-2 border-b border-[#333333]">
        <div>
          <p className="text-sm">Trans ID #67658585878</p>
          <p className="text-sm">24 Jan, 2025 at 2:34 pm</p>
        </div>
        <div>
          <p>$10.00</p>
          <p className="text-xs">Status: Completed</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5 mx-10 pb-2 border-b border-[#333333]">
        <div>
          <p className="text-sm">Trans ID #67658585878</p>
          <p className="text-sm">24 Jan, 2025 at 2:34 pm</p>
        </div>
        <div>
          <p>$10.00</p>
          <p className="text-xs">Status: Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
