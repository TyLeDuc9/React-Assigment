import React from 'react'
import imageBackground from '../../assets/image.jpg'
export const Hero = () => {
  return (
    <div className='bg-neutral-900'> 
      <div className='p-4 mx-48 min-h-[660px] flex'>
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
          <div className='order-1 sm:order-2'>
            <img src={imageBackground} alt='Background' className='max-h-[600px]' />
          </div>
          <div className='order-2 sm:order-1 space-y-5 sm:pr-32'>
            <p className='text-primary text-2xl font-serif'>Effortless</p>
            <h1 className='text-5xl lg:text-6xl font-semibold font-serifs text-white'>Lamborghini</h1>
            <p className='text-white'>The consumption and emissions values in the website refer to your geographical IP. 
              This value might be unrealistic if you navigate using VPN or if the position of your Internet provider is imprecise. 
              If you believe you are incorrectly geolocalized, contact your dealer to get valid consumption and emissions
               information in your area.
            </p>
            <button className='btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-200'>Get Started</button>
          </div>
        </div>
      </div>

    </div>
  )
}
