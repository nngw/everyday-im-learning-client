import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav>
        NavBar
      </nav>

      <Outlet />

      <footer>Footer</footer>
      
    </>
  )
}

export default NavBar
