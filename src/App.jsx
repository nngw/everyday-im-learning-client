
// import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { useAuthContext } from './hooks/useAuthContext'

import * as Pages from './pages'
import { NavBar } from './components'


function App() {

  const {user} = useAuthContext()

  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route 
            index 
            element={<Pages.Home />}/>
          <Route 
            path="/login"
            element={!user ? <Pages.Login /> : <Navigate to="/profile" />}/>
          <Route 
            path="/register" 
            element={!user ? <Pages.Register/> : <Navigate to="/profile" />}/>
          <Route 
            path="/focus" 
            element={user ? <Pages.Focus /> : <Navigate to="/login" />}/>
          <Route 
            path="/profile" 
            element={user ? <Pages.Profile /> : <Navigate to="/login"/>}/>
          <Route path="*" element={<Pages.NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
