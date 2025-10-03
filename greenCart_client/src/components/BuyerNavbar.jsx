import React, { useState } from 'react'
import logo from '../assets/capture.svg'
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material'



const BuyerNavbar = () =>{
    
    const [anchorE1 ,setAnchorE1] = useState(null)
    const open =Boolean(anchorE1)

    const handleClick=(event)=>{
        setAnchorE1(event.currentTarget)
    }

    const handleClose =()=>{
        setAnchorE1(null)
    }

    return(
        <nav className='bg-green-700 text-white shadow-md px-6 py-3 flex items-center justify-between'>
           <div className='flex justify-center items-center'>
            <img src={logo} alt='logo' className='w-20 h-12'/>
            <h1 className='font-bold text-2xl'>GreenCart</h1>
           </div>
            <div className='flex-1 mx-6'>
            <input
            type='text'
            placeholder='Search for fresh vegetables, fruits...  ' 
            className='w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none'
            />
            </div>
            <div className='flex items-center space-x-6'>
                <div className='flex items-center cursor-pointer'>
                <IoLocationSharp className='text-xl'/>
                <span className='ml-1'>Set Location</span>
                </div>
                <FaShoppingCart className='text-2xl cursor-pointer'/>
                {/* <FaUserCircle className='text-2xl cursor-pointer'/> */}

                <div>
                <IconButton onClick={handleClick}>
                    {/* yaha pe user ka nam le kr uska pehla letter trim karna */}
                <Avatar sx={{bgcolor:'white', color:'green'}}>B</Avatar> 
                </IconButton>
                <Menu 
                anchorEl={anchorE1}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx:{
                        mt:1.5,
                        borderRadius:2,
                        minWidth:180,
                        boxShadow:'0px 4px 20px rgba(0,0,0,0.15)'
                    },
                }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My Orders</MenuItem>
                    <MenuItem onClick={handleClose} >Payments</MenuItem>
                     <MenuItem onClick={handleClose} sx={{color:'red'}}>Logout</MenuItem>
                </Menu>
                </div>
            </div>

        </nav>
    )
}

export default BuyerNavbar