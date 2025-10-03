import React from 'react'
import MainLayout from '../layouts/MainLayout'

const FarmerOrder =() =>{
     const orders = [
    {
      id: 1,
      buyerName: "Rahul Sharma",
      productName: "Tomatoes",
      quantity: "20kg",
      amount: "₹600",
      location: "Nagpur, Maharashtra",
      status:'On the Way',
      date: "2025-10-01",
    },
    {
      id: 2,
      buyerName: "Priya Patel",
      productName: "Potatoes",
      quantity: "50kg",
      amount: "₹1000",
      location: "Pune, Maharashtra",
       status:'Delivered',
      date: "2025-09-28",
    },
    {
      id: 3,
      buyerName: "Amit Verma",
      productName: "Onions",
      quantity: "30kg",
      amount: "₹1200",
      location: "Mumbai, Maharashtra",
       status:'Delivered',
      date: "2025-09-25",
    },
  ];
    return(
        <MainLayout>
            <h2 className='text-3xl font-bold text-green-700 mb-6'>Orders</h2>
            <div className='p-1 grid grid-cols-1 overflow-x-auto'>
            <div className='overflow-x-auto bg-white rounded-xl shadow-lg '>
                <table className='min-w-full text-center'>
                    <thead className='bg-green-200 rounded-2xl'>
                        <tr>
                            <th className='p-3'>Buyer Name</th>
                            <th className='p-3'>Product Name</th>
                            <th className='p-3'>Quantity</th>
                            <th className='p-3'>Amount</th>
                            <th className='p-3'>Location</th>
                            <th className='p-3'>Status</th>
                            <th className='p-3'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {orders.map((p)=>(
                        <tr key={p.id} className='border-b border-gray-300 hover:bg-green-100'>
                            <td className='p-3'>{p.buyerName}</td>
                            <td className='p-3'>{p.productName}</td>
                            <td className='p-3'>{p.quantity}</td>
                            <td className='p-3'>{p.amount}</td>
                            <td className='p-3'>{p.location}</td>
                            <td className={`p-3 font-semibold ${p.status==='Delivered'?'text-green-600':'text-yellow-600'}`}>{p.status}</td>
                            <td className='p-3'>{p.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            </div>
        </MainLayout>
    )
}

export default FarmerOrder