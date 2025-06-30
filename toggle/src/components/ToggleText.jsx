import React, { useState } from 'react';

const ToggleText = () => {
    const [toggle, setToggle]=useState(true)

    const handleClick=()=>{
        setToggle(prev=>!prev)
    }

    return (
        <div className="text-center p-4">
            <button
            onClick={handleClick}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                {
                    toggle?"An noi dung":"Hien noi dung"
                }
            </button>
            {
                toggle && (
                    <p className='text-white'>Day la noi dung hien thi</p>
                )
            }
           

        </div>
    );
};

export default ToggleText;
