import React, { useState, useEffect } from 'react';

function UserForm({ handleAdd, editingUser, handleUpdate, cancelEdit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      handleUpdate({ ...editingUser, name, email });
    } else {
      handleAdd({ name, email });
    }
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Tên người dùng"
          required
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 
          focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email người dùng"
          required
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 
          focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          {editingUser ? 'Update' : 'Add'}
        </button>
        {editingUser && (
          <button
            type="button"
            onClick={cancelEdit}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default UserForm;
