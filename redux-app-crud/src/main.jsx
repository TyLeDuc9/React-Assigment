import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import {configureStore} from "@reduxjs/toolkit";
import './index.css'
import App from './App.jsx'
import UserReducer from './components/UserReducer.jsx'
export const store = configureStore({
  reducer:{
    users:UserReducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
