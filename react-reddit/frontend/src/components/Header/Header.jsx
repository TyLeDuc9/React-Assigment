import React from 'react'
import { useSelector } from 'react-redux'

export const Header = ({ setEdit }) => {
  const user = useSelector((state) => state.userReducer)

  return (
    <div>
      <header className='text-white'>
        <div className='relative'>
          <div
            onClick={() => setEdit(true)}
            className='absolute right-3 top-2 border-2 border-red-500 p-2 rounded-2xl 
            cursor-pointer font-semibold bg-white text-black'>
            Edit
          </div>
        </div>
        <div className='pt-3.5 px-4'>
          <img
            src={user.avatarUrl}
            className="w-24 h-24 shadow-lg rounded-full border-2 border-white
              cursor-pointer hover:scale-105 transition-transform duration-300"
            alt="logo"
          />
        </div>
        <div className='px-5'>
          <div className='font-bold text-xl' >{user.name}</div>
          <div>{user.age}</div>
          <div>{user.about}</div>
        </div>
      </header>
    </div>
  )
}
