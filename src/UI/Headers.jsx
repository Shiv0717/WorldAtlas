import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Headers = () => {
  // State to handle mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className='lg:p-8 bg-gray-900 drop-shadow-xl' style={{ fontFamily: 'Inter' }}>
        <div className='flex justify-between  lg:justify-between lg:items-center max-w-[1040px] m-auto'>
          <div className='logo hover:text-blue-400'>
            <NavLink to="/">
              <h1 className='lg:text-3xl text-white text-3xl py-3 px-3'>WorldAtlas</h1>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <nav className='hidden lg:block'>
            <ul className='flex text-xl lg:gap-6'>
              <li className='hover:text-blue-400'><NavLink to='/'>Home</NavLink></li>
              <li className='hover:text-blue-400'><NavLink to='/about'>About</NavLink></li>
              <li className='hover:text-blue-400'><NavLink to='/country'>Country</NavLink></li>
              <li className='hover:text-blue-400'><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
          </nav>

          {/* Mobile Hamburger Icon */}
          <div className='lg:hidden flex items-center'>
            <button onClick={toggleMenu} className='text-white pr-3 '>
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {menuOpen && (
        <nav className="lg:hidden bg-gray-900 text-white">
          <ul className='flex flex-col items-center text-xl py-4'>
            <li className='py-2 hover:text-blue-400'><NavLink to='/'>Home</NavLink></li>
            <li className='py-2 hover:text-blue-400'><NavLink to='/about'>About</NavLink></li>
            <li className='py-2 hover:text-blue-400'><NavLink to='/country'>Country</NavLink></li>
            <li className='py-2 hover:text-blue-400'><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Headers;
