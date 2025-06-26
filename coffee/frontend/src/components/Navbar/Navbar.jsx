import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar bg-white shadow-md py-7 text-black text-[20px]">

            <div className="w-4/5 mx-auto flex justify-evenly items-center font-semibold">
                <Link  className="hover:text-blue-400 transition-colors duration-200" to="/">Home</Link>
                <Link  className="hover:text-blue-400 transition-colors duration-200"to="/drink">Drink</Link>
                <Link  className="hover:text-blue-400 transition-colors duration-200" to="/cart">Cart</Link>
            </div>
        </nav>
    )
}
