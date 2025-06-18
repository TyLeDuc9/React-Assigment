import { useState } from 'react'
import './App.css'

const emojiDictionary = {
  happy: "😊",
  love: "❤️",
  angry: "😠",
  cool: "😎",
  sad: "😢",
  hello: "👋",
  fire: "🔥",
  party: "🥳",
  sleep: "😴",
  ok: "👌"
}

function App() {
  const [input, setInput]=useState(" ")
  const [translated, setTranslated]=useState(" ")
  const handleChane=(e)=>{
    const text=e.target.value.toLowerCase();
    setInput(text)
    const words=text.split(' ');
    const result=words.map((word)=>emojiDictionary[word] || word).join(" ");
    setTranslated(result)
  }



  return (
    <div className='p-4 text-center'>
      <h1 className='text-2xl my-5 font-semibold text-white'>Emoji Translator</h1>
      
      <input
        className='border border-blue-500 outline-none px-4 py-2 rounded bg-amber-50 w-full max-w-md mx-auto'
        placeholder='Type something like: happy love fire'
        value={input}
        onChange={handleChane}
 
      />
      
      <p className='mt-4 text-xl text-white'>{translated}</p>
    </div>
  )
}

export default App
