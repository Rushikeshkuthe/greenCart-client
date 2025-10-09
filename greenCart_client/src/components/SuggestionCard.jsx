import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React  from 'react'

const SuggestionCard = ({item}) =>{
    return(
        <Card className='shadow-md  hover:shadow-xl transition-all duration-300'
        sx={{
        boxShadow: 3,
        borderRadius: 3,
        transition: 'all 0.3s ease',
        '&:hover': { boxShadow: 6, transform: 'scale(1.03)' },
      }}
        >
            {/* <CardMedia
            component='img'
            height='50'
            image={item.img}
            alt={item.name}
           style={{ objectFit: 'cover' }}
            /> */}

             <img
        src={item.img}
        alt={item.name}
        className="rounded-md w-full object-cover mb-3 h-[140px]"
      />

            <CardContent >
                <Typography variant='h6' className='font-semibold'>
                    {item.name}
                </Typography>
                <Typography variant='body2' color='text.secondary' className='mb-2'>
                    {item.price}
                </Typography>
                <button className='bg-green-500 text-white p-2 rounded-xl hover:bg-green-800 cursor-pointer'>
                    Add to cart
                </button>
            </CardContent>

        </Card>
    )
}

export default SuggestionCard