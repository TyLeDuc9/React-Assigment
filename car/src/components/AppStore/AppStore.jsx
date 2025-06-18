import React from 'react';
import img13 from '../../assets/img13.jpg'; // Apple App Store image
import img14 from '../../assets/img14.jpg'; // Google Pay image

export const AppStore = () => {
    return (
        <div className="bg-primary pb-24 pt-20">
            <div className="p-4 mx-48">
                <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3 text-center text-white">
                    Get Started with our app
                </h1>
                <p className=" pb-10 text-center text-white max-w-xl mx-auto">
                    A great combination of power and comfort. The handling is superb and the cabin is extremely quiet.
                </p>
                <div className="flex justify-center space-x-6 max-w-xs mx-auto">
                    <img
                        src={img13}
                        alt="Available on the App Store"
                        className="w-[150px] h-auto object-contain bg-white rounded"
                    />
                    <img
                        src={img14}
                        alt="Google Pay"
                        className="w-[150px] h-auto object-contain bg-white rounded"
                    />
                </div>
            </div>
        </div>
    );
};
