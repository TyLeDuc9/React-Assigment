import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteUser } from './UserReducer';

export const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));

  }

  return (
    <div className='  w-4/5 bg-cyan-600 mx-auto my-[5%] shadow-2xl rounded-2xl p-4'>
      <h2 className='text-center text-white text-2xl font-bold py-4'>Crud App</h2>
      <Link to='/create' className='px-4 py-2 bg-fuchsia-600 hover:bg-fuchsia-700 
      text-white font-semibold rounded-2xl'>
        Create
      </Link>

      <div className='overflow-x-auto mt-4'>
        <table className='min-w-full bg-white rounded-2xl overflow-hidden'>
          <thead className='bg-gray-200 text-gray-700'>
            <tr>
              <th className='text-left py-2 px-4'>ID</th>
              <th className='text-left py-2 px-4'>Name</th>
              <th className='text-left py-2 px-4'>Email</th>
              <th className='text-left py-2 px-4'>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className='border-b hover:bg-gray-100'>
                <td className='py-2 px-4'>{user.id}</td>
                <td className='py-2 px-4'>{user.name}</td>
                <td className='py-2 px-4'>{user.email}</td>
                <td className='py-2 px-4'>
                  <Link to={`/update/${user.id}`} className='bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded mr-2'>
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(user.id)} className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
