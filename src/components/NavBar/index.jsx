import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import image from '../../../assets/panda.png';

import '../../../assets/app.css'
// import panda from '../../images/panda.png'

import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

const styles = ({ isActive }) => ({ color: isActive ? '#000000' : '#272727' });

const NavBar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }


  return (
    <>
      <header role = "banner" className="header">
      <img src={image} alt="panda waving" className="logo"/>
        <nav className="links">
          <NavLink to="/" style={styles}>Home</NavLink>{' '}
          <NavLink to="/profile" style={styles}>Profile</NavLink>{' '}
          <NavLink to="/focus" style={styles}>Focus</NavLink>{' '}
          <NavLink to="/login" style={styles}>Login</NavLink>{' '}
          <NavLink to="/register" style={styles}>Register</NavLink>
          <span> <button onClick={handleClick} >Logout</button> </span>
        </nav>
        <Outlet />
        <footer className="footer">
          <p>Click <a href="https://wwf.panda.org/discover/knowledge_hub/endangered_species/giant_panda/whatyoucando/">here</a> to find out more information to protect the pandas.</p>
        </footer>
      </header>
    </>
  );
};

export default NavBar;


