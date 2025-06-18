import React from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';

const skillsData = [
    {
        name: "Lamborghini Veneno",
        img: img1,
        link: "#",
    },
    {
        name: "Lamborghini Aventador",
        img: img2,
        link: "#",
    },
    {
        name: "Lamborghini Aventador SVJ",
        img: img3,
        link: "#",
    },
    {
        name: "Lamborghini Centenario",
        img: img4,
        link: "#",
    }
];

export const Services = () => {
    return (
        <div className='bg-neutral-900 py-12'>
            <div className='p-4 mx-48 max-w-7xl '>
                <h1 className='text-3xl sm:text-4xl font-semibold text-center font-serif text-white mb-12'>
                    Why Choose Us
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={skill.img}
                                alt={skill.name}
                                className="w-full h-96 object-cover transform transition-transform duration-300 hover:scale-150 cursor-pointer"
                            />

                            <div className="p-4 text-white text-center">
                                <h2 className="text-lg font-bold mb-2">{skill.name}</h2>
                                <a
                                    href={skill.link}
                                    className="text-primary hover:text-white transition-colors"
                                >
                                    Learn More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
