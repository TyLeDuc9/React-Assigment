import React, { useState } from 'react';

const usersData = [
  { id: 1, name: 'Nguyễn Văn A', age: 25 },
  { id: 2, name: 'Trần Thị B', age: 30 },
  { id: 3, name: 'Lê Văn C', age: 22 },
  { id: 4, name: 'Phạm Thị D', age: 28 },
];

export const UserSearch = () => {
  const [search, setSearch] = useState('');
  const filterSearch = usersData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.age.toString().includes(search)
  );


  return (
    <div className='p-6 max-w-md mx-auto bg-cyan-500 rounded shadow text-white'>
      <h2 className='text-center text-2xl py-4'>Tìm kiếm theo tuổi</h2>

      <input
        type="text"
        placeholder="Nhập tuổi người dùng..."
        className="w-full border px-3 py-2 rounded mb-4 text-black"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filterSearch.length > 0 ? (
        <ul>
          {filterSearch.map((user) => (
            <li key={user.id} className='py-1'>
              <strong>{user.name}</strong> - {user.age} tuổi
            </li>
          ))}
        </ul>
      ) : (
        <p>Không tìm thấy người dùng phù hợp.</p>
      )}
    </div>
  );
};
