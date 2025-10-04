import React from "react";
import BannerSlider from "../components/BannerSlider";
import BuyerNavbar from "../components/BuyerNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleWhole,
  faCarrot,
  faCow,
  faEgg,
  faWheatAwn,
} from "@fortawesome/free-solid-svg-icons";
import NearbyFarmers from "../components/NearbyFarmers";
import tomato from "../assets/tomato.svg";
import potato from "../assets/potato.svg";
import onion from "../assets/onion.svg";

const BuyerDash = () => {
  return (
    <div className="min-h-full bg-gray-50 ">
      <BuyerNavbar />
      <section>
        <BannerSlider />
      </section>

      <section className="px-6 py-6">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className=" shadow-md rounded-lg p-4 text-center bg-green-700 cursor-pointer">
            <FontAwesomeIcon icon={faCarrot} color="white" />
            <p className="font-semibold text-white">Vegitables</p>
          </div>
          <div className=" shadow-md rounded-lg p-4 text-center bg-green-700 cursor-pointer">
            <FontAwesomeIcon icon={faAppleWhole} color="white" />
            <p className="font-semibold text-white">Fruits</p>
          </div>
          <div className=" shadow-md rounded-lg p-4 text-center bg-green-700 cursor-pointer ">
            <FontAwesomeIcon icon={faCow} color="white" />
            <p className="font-semibold text-white">Dairy</p>
          </div>
          <div className=" shadow-md rounded-lg p-4 text-center bg-green-700 cursor-pointer ">
            <FontAwesomeIcon icon={faWheatAwn} color="white" />
            <p className="font-semibold text-white">Grains</p>
          </div>
          <div className=" shadow-md rounded-lg p-4 text-center bg-green-700 cursor-pointer ">
            <FontAwesomeIcon icon={faEgg} color="white" />
            <p className="font-semibold text-white">Eggs</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-bold py-3 mx-6 text-2xl text-green-700">
          Near By Farmers
        </h2>
        <NearbyFarmers />
      </section>

      <section className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Popular Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 ">
          {/* Product Card 1 */}
          <div className="w-60 shadow-xl rounded-xl p-6 bg-gray-100 flex flex-col items-center text-center transition-transform hover:scale-105">
            <img
              src={tomato}
              alt="Tomato"
              className="w-24 h-24 object-contain"
            />
            <h3 className="mt-4 font-semibold text-lg">Fresh Tomatoes</h3>
            <p className="text-gray-600 mt-1">₹60/kg</p>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
              Add to Cart
            </button>
          </div>

          {/* Product Card 2 */}
          <div className="w-60 shadow-xl rounded-xl p-6 bg-gray-100 flex flex-col items-center text-center transition-transform hover:scale-105">
            <img
              src={potato}
              alt="Potato"
              className="w-24 h-24 object-contain"
            />
            <h3 className="mt-4 font-semibold text-lg">Fresh Potatoes</h3>
            <p className="text-gray-600 mt-1">₹40/kg</p>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
              Add to Cart
            </button>
          </div>

          {/* Product Card 3 */}
          <div className="w-60 shadow-xl rounded-xl p-6 bg-gray-100 flex flex-col items-center text-center transition-transform hover:scale-105">
            <img src={onion} alt="Onion" className="w-24 h-24 object-contain" />
            <h3 className="mt-4 font-semibold text-lg">Fresh Onions</h3>
            <p className="text-gray-600 mt-1">₹55/kg</p>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
              Add to Cart
            </button>
          </div>
          <div className="w-60 shadow-xl rounded-xl p-6 bg-gray-100 flex flex-col items-center text-center transition-transform hover:scale-105">
            <img
              src={tomato}
              alt="Tomato"
              className="w-24 h-24 object-contain"
            />
            <h3 className="mt-4 font-semibold text-lg">Fresh Tomatoes</h3>
            <p className="text-gray-600 mt-1">₹60/kg</p>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
              Add to Cart
            </button>
          </div>
          <div className="w-60 shadow-xl rounded-xl p-6 bg-gray-100 flex flex-col items-center text-center transition-transform hover:scale-105">
            <img
              src={tomato}
              alt="Tomato"
              className="w-24 h-24 object-contain"
            />
            <h3 className="mt-4 font-semibold text-lg">Fresh Tomatoes</h3>
            <p className="text-gray-600 mt-1">₹60/kg</p>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
              Add to Cart
            </button>
          </div>
          <div className="w-60 shadow-xl rounded-xl p-6 bg-gray-100 flex flex-col items-center text-center transition-transform hover:scale-105">
            <img
              src={tomato}
              alt="Tomato"
              className="w-24 h-24 object-contain"
            />
            <h3 className="mt-4 font-semibold text-lg">Fresh Tomatoes</h3>
            <p className="text-gray-600 mt-1">₹60/kg</p>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyerDash;
