import React from 'react'
import farm from '../assets/farm.png'
import { Link } from 'react-router-dom'


const Login=()=>{
    return(
        <div className='h-screen w-screen flex items-center justify-center bg-cover bg-center'
        style={{backgroundImage: `url(${farm})`}}
        >
       <div className='bg-white/80 opacity-90 backdrop-blur-lg shadow-lg rounded-xl p-8 w-[450px] '>
        <h2 className='text-2xl font-bold text-center text-green-800'>Welcome Back!</h2>
        <p className='text-center text-gray-600 mb-6'>Your farm, connected.</p>

        <form className='space-y-4'>
            <div>
                <input type="email" 
                placeholder='Email Address'
                className='w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500'
                />
            </div>
            <div>
                <input type="password" 
                placeholder='Password'
                className='w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500'
                />
            </div>
            <div className='flex items-center justify-center text-sm text-gray-600'>
                <a href='#' className='hover:underline text-green-700'>
                    Forget Password
                </a>
            </div>
            <button className='w-full bg-green-600 text-white py-2  rounded-lg font-semibold hover:bg-green-700 transition'>
                Log In
            </button>
        </form>
        <p className='mt-4 text-center text-sm text-gray-700'> Don’t have an account?{" "}
            <Link to="/register" className='text-green-700 font-semibold hover:underline'>Register</Link>
        </p>
       </div>
        </div>
    )
}

export default Login