import React from 'react'
import logo from '../assets/capture.svg'
import veg from '../assets/vegis.svg'
import a from '../assets/a.svg'
import b from '../assets/b.svg'
import c from '../assets/c.svg'

const LandingPage = ()=>{
    return(
        <div className='min-h-screen bg-gray-50'>
        <header className='flex justify-between items-center px-8 py-4 bg-white shadow-xl'>
            <div className='flex items-center space-x-2'>
                <img src={logo} className='w-20 h-15' alt="logo" />
            <span className='text-teal-800 font-bold text-3xl'>GreenCart</span>
            </div>
            <nav className='hidden md:flex space-x-8 text-gray-700 font-medium'>
            <a href='#feature' className='hover:text-green-600 font-bold'>Features</a>
             <a href='#feature' className='hover:text-green-600 font-bold'>How it Works</a>
              <a href='#feature' className='hover:text-green-600 font-bold'>Contributions</a>
            </nav>
            <div className='gap-2 flex'>
            <button className='border-2 border-green-700 bg-gray-100 p-2 rounded-xl text-green-700 font-semibold hover:bg-green-700 hover:text-white cursor-pointer '>
                Log In
            </button>
            <button className='border-2 border-green-700 bg-gray-100 p-2 rounded-xl text-green-700 font-semibold hover:bg-green-700 hover:text-white cursor-pointer '>
                Sign Up
            </button>
            </div>
        </header>
        {/* image section */}
        <section className='flex flex-col md:flex-row items-center justify-between p-8 md:px-16 py-16 bg-green-100'>
            <div className='max-w-xl'>
                <h1 className='text-5xl font-bold text-gray-900 leading-snug'>
                Fresh, Local, Sustainable. <br/>
                <span className='text-green-800'>Your green Choices, Simplified</span>
                </h1>
            </div>
            <div className='mt-10 md:mt-0'>
            <img src={veg} alt="vegitable img" className='rounded-xl w-96 shadow-xl'/>
            </div>
        </section>
        {/* feature section */}
        <section id='#features' className='py-16 bg-gray-100 px-8 md:px-16'>
            <div className=' flex  gap-12 text-center items-center justify-center'>
                <div className='p-6 '>
                    <img src={a} alt="basket" className='w-30 mx-auto'/>
                    <h3 className ='text-lg font-semibold'>Shop Local Farms</h3>
                    <p className='text-gray-600 mt-2'>
                     Direct access to fresh produce from your nearest farmers.
                    </p>
                </div>
                <div calssName='p-6'>
                    <img src={b} alt="vehicle" className='w-30 mx-auto'/>
                    <h3 className='text-lg font-semibold'>Eco-Friendly Delivery</h3>
                    <p className='text-gray-600 mt-2'> GreenCart delivers in reusable packaging to minimize waste.</p>
                </div>
                <div calassName='p-6'>
                    <img src={c} alt="" className='w-30 mx-auto'/>
                    <h3 className='text-lg font-semibold'>Reduce Food Waste</h3>
                    <p className='text-gray-600 mt-2'>Buy what you need, when you need it. Waste less, save more.</p>
                </div>
            </div>

        </section>
        </div>
    )
}

export default LandingPage