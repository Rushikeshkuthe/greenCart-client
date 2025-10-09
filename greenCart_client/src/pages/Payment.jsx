import React, { useState } from 'react'
import { Card, CardContent, Typography, TextField, Button, Divider } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

const Payment = () =>{
    const [walletId, setWalletId] = useState("010af6679ae0badb");
  const [farmerName, setFarmerName] = useState("Ramesh Patil");
  const [amount, setAmount] = useState("");

  const handlePayment = () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    // Simulating payment process
    const success = Math.random() > 0.2; // 80% chance success for demo

    if (success) {
      toast.success(`Payment of ₹${amount} sent to ${farmerName} successfully!`);
      setAmount("");
    } else {
      toast.error("Payment failed! Please try again.");
    }
  };
    return(
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-green-100">
             <Toaster position="top-center" reverseOrder={false} />
      <Card className="w-full max-w-md shadow-xl rounded-2xl p-4">
        <CardContent>
          <Typography variant="h5" className="font-semibold text-center text-green-800 mb-4">
            Buyer Payment
          </Typography>

          <div className="bg-green-50 p-3 rounded-lg mb-4">
            <Typography variant="body1" className="text-gray-700">
              <strong>Wallet ID:</strong> {walletId}
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              <strong>Farmer Name:</strong> {farmerName}
            </Typography>
          </div>

          <Divider className="my-4" />

          <Typography variant="body2" sx={{my:2}} className="mb-2 text-gray-600">
            Enter Amount (₹)
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="e.g. 500"
            value={amount}
            sx={{my:2}}
            onChange={(e) => setAmount(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="success"
            className="mt-6 rounded-full py-2 text-lg"
            onClick={handlePayment}
          >
            Pay Now
          </Button>
        </CardContent>
      </Card>
    </div>
    )
}

export default Payment