import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import toast, { Toaster } from "react-hot-toast";
import { FiCopy } from "react-icons/fi";

const FarmerPayment = () => {
  const walletId = "010af6679ae0badb";
  const totalBalance = 1600;

  const [transaction] = useState([
    {
      buyerName: "Rahul Sharma",
      date: "2025-09-27",
      amount: 500,
      status: "Completed",
    },
    {
      buyerName: "Anjali Verma",
      date: "2025-09-28",
      amount: 300,
      status: "Pending",
    },
    {
      buyerName: "Vikas Singh",
      date: "2025-09-29",
      amount: 800,
      status: "Completed",
    },
  ]);

  const copyWalletId = () => {
    navigator.clipboard.writeText(walletId);
    toast.success("Wallet Id Copied!");
  };

  return (
    <MainLayout>
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-3xl font-bold text-green-700 mb-6">Payment</h2>

      <div className="bg-white shadow-md rounded-xl p-6 mb-6 flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <p className="text-gray-600 text-xl">Wallet ID:</p>
          <p className="font-mono text-xl font-semibold text-green-700">
            {walletId}
          </p>
        </div>
        <div>
          <button
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 cursor-pointer"
            onClick={copyWalletId}
          >
            <FiCopy /> Copy
          </button>
        </div>
      </div>
      <div className="mt-4 bg-white shadow-2xl w-fit rounded-xl p-6 flex items-center gap-2">
        <p className="text-gray-600 font-medium text-lg">Total Balance:</p>
        <p className="text-lg font-bold text-green-700 ">{totalBalance}</p>
      </div>
      {/* transaction history */}

      <div className="bg-white w-full shadow-md rounded-xl p-6 overflow-x-auto mt-5">
        <h3 className="text-xl font-semibold text-green-700 mb-4">
          Transaction History
        </h3>
        <table className="min-h-full  w-full text-center outline-none rounded-2xl">
          <thead className="bg-green-100 rounded-2xl">
            <tr >
              <th className="p-3">Buyer Name</th>
              <th className="p-3">Date</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {transaction.map((txn, index) => (
              <tr key={index} className="border-b border-gray-400 hover:bg-gray-50 transition">
                <td className="p-3">{txn.buyerName}</td>
                <td className="p-3">{txn.date}</td>
                <td className="p-3">{txn.amount}</td>
                <td className={`p-3 font-semibold ${txn.status==='Completed'?'text-green-600':'text-yellow-600'}`}>{txn.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default FarmerPayment;
