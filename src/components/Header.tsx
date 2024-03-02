import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const googleFormUrl ='https://docs.google.com/forms/d/e/1FAIpQLSehQnLOvu8GiijkeMERNYO7smptUStWeaiZhcFtHGA2_McVQQ/viewform?usp=sf_link'


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
          <li>
          
      <a href={googleFormUrl}
       className="bg-green-500 text-white font-bold py-2 px-4 rounded inline-block hover:bg-green-600"
       target="_blank" rel="noopener noreferrer">
      APPLY NOW
      </a>
   
          </li>
        </ul>
        
      </div>
    </nav>
  );
}
