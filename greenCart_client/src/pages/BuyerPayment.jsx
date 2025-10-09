import React from 'react'
import BuyerNavbar from '../components/BuyerNavbar'
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Paper,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const BuyerPayment = () =>{
    const wallet = {
    id: "010af6679ae0badb",
    balance: 1600,
    transactions: [
      {
        type: "Credit",
        amount: 100,
        description: "Wallet Created",
        status: "Success",
        date: "2025-09-27T11:54:00.301Z",
      },
      {
        type: "Debit",
        amount: 200,
        description: "Order Payment",
        status: "Pending",
        date: "2025-09-29T09:10:00.301Z",
      },
      {
        type: "Credit",
        amount: 500,
        description: "Refund from Farmer",
        status: "Success",
        date: "2025-10-01T12:00:00.301Z",
      },
    ],
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Success":
        return "success";
      case "Pending":
        return "warning";
      case "Failed":
        return "error";
      default:
        return "default";
    }
  };
    return(
        <div>
            <BuyerNavbar/>
            <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
         <Card
        sx={{
          width: "100%",
          maxWidth: 800,
          borderRadius: 3,
          boxShadow: 3,
          mb: 4,
          p: 2,
        }}
      >
        <CardContent className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <Typography variant="h6" className="flex items-center gap-2">
              <AccountBalanceWalletIcon color="success" />
              Wallet ID:{" "}
              <span className="font-mono text-gray-600">{wallet.id}</span>
            </Typography>
            <Typography variant="body1" color="text.secondary" className="mt-1">
              Manage your wallet and track all your transactions below.
            </Typography>
          </div>
          <div className="mt-4 md:mt-0 bg-green-100 px-6 py-3 rounded-lg shadow-sm text-center">
            <Typography variant="h6" color="green">
              ₹{wallet.balance}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Current Balance
            </Typography>
          </div>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card
        sx={{
          width: "100%",
          maxWidth: 800,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography variant="h6" className="mb-3 font-semibold text-gray-700">
            Transaction History
          </Typography>
          <Divider className="mb-3" />

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {wallet.transactions.map((txn, index) => (
                  <TableRow key={index}>
                    <TableCell>{txn.type}</TableCell>
                    <TableCell>{txn.description}</TableCell>
                    <TableCell>₹{txn.amount}</TableCell>
                    <TableCell>
                      <Chip
                        label={txn.status}
                        color={getStatusColor(txn.status)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      {new Date(txn.date).toLocaleDateString("en-GB")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      </div>
        </div>
    )
}

export default BuyerPayment