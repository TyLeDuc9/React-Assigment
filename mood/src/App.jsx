import { useState } from 'react'
import './App.css'
import { MoodSelector } from './components/MoodSelector'

function App() {
  const [mood, setMood] = useState(null)

  return (
    <div style={{ backgroundColor: mood ? mood.color : "#f1f3f5", minHeight: "100vh", padding: "20px" }}>
      <h1 className='text-center font-bold text-4xl'>Mood-Based Music App</h1>
      <MoodSelector onMoodChange={setMood} />
      {mood && (
        <p className='message text-[20px] text-center text-white'>{mood.message}</p>
      )}
    </div>
  )
}

export default App
