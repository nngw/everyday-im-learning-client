import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './style.css'
import panda from '../../images/panda.png'

const styles = ({ isActive }) => ({ color: isActive ? '#000000' : '#272727' });

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <div className='icon'>
            <img src={panda} alt='logo' />
            <p> Protect The Panda</p>
          </div>
          <div className='main-nav'>
            <NavLink to="/" style={styles}>Home</NavLink>{' '}
            <NavLink to="/profile" style={styles}>Profile</NavLink>{' '}
            <NavLink to="/focus" style={styles}>Focus</NavLink>{' '}
            <NavLink to="/login" style={styles}>Login</NavLink>{' '}
            <NavLink to="/register" style={styles}>Register</NavLink>
          </div>

        </nav>
        <Outlet />
        <footer>
          <p>Click <a href="https://wwf.panda.org/discover/knowledge_hub/endangered_species/giant_panda/whatyoucando/">here</a> to find out more information to protect the pandas.</p>
        </footer>
      </header>
    </>
  );
};

export default NavBar;


