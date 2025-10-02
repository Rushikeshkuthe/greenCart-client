import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "Vegitable",
    status: "Available",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("new Product", form);
  };

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-2xl ">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Fresh Tomato"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3  rounded-lg outline-none border-1 border-green-300 "
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              Price (per kg)
            </label>
            <input
              type="number"
              name="price"
              placeholder="30 Rs/kg"
              value={form.price}
              onChange={handleChange}
              className="w-full p-3  rounded-lg outline-none border-1 border-green-300 "
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              Quantity (kg)
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Fresh Tomato"
              value={form.quantity}
              onChange={handleChange}
              className="w-full p-3  rounded-lg outline-none border-1 border-green-300 "
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              Category
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full p-3  rounded-lg outline-none border-1 border-green-300"
            >
              <option value="Vegetable">Vegetable</option>
              <option value="Fruit">Fruit</option>
              <option value="Dairy">Dairy</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              Product Name
            </label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full p-3 border-1 rounded-lg outline-none border-green-300"
            >
              <option value="Available">Available</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full p-3 border-1 rounded-lg bg-gray-50 outline-none border-green-300"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 "
          >
            Save Product
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default AddProduct;
