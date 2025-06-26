import React from 'react'
import { Link } from 'react-router-dom' 
export const Navbar = () => {
  return (
    <nav className='bg-black'>
      <div className='text-white font-medium p-9 text-[1.2rem] w-4/5 mx-auto'>
        <Link className='px-4 hover:text-red-400' to='/'>Home</Link>
        <Link className='px-4 hover:text-red-400' to='food'>Food</Link>
        <Link className='px-4 hover:text-red-400' to='cart'>Cart</Link>
      </div>
    </nav>
  )
}
