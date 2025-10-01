import React from "react";
import MainLayout from "../layouts/MainLayout";
import potato from "../assets/potato.svg";
import tomato from "../assets/tomato.svg";
import onion from "../assets/onion.svg";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const Myproduct = () => {
  const products = [
    {
      id: 1,
      image: `${tomato}`,
      name: "Tomatoes",
      category: "Vegetable",
      stock: "20kg",
      price: "₹30/kg",
      status: "Available",
    },
    {
      id: 2,
      image: `${ potato }`,
      name: "Potatoes",
      category: "Vegetable",
      stock: "50kg",
      price: "₹20/kg",
      status: "Out of Stock",
    },
    {
      id: 3,
      image: `${ onion }`,
      name: "Onions",
      category: "Vegetable",
      stock: "60kg",
      price: "₹40/kg",
      status: "Available",
    },
  ];

  return (
    <MainLayout>
      <h2 className="text-3xl font-bold text-green-700 mb-6">My Products</h2>
      <div className="p-1 grid grid-cols-1 overflow-x-auto">
        <div className="flex items-center justify-end mb-6">
          <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-2xl">
            Add New Product
          </button>
        </div>
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg ">
          <table className="min-w-full text-center ">
            <thead className="bg-green-100">
              <tr>
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Stock</th>
                <th className="p-3">Price</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className=" border-b border-gray-300 hover:bg-gray-100">
                  <td className="p-3">
                    <img src={p.image} alt={p.name} className=" w-12 h-12 rounded-md object-cover"/>
                  </td>
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{p.category}</td>
                  <td className="p-3">{p.stock}</td>
                  <td className="p-3">{p.price}</td>
                  <td className="p-3">
                    <span 
                    className={`px-3 py-1 rounded-full text-sm ${
                        p.status ==="Available" 
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                    >{p.status}</span>
                  </td>
                  <td className="p-3  gap-1 ">
                    <button className="px-3 py-1 text-blue-500 rounded-lg cursor-pointer">
                        <FiEdit2 size={25}/>
                    </button>
                    <button className="px-3 py-1 text-red-500  rounded-lg cursor-pointer">
                        <MdDeleteOutline size={25}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

export default Myproduct;
