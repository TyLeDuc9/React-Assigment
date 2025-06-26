import React, { useContext } from 'react'
import { CartContext } from '../../../Context/CartContext'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const { cart, total , setCart, setTotal} = useContext(CartContext)
  const navigate=useNavigate()
  const handleChekout=()=>{
    setTotal(0)
    setCart([])
  }
  const handleHome=()=>{
    navigate('/')
  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-black text-center mb-6">🛒 Check out</h2>
      <div className='grid grid-cols-4  gap-6 p-4 w-4/5 mx-auto'>
        {cart.map((item) => {
          return (
            <div className="bg-white rounded-xl shadow-md overflow-hidden" key={item.id}>
              <img
                src={`http://localhost:8080${item.imageUrl}`}
                alt={`picture of: ${item.name}`}
                className="w-full max-h-96 object-cover"
              />
              <div className="px-4 py-2">
                <p className="text-lg font-semibold text-gray-800 mb-1">{item.name}</p>
                <p className="text-sm text-gray-600 mb-2 line-clamp-1">{item.des}</p>
                <p className="text-base font-bold text-amber-400">{item.price}₫</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className='font-medium w-4/5 bg-white hover:bg-green-300
        my-3 mx-auto transition duration-300 rounded-md block py-2 px-4 text-center'>Total: {total}₫
      </div>
      <button onClick={handleChekout} className='font-medium w-4/5 bg-white hover:bg-green-300
        my-3 mx-auto transition duration-300 rounded-md block py-2 px-4 text-center'>Done
      </button>
      <button onClick={handleHome} className='font-medium w-4/5 bg-white hover:bg-green-300
        my-3 mx-auto transition duration-300 rounded-md block py-2 px-4 text-center'>Back Home
      </button>
    </div>
  )
}
