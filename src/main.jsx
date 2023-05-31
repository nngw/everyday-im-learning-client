import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { TaskContextProvider } from './context/TasksContext'
import { AuthContextProvider } from './context/AuthContext'

import App from './App.jsx'
import './main.css'

import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
      <TaskContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TaskContextProvider>
    </AuthContextProvider>
)
