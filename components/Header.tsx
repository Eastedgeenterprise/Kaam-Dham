
import React, { useState, useEffect } from 'https://esm.sh/react@18.2.0';
import { NavLink as RouterNavLink, useLocation } from 'https://esm.sh/react-router-dom@6.25.1';
import { NAV_LINKS } from '../constants.tsx';
import type { NavLink } from '../types.ts';
import { MenuIcon, XIcon } from './icons.tsx';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <RouterNavLink to="/" className="text-3xl font-bold text-cyan-600">
          Kaam Dhaam
        </RouterNavLink>
        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link: NavLink) => (
            <RouterNavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-600 hover:text-cyan-500 transition-colors duration-300 text-lg ${isActive ? 'text-cyan-500 font-semibold' : ''}`
              }
            >
              {link.name}
            </RouterNavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-cyan-500 focus:outline-none">
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {NAV_LINKS.map((link: NavLink) => (
              <RouterNavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                 className={({ isActive }) =>
                    `text-gray-600 hover:text-cyan-500 transition-colors duration-300 text-lg ${isActive ? 'text-cyan-500 font-semibold' : ''}`
                 }
              >
                {link.name}
              </RouterNavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;