import React from 'react';
import { BiSun } from "react-icons/bi";
const NavLinks = [
  {
    id: 1,
    name: 'Home',
    link: "/#",
  },
  {
    id: 2,
    name: 'Cars',
    link: '/#cars'
  },
  {
    id: 3,
    name: 'About',
    link: '/#about'
  },
  {
    id: 4,
    name: 'Booking',
    link: '/#booking'
  },

]
export const Navbar = () => {
  return (
    <nav className='shadow-md'>
      <div className='p-4 mx-48'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-3xl font-semibold font-bold'>Lamborghini</h1>
          </div>
          <div className='hidden md:block'>
            <ul className='flex items-center gap-8'>
              {
                NavLinks.map((data) => (
                  <li key={data.id} className=''><a
                    className='inline-block py-2 uppercase hover:border-b-2 hover:text-primary hover:border-primary
                  transition-colors duration-300 text-lg font-medium'
                    href={data.link}>
                    {data.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
