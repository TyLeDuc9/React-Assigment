import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

export const FoodItem = ({ name, price, des, img}) => {
    const [add, setAdd] = useState(false)
    const {setCart, setTotal}=useContext(CartContext)
    const handleClick = () => {
        setAdd(true)
        const newItems={
            name:name,
            price:price,
            des:des,
            img:img,
        }
        setCart((item)=>[...item, newItems])
        setTotal((total)=>(total+=Number(price)))
       
    }
    return (
        <div className='bg-red-600 rounded-2xl shadow-2xl overflow-hidden'>
            <img src={`http://localhost:8080${img}`}
                alt={`picture of: ${name}`}
                className='w-full h-[330px] object-cover hover:scale-150 transition-transform duration-300 ease-in-out'
            />
            <div className='px-4 text-white font-medium my-3'>
                <p className='text-lg'>{name}</p>
                <p className=' text-sm line-clamp-1'>{des}</p>
                <p className='text-base font-bold mb-2'>{price}₫</p>
            </div>
            {add ? (
                <button className=' bg-black
                text-red-500 block mx-auto 
                cursor-not-allowed py-2 px-4 rounded-2xl font-semibold my-3'>
                    Added
                </button>

            ) : (
                <button onClick={handleClick} className='block mx-auto bg-black
                text-white py-2 px-4 rounded-2xl font-semibold my-3'>
                    Add to cart
                </button>
            )}
        </div>
    )
}
