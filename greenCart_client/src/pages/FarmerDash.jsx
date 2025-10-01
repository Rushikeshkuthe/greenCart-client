import React from 'react'
import MainLayout from '../layouts/MainLayout'
import SalesData from '../components/SalesData'

const FarmerDash=()=>{

    return(
        <MainLayout>
            <h1 className='text-3xl font-bold text-green-700 mb-6'>Farmer Dashboard</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='bg-white shadow-2xl rounded-xl p-6 text-center'>
                    <h2 className='text-lg font-semibold'> Total Products</h2>
                    <p className='text-2xl text-green-600 mt-2 font-semibold'>25</p>
                </div>

                <div className='bg-white shadow-2xl rounded-xl p-6 text-center'>
                   <h2 className='text-lg font-semibold'>Total Orders</h2>
                   <p className='text-2xl text-green-600 mt-2 font-semibold'>120</p> 
                </div>
                <div className='bg-white rounded-2xl p-6 shadow-2xl text-center'>
                   <h2 className='text-lg font-semibold'>Total Earning</h2>
                   <p className='text-2xl text-green-600 mt-2 font-semibold'>₹45,000</p> 
                </div>
            </div>
            <div>    
            </div>
            <div className='grid grid-cols-2 gap-6 md:grid-cols-2'>
                <div className='mt-10 bg-white shadow-2xl rounded-xl grid p-6 overflow-x-auto'>
            <h2 className='text-xl font-semibold mb-4'>Recent Orders</h2>
            <table classname='w-full border-collapse rounded-2xl min-w-[400px]'>
                <thead>
                    <tr className='bg-green-100 text-left '>
                        <th className='p-3'>Order Id</th>
                        <th className='p-3'>Product</th>
                        <th className='p-3'>Quantity</th>
                        <th className='p-3'>Status</th>
                    </tr>
                </thead>
                <tbody>
                   <tr className="border-b">
              <td className="p-3">#1001</td>
              <td className="p-3">Tomatoes</td>
              <td className="p-3">20kg</td>
              <td className="p-3 text-green-600 font-semibold">Delivered</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">#1002</td>
              <td className="p-3">Potatoes</td>
              <td className="p-3">50kg</td>
              <td className="p-3 text-yellow-600 font-semibold">Pending</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">#1003</td>
              <td className="p-3">Onions</td>
              <td className="p-3">30kg</td>
              <td className="p-3 text-red-600 font-semibold">Cancelled</td>
            </tr>
                </tbody>
            </table>
            </div>

            <div className='mt-10 bg-white shadow-2xl rounded-xl p-6 grid overflow-x-auto'>
            <h2 className='text-xl font-semibold mb-4'>Stock</h2>
            <table classname='w-full border-collapse rounded-2xl min-w-[400px]'>
                <thead>
                    <tr className='bg-green-100 text-left '>
                        <th className='p-3'>Product</th>
                        <th className='p-3'>Stock</th>
                        <th className='p-3'>Price</th>
                    </tr>
                </thead>
                <tbody>
                <tr className="border-b">
              <td className="p-3">Tomatoes</td>
              <td className="p-3">20kg</td>
              <td className="p-3 text-green-600 font-semibold">₹60/kg</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">Potatoes</td>
              <td className="p-3">50kg</td>
              <td className="p-3 text-green-600 font-semibold">₹80/kg</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">Onions</td>
              <td className="p-3">30kg</td>
              <td className="p-3 text-green-600 font-semibold">₹90/kg</td>
            </tr>
                </tbody>
            </table>
            </div>
            </div>
            {/* chart */}
            <div className='grid grid-cols-1 md:grid-cols-1'>
            <SalesData/>
            </div>
            
        </MainLayout>
    )
}

export default FarmerDash