
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import * as Pages from './pages'
import { NavBar, TaskForm } from './componants'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Pages.Home />}/>
          <Route path="/login" element={<Pages.Login />}/>
          <Route path="/register" element={<Pages.Register/>}/>
          <Route path="/focus" element={<Pages.Focus/>}/>
          <Route path="/user" element={<Pages.Profile/>}/>
          <Route path="/NotFound" element={<Pages.NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
