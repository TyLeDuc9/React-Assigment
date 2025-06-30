import React from 'react';
import './App.css';
import { Weather } from './components/Weather';

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-orange-300">
      <div className="w-1/4 bg-cyan-600 rounded-2xl shadow-lg p-6">
        <Weather />
      </div>
    </div>
  );
}

export default App;
