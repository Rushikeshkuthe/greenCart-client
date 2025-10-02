import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import toast from "react-hot-toast";

const FarmerSettings=()=>{
    const [profile,setProfile] =useState({
        name:'Rushikesh',
        email:'rushikesh@gmail.com',
        phone:'7485961425',
        address:'Village Road, Nagpur'
    })

    const [password,setPassword]=useState({
        oldPassword:'',
        newPassword:'',
        confirmPassword:''
    })

    const handleProfile=(e)=>{
        setProfile({...profile,[e.target.name]:e.target.value})
    }

    const handlePassword=(e)=>{
        setPassword({...password,[e.target.name]:e.target.value})
    }

    const handleProfileSubmit=(e)=>{
        e.preventDefault();
        if(password.newPassword===password.confirmPassword){
            toast.success("Successfully Changed the password")
            console.log(password)
        }else{
            toast.error("Failed to change the password")
        }
    }

    return(
        <MainLayout>
           <h2 className="text-3xl font-bold text-green-700 mb--6">Setting</h2>
           <div className="grid grid-cols-2 gap-8 mt-5">
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Profile</h3>
                <form onSubmit={handleProfileSubmit} className="space-y-4" >
                    <div>
                        <label className="block text-gray-600 mb-1">Name</label>
                        <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleProfile}
                        className="w-full p-3 border rounded-lg"/>
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1">Name</label>
                        <input
                        type="text"
                        name="email"
                        value={profile.email}
                        onChange={handleProfile}
                        className="w-full p-3 border rounded-lg"/>
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1">Email</label>
                        <input
                        type="text"
                        name="phone"
                        value={profile.phone}
                        onChange={handleProfile}
                        className="w-full p-3 border rounded-lg"/>
                    </div>
                     <div>
              <label className="block text-gray-600 mb-1">Address</label>
              <textarea
                name="address"
                value={profile.address}
                onChange={handleProfile}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <button type='submit' className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">Save Profile</button>
                </form>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg h-fit">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Privacy</h3>
                <form onSubmit={handlePassword} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Old Password</label>
              <input
                type="password"
                name="oldPassword"
                value={password.oldPassword}
                onChange={handlePassword}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={password.newPassword}
                onChange={handlePassword}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={password.confirmPassword}
                onChange={handlePassword}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Reset Password
            </button>
          </form>
            </div>
         <button className="bg-green-600 text-white p-3 rounded-lg cursor-pointer w-fit">Logout</button>   
           </div>
        </MainLayout>
    )
}

export default FarmerSettings