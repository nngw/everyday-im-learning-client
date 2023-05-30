import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import * as Pages from './pages'
import { NavBar } from './components'
import "../assets/app.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Pages.Home />}/>
          <Route path="/login" element={<Pages.Login />}/>
          <Route path="/register" element={<Pages.Register/>}/>
          <Route path="/focus" element={<Pages.Focus/>}/>
          <Route path="/tasks" element={<Pages.Tasks/>}/>
          <Route path="/NotFound" element={<Pages.NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
