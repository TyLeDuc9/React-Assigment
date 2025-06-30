import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { create } from './UserReducer'
import { useNavigate } from 'react-router-dom';
export const Create = () => {
  const users = useSelector((state) => state.users);
  const [name, setName] = useState("");  
  const [email, setEmail] = useState("");
  const navigate=useNavigate()

  

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const createUser = {
      id: users[users.length - 1].id + 1,
      name: name,
      email: email
    }
    navigate('/')
    dispatch(create(createUser))

  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='w-1/3 bg-gray-200 mx-auto my-[5%] p-6 rounded-xl shadow-xl'>
        <div className='flex flex-col my-5'>
          <h3 className='text-center text-blue-500 text-2xl font-bold my-4'>Add new user</h3>
          <label htmlFor='name' className='font-semibold mb-1'>Name</label>
          <input
            className='py-2 px-4 border border-b-amber-800 rounded-2xl'
            type='text'
            name='name'
            placeholder='Enter name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='flex flex-col my-5'>
          <label htmlFor='email' className='font-semibold mb-1'>Email</label>
          <input
            className='py-2 px-4 border border-b-amber-800 rounded-2xl'
            type='email'
            name='email'
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}

          />
        </div>
        <button type='submit' className='w-full bg-amber-600 hover:bg-amber-700
         text-white font-bold py-2 px-4 rounded-2xl mt-4 cursor-pointer'>
          Submit
        </button>
      </form>
    </div>
  )
}
