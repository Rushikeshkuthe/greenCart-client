import React from 'react'
import MainLayout from '../layouts/MainLayout'

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
        </MainLayout>
    )
}

export default FarmerDash