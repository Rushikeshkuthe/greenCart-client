import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const SalesData = () =>{

    const salesDate = [
         { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4780 },
  { month: "May", sales: 5890 },
  { month: "Jun", sales: 4390 },
  { month: "Jul", sales: 6490 }, 
    ]

    return(

        <div className='bg-white shadow-2xl rounded-xl p-6 mt-6'>
            <h2 className='text-xl font-semibold mb-4' > Montly Sales</h2>
        <ResponsiveContainer width='100%' height={300}>
            <LineChart data={salesDate} margin={{top:5,right:30,left:20,bottom:5}}>
            <CartesianGrid strokeDasharray='3 3'/>
            <XAxis dataKey='month'/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Line type='monotone' dataKey='sales' strokeWidth={3}/>
            </LineChart>
        </ResponsiveContainer>
        </div>
    )
}

export default SalesData