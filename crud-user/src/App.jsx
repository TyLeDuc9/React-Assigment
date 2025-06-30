import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import './App.css';

function App() {
  const [user, setUser] = useState([]);
  const [edit, setEdit] = useState(null); 
  const api = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(api);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const handleAdd = async (newUser) => {
    try {
      await axios.post(api, newUser);
      const addedUser = { ...newUser, id: Date.now() }; 
      setUser([...user, addedUser]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (updatedUser) => {
    try {
      const res = await axios.put(`${api}/${updatedUser.id}`, updatedUser);
      setUser(user.map(u => u.id === updatedUser.id ? res.data : u));
      setEdit(null); 
    } catch (err) {
      console.log(err);
    }
  };

  const cancelEdit = () => {
    setEdit(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-10 px-4">
      <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-cyan-400">📋 Quản lý người dùng</h1>

        <UserForm
          handleAdd={handleAdd}
          editingUser={edit}
          handleUpdate={handleUpdate}
          cancelEdit={cancelEdit}
        />

        <ul className="mt-6 space-y-4">
          {user.map((u) => (
            <li key={u.id} className='flex justify-between items-center bg-gray-800 px-4 py-3 rounded-lg'>
              <div>
                <p className='font-semibold text-lg'>{u.name}</p>
                <p className="text-sm text-gray-400">{u.email}</p>
              </div>
              <div className='space-y-2 space-x-4'>
                <button
                  className='bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg cursor-pointer'
                  onClick={() => setEdit(u)}
                >
                  Edit
                </button>
                <button
                  className='px-3 py-1 bg-red-500 rounded-lg hover:bg-red-700 cursor-pointer'
                  onClick={() => setUser(user.filter(item => item.id !== u.id))}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
