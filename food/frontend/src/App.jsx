import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home/Home'
import { Food } from './components/Food/Food'
import { Cart } from './components/Cart/Cart'
import { Navbar } from './components/Navbar/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CartContext } from './context/CartContext'
function App() {
  const [foods, setFoods] = useState([])
  const [cart, setCart]=useState([])
  const [total, setTotal]=useState(0)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('/v1/foods')
        console.log(res.data);
        setFoods(res.data)
      } catch (err) {
        console.log('Error', err);
      }
    }
    getData()
  }, [])


  return (

    <CartContext.Provider value={{cart, setCart, total, setTotal}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/food' element={<Food foods={foods} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

      </Router>
    </CartContext.Provider>
  )
}

export default App
