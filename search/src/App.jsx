import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
    }, 500)
    console.log(query);
    return () => clearTimeout(timer)
  }, [query])

  useEffect(() => {
    if (debouncedQuery.trim() === '') {
      setResults([])
      return
    }

    fetch(`https://dummyjson.com/products/search?q=${debouncedQuery}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.products)
      })
      .catch(err => {
        console.log(err)
      })
  }, [debouncedQuery])

  return (
    <>
      <h1 className='text-3xl text-center my-6 font-semibold'>Search Products</h1>
      <div className="flex items-center justify-center">
        <input
          className="text-center p-2 border border-blue-500 rounded 
          transition duration-300 hover:border-green-500 focus:border-purple-500 focus:outline-none"
          type="text"
          placeholder="Search Products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="results grid grid-cols-4 gap-4 my-[3rem]">
        {results.length === 0 && debouncedQuery && (
          <p>No products found for "{debouncedQuery}"</p>
        )}
        {results.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-96 object-cover rounded-md mb-3"
            />
            <div>
              <h3 className="text-center font-medium text-gray-800 text-sm mb-1 truncate">
                {product.title}
              </h3>
              <p className="text-center text-red-600 font-semibold text-base">
                ${product.price}
              </p>
            </div>
          </div>
        ))}

      </div>
    </>
  )
}

export default App
