
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { useAuthContext } from './hooks/useAuthContext'

import * as Pages from './pages'
import { NavBar, TaskForm } from './componants'

function App() {

  const {user} = useAuthContext()

  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route 
            index 
            element={user ? <Pages.Home /> : <Navigate to="/login"/>}/>
          <Route 
            path="/login"
            element={!user ? <Pages.Login /> : <Navigate to="/" />}/>
          <Route 
            path="/signup" 
            element={!user ? <Pages.Register/> : <Navigate to="/" />}/>
          <Route 
            path="/focus" 
            element={user ? <Pages.Focus/> : <Navigate to="/login"/>}/>
          <Route 
            path="/tasks" 
            element={user ? <Pages.Tasks/> : <Navigate to="/login"/>}/>
          <Route path="/NotFound" element={<Pages.NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
