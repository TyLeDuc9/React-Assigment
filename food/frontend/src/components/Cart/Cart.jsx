import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
export const Cart = () => {
  const { cart, setTotal, total, setCart } = useContext(CartContext)
  const navigate=useNavigate()
  const handleChekout=()=>{
    setTotal(0)
    setCart([])
  }
  const handleHome=()=>{
    navigate('/food')
  }
  return (
    <div className=''>
      <h2 className="text-2xl font-bold text-white text-center my-5">🛒 Check out</h2>
      <div className='grid grid-cols-4  gap-6 p-4 w-4/5 mx-auto'>
        {
          cart.map((item) => {
            return (
              <div className='bg-red-600 rounded-2xl shadow-2xl overflow-hidden'>
                <img src={`http://localhost:8080${item.img}`}
                  alt={`picture of: ${item.name}`}
                  className='w-full h-96 object-cover hover:scale-150 transition-transform duration-300 ease-in-out'
                />
                <div className='px-4 text-white font-medium my-3'>
                  <p className='text-lg'>{item.name}</p>
                  <p className=' text-sm line-clamp-1'>{item.des}</p>
                  <p className='text-base font-bold mb-2'>{item.price}₫</p>
                </div>
              </div>
            )
          })
        }

      </div>
      <div className='font-medium w-4/5 bg-white hover:bg-green-300
        my-3 mx-auto transition duration-300 rounded-md block py-2 px-4 text-center'>Total: {total}₫
      </div>
       <button onClick={handleChekout} className='font-medium w-4/5 bg-white hover:bg-green-300
        my-3 mx-auto transition duration-300 rounded-md block py-2 px-4 text-center'>Done
      </button>
        <button onClick={handleHome} className='font-medium w-4/5 bg-white hover:bg-green-300
        my-3 mx-auto transition duration-300 rounded-md block py-2 px-4 text-center'>Back Food
      </button>

    </div>
  )
}
