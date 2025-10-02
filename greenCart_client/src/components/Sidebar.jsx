import React from 'react'
import { FaBox, FaCog, FaHome, FaMoneyBill, FaPlus, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/capture.svg'


const Sidebar=()=>{

    return(
        <div className='w-64 bg-green-700 text-white flex flex-col'>
            <div
            className='p-6 flex items-center border-b border-green-600'
            > 
            <img src={logo} alt="logo" className='w-15 h-15'/>
            <h1 className='text-2xl font-bold '>GreenCart</h1>
            </div>

            <nav className='flex-1 p-4 space-y-4'>
                <Link to='/farmerDash' className='flex items-center gap-3 hover:bg-green-600 p-2 rounded-md'>
                <FaHome/> Dashboard
                </Link>
                <Link to='/myProduct' className='flex items-center gap-3 hover:bg-green-600 p-2 rounded-md'>
                <FaBox/> My Product
                </Link>
                <Link to='/farmerOrder' className='flex items-center gap-3 hover:bg-green-600 p-2 rounded-md'>
                <FaShoppingCart/> Orders
                </Link>
                <Link to='/addProduct' className='flex items-center gap-3 hover:bg-green-600 p-2 rounded-md'>
                <FaPlus/> Add Product
                </Link>
                <Link to='/farmerPayment' className='flex items-center gap-3 hover:bg-green-600 p-2 rounded-md'>
                <FaMoneyBill/> Payments
                </Link>
                <Link to='/farmerSettings' className='flex items-center gap-3 hover:bg-green-600 p-2 rounded-md'>
                <FaCog/> Settings
                </Link>
            </nav>       
        </div>
    )
}

export default Sidebar