import React, {useState} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Footer'
import panda from '../../../assets/images/panda.png'

import './index.css'
const styles = ({ isActive }) => ({ color: isActive ? '#000000' : '#929292' });

import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

const NavBar = () => {
  const [burgerNav, setBurgerNav] = useState(false);
  const BurgerNavClick = () => {
    setBurgerNav(!burgerNav);
  }
  
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }
  
  // console.log(burgerNav)
  return (
    <>
      <header role="banner">
          <div className="logo-container">
            <img src={panda} alt="panda waving" className="logo"/>
            <p>Protect The Panda</p>
          </div>
          <div>
              <nav className='main-nav'>
                  <NavLink to="/" style={styles}>Home</NavLink>{' '}
                  <NavLink to="/profile" style={styles}>Profile</NavLink>{' '}
                  <NavLink to="/focus" style={styles}>Focus</NavLink>{' '}
                  <NavLink to="/login" style={styles}>Login</NavLink>{' '}
                  <NavLink to="/register" style={styles}>Register</NavLink>
                  <span> <button onClick={handleClick} >Logout</button> </span>
              </nav>

              <div onClick={BurgerNavClick} className='burger-nav'>
                <div className='burger-line'></div>
                <div className='burger-line'></div>
                <div className='burger-line'></div>
              </div>

              <div className='burger-nav-items'>
                  <NavLink to="/" style={styles}>Home</NavLink>{' '}
                  <NavLink to="/profile" style={styles}>Profile</NavLink>{' '}
                  <NavLink to="/focus" style={styles}>Focus</NavLink>{' '}
                  <NavLink to="/login" style={styles}>Login</NavLink>{' '}
                  <NavLink to="/register" style={styles}>Register</NavLink>
              </div>
          </div>
      </header>
        <Outlet />
    </>
  );
};

export default NavBar;


