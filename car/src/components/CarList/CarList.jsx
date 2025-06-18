import React from 'react';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';

const carList = [
    {
        name: "Lamborghini Huracan",
        price: 250000,
        img: img5,
    },
    {
        name: "Lamborghini Aventador S",
        price: 350000,
        img: img6,
    },
    {
        name: "Lamborghini Sian",
        price: 1000000,
        img: img7
    },
    {
        name: "Lamborghini Urus",
        price: 300000,
        img: img8
    }
];

export const CarList = () => {
    return (
        <div className='pb-24 pt-20'>
            <div className='p-4 mx-48'>
                <h1 className='text-3xl sm:text-4xl font-semibold font-serif mb-3'>Hyper Car</h1>
                <p className='text-sm pb-10'>The consumption and emissions values in the website refer to your geographical IP.</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16'>
                    {
                        carList.map((car, index) => (
                            <div key={index} className="border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
                                <div>
                                    <img src={car.img} alt={car.name} className="w-full h-60 object-cover rounded-md" />
                                </div>
                                <p className="text-lg font-medium mt-2 truncate">{car.name}</p>
                                <span className="text-gray-600">${car.price.toLocaleString()}</span>
                            </div>
                        ))
                    }
                </div>
                <div className='text-center mt-9'>
                    <button className='bg-dark py-2 px-4 text-primary rounded-xs cursor-pointer hover:text-white'>Get Started</button>
                </div>
            </div>
        </div>
    );
};
