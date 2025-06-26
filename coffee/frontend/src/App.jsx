import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home/Home'
import { Drink } from './components/Drink/Drink'
import { Cart } from './components/Cart/Cart'
import { Navbar } from './components/Navbar/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CartContext } from '../Context/CartContext'
function App() {
  const [drinks, setAllDrinks] = useState([])
  const [cart, setCart]=useState([])
  const [total, setTotal]=useState(0)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('/v1/drinks') // gọi API lấy danh sách đồ uống
        setAllDrinks(res.data)
      } catch (error) {
        console.error('Lỗi khi gọi API:', error)
      }
    }

    getData()
  }, [])

  return (
    <CartContext.Provider value={{cart, setCart, total, setTotal}}>
      <Router>
        <Navbar />
        <div className="px-6 py-4">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/drink' element={<Drink drinks={drinks} />} /> 
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>

  )
}

export default App
