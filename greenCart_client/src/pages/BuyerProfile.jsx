import React, { useState } from 'react'
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import BuyerNavbar from '../components/BuyerNavbar';

const BuyerProfile = () =>{

     const [user, setUser] = useState({
    name: "Rohan Patil",
    email: "rohanpatil@gmail.com",
  });

  const [passwords, setPasswords] = useState({
    oldPassword: "12345",
    newPassword: "",
    confirmPassword: "",
  });

  const [isOldVerified, setIsOldVerified] = useState(false);

  // Simulate backend password
  const dummyOldPassword = "12345";

  const handleProfileUpdate = () => {
    toast.success("Profile updated successfully!");
  };

  const handleVerifyOldPassword = () => {
    if (passwords.oldPassword === dummyOldPassword) {
      setIsOldVerified(true);
      toast.success("Old password verified!");
    } else {
      toast.error("Incorrect old password!");
    }
  };

  const handleChangePassword = () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("New passwords do not match!");
      return;
    }
    toast.success("Password changed successfully!");
    setPasswords({ oldPassword: "", newPassword: "", confirmPassword: "" });
    setIsOldVerified(false);
  };

    return(
        <div>
            <BuyerNavbar/>
             <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <Toaster position="top-right" reverseOrder={false} />
      <Typography variant="h5" className="font-semibold mb-6 text-green-800" sx={{my:2}}>
        👤 Account Settings
      </Typography>

      {/* Profile Section */}
      <Card
        sx={{
          width: "100%",
          maxWidth: 600,
          borderRadius: 3,
          boxShadow: 3,
          mb: 4,
          p: 2,
          
         
        }}
      >
        <CardContent>
          <Typography variant="h6" className="mb-3 font-semibold">
            Profile Details
          </Typography>
          <Divider className="mb-4" />

          <div className="space-y-4 ">
            <TextField
              fullWidth
              sx={{my:2}}
              label="Full Name"
              variant="outlined"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <TextField
              fullWidth
               sx={{my:2}}
              label="Email Address"
              type="email"
              variant="outlined"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <Button
              variant="contained"
              color="success"
              onClick={handleProfileUpdate}
            >
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Password Section */}
      <Card
        sx={{
          width: "100%",
          maxWidth: 600,
          borderRadius: 3,
          boxShadow: 3,
          p: 2,
        }}
      >
        <CardContent>
          <Typography variant="h6" className="mb-3 font-semibold">
            Change Password
          </Typography>
          <Divider className="mb-4" />

          <div className="space-y-4">
            <TextField
              fullWidth
               sx={{my:2}}
              label="Old Password"
              type="password"
              variant="outlined"
              value={passwords.oldPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, oldPassword: e.target.value })
              }
              disabled={isOldVerified}
            />
            {!isOldVerified && (
              <Button
                variant="outlined"
                color="primary"
                onClick={handleVerifyOldPassword}
              >
                Verify Old Password
              </Button>
            )}

            {isOldVerified && (
              <>
                <TextField
                  fullWidth
                  sx={{my:2}}
                  label="New Password"
                  type="password"
                  variant="outlined"
                  value={passwords.newPassword}
                  onChange={(e) =>
                    setPasswords({ ...passwords, newPassword: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  sx={{my:2}}
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  value={passwords.confirmPassword}
                  onChange={(e) =>
                    setPasswords({
                      ...passwords,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleChangePassword}
                >
                  Update Password
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
        
        </div>
    )
}

export default BuyerProfile