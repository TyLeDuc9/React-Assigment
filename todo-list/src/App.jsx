import React, { useState } from "react";
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setJobs(prev => [...prev, input.trim()]);
    setInput('');
  };

  const handleDelete = (index) => {
    setJobs(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 Todo List</h1>
        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 p-2 border rounded"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {jobs.map((job, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 border rounded"
            >
              <span>{job}</span>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
