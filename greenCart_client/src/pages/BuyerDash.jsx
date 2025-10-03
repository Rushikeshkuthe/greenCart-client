import React from 'react'
import BannerSlider from '../components/BannerSlider'
import BuyerNavbar from '../components/BuyerNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole, faCarrot, faCow, faEgg, faWheatAwn } from '@fortawesome/free-solid-svg-icons'

const BuyerDash = () =>{

    return(
        <div className='min-h-screen bg-gray-50 '>
           <BuyerNavbar/>
           <section>
                <BannerSlider/>
           </section>

           <section className='px-6 py-8'>
            <h2 className='text-2xl font-bold mb-4 text-green-700'>Shop by Category</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                <div className=' shadow-md rounded-lg p-4 text-center bg-green-700 cursor-pointer'>
                   <FontAwesomeIcon icon={faCarrot} color='white'/>
                    <p className='font-semibold text-white'>Vegitables</p>
                </div>
                 <div className=' shadow-md rounded-lg p-4 text-center bg-green-700 cursor-pointer'>
                   <FontAwesomeIcon icon={faAppleWhole} color='white'/>
                    <p className='font-semibold text-white'>Fruits</p>
                </div>
                <div className=' shadow-md rounded-lg p-4 text-center bg-green-700 cursor-pointer '>
                   <FontAwesomeIcon icon={faCow} color='white'/>
                    <p className='font-semibold text-white'>Dairy</p>
                </div>
                <div className=' shadow-md rounded-lg p-4 text-center bg-green-700 cursor-pointer '>
                   <FontAwesomeIcon icon={faWheatAwn} color='white'/>
                    <p className='font-semibold text-white'>Grains</p>
                </div>
                <div className=' shadow-md rounded-lg p-4 text-center bg-green-700 cursor-pointer '>
                   <FontAwesomeIcon icon={faEgg} color='white'/>
                    <p className='font-semibold text-white'>Eggs</p>
                </div>
            </div>

           </section>
           
        </div>
    )
}

export default BuyerDash