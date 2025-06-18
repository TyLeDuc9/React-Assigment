import React from 'react'
import video from '../../videos/video.mp4'

export const About = () => {
    return (
        <div className='sm:min-h-[620px] sm:place-items-center sm:grid'>
            <div className='p-4 mx-48'>
                <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
                    <div className="w-full max-w-[640px] aspect-video">
                        <video className="w-full h-full" controls>
                            <source src={video} type="video/mp4" />
                            Trình duyệt của bạn không hỗ trợ video.
                        </video>
                    </div>
                    <div className=' text-dark sm:p-16 space-x-5'>
                        <h1 className='text-3xl sm:text-4xl font-bold font-serif'>About</h1>
                        <p className='my-4'>The consumption and emissions values in the website refer to your geographical IP.
                            This value might be unrealistic if you navigate using VPN or if the position of your Internet provider is imprecise.
                            If you believe you are incorrectly geolocalized, contact your dealer to get valid consumption and emissions
                            information in your area.
                        </p>
                        <button className="border border-amber-500 text-primary px-4 py-2 
                        rounded cursor-pointer hover:bg-primary hover:text-white bg-dark">
                            Get Started
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
