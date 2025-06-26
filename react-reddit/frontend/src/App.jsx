import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { EditPage } from './components/Edit/EditPage'
import { useSelector } from 'react-redux'

function App() {
  const [edit, setEdit] = useState(false)
  const themeColor = useSelector((state) => state.userReducer.themeColor)

  return (
    <div
      className="w-[80%] mx-auto my-4 h-[90vh] rounded-2xl shadow-xl transition-all duration-300"
      style={{
        background: `linear-gradient(to bottom, ${themeColor}, #4b5563, #5e626c)`
      }}
    >
      {edit ? (
        <EditPage setEdit={setEdit} />
      ) : (
        <Header setEdit={setEdit} />
      )}
    </div>
  )
}

export default App
