import React, { useState } from "react";
import tomato from "../assets/tomato.svg";
import { IoMdArrowRoundBack } from "react-icons/io";
import BuyerNavbar from "../components/BuyerNavbar";

const MyCart = () => {
  const [quantity, setQuantity] = useState(1);
  const handleIncremnet = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const pricePerItem = 60;
  const handlingCharge = 10;
  const totalCharge = pricePerItem + handlingCharge;

  return (
    <div>
      <BuyerNavbar />
      <div className="p-6 bg-gray-100  min-h-screen flex flex-col items-center gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-4 flex justify-between items-center w-1/2">
          <div>
            <img src={tomato} alt="tomato" className="w-20 rounded-2xl" />
            <h3 className="font-bold text-lg">Fresh Tomatos</h3>
            <p className="text-gray-600">{pricePerItem} ₹/kg</p>
            <button className="mt-2 text-green-700 font-medium hover:underline">
              + Add Item
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDecrement}
              className="bg-gray-200 px-3 py-1 rounded-full text-lg"
            >
              {" "}
              -{" "}
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={handleIncremnet}
              className=" bg-gray-200 px-3 py-1 rounded-full text-lg"
            >
              +
            </button>
          </div>
          <div className="text-right">
            <p className="text-gray-700">Total</p>
            <p className="font-bold text-green-700">
              {quantity * pricePerItem} ₹/kg
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-4 w-1/2">
          <h3 className="font-bold text-lg mb-2">Bill Details</h3>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Price</span>
            <span> ₹ {quantity * pricePerItem} </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">
              Handling Charges
            </span>
            <span> ₹{handlingCharge} </span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-green-700">
            <span>Total Amount</span>
            <span> ₹{totalCharge}</span>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-4 w-1/2">
          <div className="flex- justify-between items-center">
            <h3 className="font-bold text-lg">Delivery Address</h3>
            <button className="text-blue-600 hover:underline cursor-pointer">
              Edit
            </button>
          </div>
          <p className="text-gray-600 mt-1">
            Sector 18, Noida, Uttar Pradesh, India
          </p>
        </div>

        <button className="bg-green-700 text-white p-3 rounded-xl text-lg hover:bg-green-800 transition">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default MyCart;
