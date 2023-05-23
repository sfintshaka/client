import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`Navbar ${menuOpen ? 'open' : ''}`}>
      <div className='logo'>
        <Link to='/'>
          <img className='linklogo' src='../logo.svg' alt='AL-SYED logo' />
        </Link>
        <div>
          <h1>AL-SYED</h1>
          <h2>Student Accommodation</h2>
        </div>
      </div>
      <div>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} id='menuIcon' onClick={toggleMenu}>
          <img src='../menu.svg' alt='menu' />
        </div>
        <ul className={`navlinks ${menuOpen ? 'open' : ''}`} id='topnav'>
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'bg-sky-800' : '')} onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/studentlife' className={({ isActive }) => (isActive ? 'bg-sky-800' : '')} onClick={toggleMenu}>
              Student life
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'bg-sky-800' : '')} onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}
