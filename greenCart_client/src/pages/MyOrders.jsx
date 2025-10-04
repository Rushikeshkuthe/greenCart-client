import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { IoSearchCircleOutline } from "react-icons/io5";

const MyOrders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const orders = [
    {
      id: 1,
      product: "Fresh Tomatoes",
      amount: 120,
      address: "Sector 18, Noida",
      status: "Delivered",
      date: "2025-10-03",
    },
    {
      id: 2,
      product: "Organic Carrots",
      amount: 80,
      address: "Sector 22, Noida",
      status: "Pending",
      date: "2025-10-02",
    },
    {
      id: 3,
      product: "Potatoes",
      amount: 60,
      address: "Sector 15, Noida",
      status: "Cancelled",
      date: "2025-09-30",
    },
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.product
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-green-700 mb-6">My Orders</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <TextField
          variant="outlined"
          placeholder="Search by product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          sx={{
            width: 250,
            backgroundColor: "#fff",
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ccc",
              },
              "&:hover fieldset": {
                borderColor: "#4caf50", // green on hover
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IoSearchCircleOutline sx={{ color: "gray" }} />
              </InputAdornment>
            ),
          }}
        />

        <FormControl
          variant="outlined"
          size="small"
          sx={{
            minWidth: 180,
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#4ade80" }, // light green
              "&:hover fieldset": { borderColor: "#16a34a" }, // darker green on hover
              "&.Mui-focused fieldset": { borderColor: "#15803d" }, // focus state
            },
          }}
        >
          <InputLabel>Status</InputLabel>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            label="Status"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="grid gap-4 ">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-5 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div>
              <h3 className="font-semibold text-lg">{order.product}</h3>
              <p className="text-gray-600 text-sm">📍 {order.address}</p>
              <p className="text-gray-500 text-sm">🗓 {order.date}</p>
            </div>

            <div className="text-right mt-3 md:mt-0">
              <p className="font-semibold text-green-700">₹{order.amount}</p>
              <p
                className={`mt-1 text-sm font-medium ${
                  order.status === "Delivered"
                    ? "text-green-600"
                    : order.status === "Pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {order.status}
              </p>
            </div>
          </div>
        ))}

       
      </div>

    </div>
  );
};

export default MyOrders;
