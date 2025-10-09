import React from 'react'
import tomato from '../assets/tomato.svg'
import potato from "../assets/potato.svg";
import onion from "../assets/onion.svg";
import { Button, Card, CardContent, Typography } from '@mui/material'
import BuyerNavbar from '../components/BuyerNavbar'
import SuggestionCard from '../components/SuggestionCard'


const ProductDetails=()=>{

    const suggestions = [
  { id: 1, name: "Fresh Onions", price: "₹40/kg", img:`${tomato}` },
  { id: 2, name: "Organic Potatoes", price: "₹50/kg", img: `${potato}` },
  { id: 3, name: "Green Chillies", price: "₹70/kg", img: `${onion}` },
  { id: 4, name: "Fresh Onions", price: "₹40/kg", img:`${tomato}` },
  { id: 5, name: "Organic Potatoes", price: "₹50/kg", img: `${potato}` },
  { id: 6, name: "Green Chillies", price: "₹70/kg", img: `${onion}` },
];

    return(
        <div>
            <BuyerNavbar/>
        <div className='p-6 md:px-16 space-y-8 flex gap-5 items-center justify-center'>
            <div className='flex justify-center ' >
                <img src={tomato} alt="Product" 
                className='rounded-xl shadow-lg  w-50' 
                />
            </div>
            <Card className='p-6 shadow-lg'>
                <CardContent>
          <Typography variant="h5" className="font-bold mb-2">
            Fresh Tomatoes
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" className="mb-2">
            Farmer: <span className="font-semibold">Ramesh Patil</span>
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-4">
            Grown organically with no pesticides. Fresh from farms to your kitchen.
          </Typography>
          <Typography variant="h6" className="text-green-700 font-bold mb-4">
            ₹60 / kg
          </Typography>
          <Button className='mt-3' variant="contained" color="success">
            Add to Cart
          </Button>
          </CardContent>
            </Card>
        </div>
         <div className="m-8 gap-4">
        <Typography variant="h5" sx={{mb:2}}>
          More from this Farmer
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 ">
          {suggestions.map((item) => (
            <SuggestionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
        </div>
    )
}

export default ProductDetails