import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { update } from './UserReducer'
export const Update = () => {
  const { id } = useParams()
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const existingUser = users.filter(f => f.id === Number(id))
  const { name, email } = existingUser[0]

  const [unname, setName] = useState(name)
  const [unemail, setEmail] = useState(email)

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateUser = {
      id: Number(id),
      name: unname,
      email: unemail
    };

    dispatch(update(updateUser))
    navigate('/')

  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='w-1/3 bg-gray-200 mx-auto my-[5%] p-6 rounded-xl shadow-xl'>
        <div className='flex flex-col my-5'>
          <h3 className='text-center text-green-500 text-2xl font-bold my-4'>Update new user</h3>
          <label htmlFor='name' className='font-semibold mb-1'>Name</label>
          <input
            className='py-2 px-4 border border-b-amber-800 rounded-2xl'
            type='text'
            name='name'
            placeholder='Enter name'
            value={unname}
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
            value={unemail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='w-full bg-neutral-700 hover:bg-neutral-600
         text-white font-bold py-2 px-4 rounded-2xl mt-4 cursor-pointer'>
          Update
        </button>
      </form>
    </div>
  )
}
