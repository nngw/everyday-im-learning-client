import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import image from '../../../assets/panda.png';

const styles = ({ isActive }) => ({ color: isActive ? '#000000' : '#272727' });

const NavBar = () => {
  return (
    <>
      <header className="header">
      <img src={image} alt="panda waving" className="logo"/>
        <nav className="links">
          <NavLink to="/" style={styles}>Home</NavLink>{' '}
          <NavLink to="/user" style={styles}>Profile</NavLink>{' '}
          <NavLink to="/focus" style={styles}>Focus</NavLink>{' '}
          <NavLink to="/login" style={styles}>Login</NavLink>{' '}
          <NavLink to="/register" style={styles}>Register</NavLink>
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


