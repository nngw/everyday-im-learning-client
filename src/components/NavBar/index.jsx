import Reac, {useState} from 'react';
import { NavLink, Outlet } from 'react-router-dom';

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
                {user && (
                    <div>
                        <NavLink to="/profile" style={styles}>Profile</NavLink>
                        <NavLink to="/focus" style={styles}>Focus</NavLink>
                        <NavLink onClick={handleClick} className='logout-nav'>Logout</NavLink>
                    </div>
                )}

                {!user && (
                    <div>
                        <NavLink to="/login" style={styles}>Login</NavLink>
                        <NavLink to="/register" style={styles}>Register</NavLink>
                    </div>
                )}
              </nav>

              <div onClick={BurgerNavClick} className='burger-nav'>
                <div className='burger-line'></div>
                <div className='burger-line'></div>
                <div className='burger-line'></div>
              </div>

              <div className={`burger-nav-items ${burgerNav && 'active'}`}>
                <NavLink to="/" style={styles}>Home</NavLink>{' '}
                {user && (
                    <>
                        <NavLink to="/profile" style={styles}>Profile</NavLink>
                        <NavLink to="/focus" style={styles}>Focus</NavLink>
                        <NavLink onClick={handleClick} className='logout-nav'>Logout</NavLink>
                    </>
                )}

                {!user && (
                    <>
                        <NavLink to="/login" style={styles}>Login</NavLink>
                        <NavLink to="/register" style={styles}>Register</NavLink>
                    </>
                )}
              </div>
          </div>
      </header>

        <Outlet />

        <footer className="footer">
          <p>Click <a href="https://wwf.panda.org/discover/knowledge_hub/endangered_species/giant_panda/whatyoucando/">here</a> to find out more information to protect the pandas.</p>
        </footer>
    </>
  );
};

export default NavBar;


