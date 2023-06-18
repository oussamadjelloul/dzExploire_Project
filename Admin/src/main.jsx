import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from './context/Auth.jsx'
import { NewCardContextProvider } from './context/NewCard.jsx'
import { EditCardContextProvider } from './context/EditCard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
    <AuthContextProvider >
    <NewCardContextProvider>
    <EditCardContextProvider>
      <App />
      <ToastContainer />
    </EditCardContextProvider>
    </NewCardContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
