import React, { useContext, useState } from 'react'
import { CartContext } from '../../../Context/CartContext'
export const DrinkItem = ({ name, price, des, imageUrl }) => {
  const [add, setAdd] = useState(false)
  const { setCart, setTotal } = useContext(CartContext)
  const handleClick = () => {
    setAdd(true)
    const newItems = {
      name: name,
      imageUrl: imageUrl,
      des: des,
      price: price
    }
    setCart((item) => [...item, newItems])
    setTotal((total) => (total += Number(price)))

  }

  return (


    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={`http://localhost:8080${imageUrl}`}
        alt={`picture of: ${name}`}
        className="w-full max-h-96 object-cover hover:scale-150"
      />
      <div className="px-4 py-2">
        <p className="text-lg font-semibold text-gray-800 mb-1">{name}</p>
        <p className="text-sm text-gray-600 mb-2 line-clamp-1">{des}</p>
        <p className="text-base font-bold text-amber-400">{price}₫</p> 
      </div>

      {
        add ? (
          <button
            disabled
            className="bg-red-500 text-white font-medium my-3 mx-auto 
              transition duration-300 rounded-md block py-2 px-4 cursor-not-allowed">
            Added
          </button>
        ) : (
          <button
            onClick={handleClick}
            className="bg-black hover:bg-amber-300 text-white font-medium 
              my-3 mx-auto transition duration-300 rounded-md block py-2 px-4 cursor-pointer">
            Add to cart
          </button>
        )
      }
    </div>
  )
}
