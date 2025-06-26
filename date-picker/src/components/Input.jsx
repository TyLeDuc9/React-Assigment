import React, { useState } from 'react'
import { DateDisplay } from './DateDisplay';

export const Input = () => {
    const [date, setDate]=useState(" ")
  return (
    <div className="text-center">
      <input
        type="date"
        className="px-4 py-2 rounded-xl border bg-white shadow-sm focus:outline-none
         focus:ring-2 focus:ring-blue-400 focus:border-blue-40"
        onChange={(e)=>setDate(e.target.value)}


      />
      <DateDisplay date={date}/>
    </div>
  );
}
