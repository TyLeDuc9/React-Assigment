import React from 'react'
import img12 from '../../assets/img12.jpg'
import img9 from '../../assets/img9.jpg'
import img10 from '../../assets/img10.jpg'
import img11 from '../../assets/img11.jpg'
import { FaStar } from 'react-icons/fa'
const TestimonialData = [
    {
        name: "Messi",
        image: img9,
        description: "This car offers an incredibly smooth drive and top-tier comfort. Perfect for both city and highway trips."
    },
    {
        name: "Max Verstappen",
        image: img10,
        description: "A great combination of power and comfort. The handling is superb and the cabin is extremely quiet."
    },
    {
        name: "Neymar Jr",
        image: img11,
        description: "Stylish, reliable, and loaded with tech features. This car exceeded my expectations!"
    },
    {
        name: "Lewis Hamilton",
        image: img12,
        description: "Excellent performance and sleek design. I’m impressed with its fuel efficiency and acceleration."
    },
]

export const Testimonial = () => {
    return (
        <div className="bg-neutral-900 py-12">
            <div className="p-4 mx-48">
                <div className="text-white text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">
                        What Our Clients Say About Us
                    </h2>
                    <p className="text-gray-300">
                        The consumption and emissions values in the website refer to your geographical IP.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TestimonialData.map((data, index) => (
                        <div
                            key={index}
                            className="bg-blue-400 rounded-2xl shadow-lg overflow-hidden cursor-pointer
                            transform transition hover:scale-105 duration-300 p-6 flex flex-col items-center"
                        >
                            <img
                                src={data.image}
                                alt={data.name}
                                className="w-24 h-24 rounded-full object-cover mb-4"
                            />
                            <div className="flex justify-center mt-2 mb-2">
                                {Array(5).fill().map((_, i) => (
                                    <FaStar key={i} className="text-primary text-lg" />
                                ))}
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-gray-800">{data.name}</h3>
                                <p className="text-gray-600 mt-2 text-sm">{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
