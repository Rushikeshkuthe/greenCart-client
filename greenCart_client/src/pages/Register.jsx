import React, { useState } from 'react'
import farm from '../assets/farm.png'
import { Link } from 'react-router-dom'

const Register =()=>{

    const [form,setForm] = useState({
        name:'',
        email:'',
        password:'',
        role:'buyer'
    })

    const handleChange = ()=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit = () =>{
        e.preventDefault();
        console.log("Register form :" , form)
    }

    return(
        <div className='h-screen w-screen flex items-center justify-center bg-cover bg-center'
        style={{backgroundImage: `url(${farm})`}}
        >
            <div className='bg-white/80 opacity-90 backdrop-blur-lg shadow-lg rounded-xl p-8 w-[450px]'>
                <h2 className='text-2xl font-bold text-center text-green-800'>Create Account</h2>
                <p className='text-center text-gray-600 mb-6'>Join GreenCart Today</p>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <input type="text" 
                    placeholder='Full Name'
                    value={form.name}
                    name='name'
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500'
                    required
                    />
                     <input type="email" 
                    placeholder='Email'
                    value={form.email}
                    name='email'
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500'
                    required
                    /> 
                    
                    <input type="password" 
                    placeholder='Password'
                    value={form.password}
                    name='password'
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500'
                    required
                    />

                    <div className='flex items-center justify-start gap-2'>
                        <label className='flex items-center justify-between'>
                            <input type="radio" 
                            name='role'
                            value='buyer'
                            checked={form.role==='buyer'}
                            onChange={handleChange}
                            />
                            Buyer
                        </label>
                        <label className='flex items-center justify-between'>
                            <input type="radio" 
                            name='role'
                            value='farmer'
                            checked={form.role==='farmer'}
                            onChange={handleChange}
                            />
                            Farmer
                        </label>
                    </div>
                    <button type='submit' className='w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition'>
                        Register
                    </button>
                </form>
                <p className='mt-4 text-center text-sm text-gray-700'> Already have account?{" "}
            <Link to="/login" className='text-green-700 font-semibold hover:underline'>LogIn</Link>
        </p>
            </div>
        </div>
    )
}

export default Register