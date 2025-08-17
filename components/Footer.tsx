
import React from 'https://esm.sh/react@18.2.0';
import { Link } from 'https://esm.sh/react-router-dom@6.25.1';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants.tsx';
import type { SocialLink } from '../types.ts';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Kaam Dhaam</h3>
            <p className="text-gray-400">
              Connecting you to trusted service providers for all your needs. Quality, reliability, and satisfaction, guaranteed.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link: SocialLink) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  {link.icon}
                </a>
              ))}
            </div>
             <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
                 <p className="text-gray-400">123 Service Lane, Cityville</p>
                 <p className="text-gray-400">contact@kaamdhaam.com</p>
             </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Kaam Dhaam. All rights reserved.</p>
          <div className="mt-2 space-x-4">
              <Link to="#" className="hover:text-cyan-400 text-sm">Privacy Policy</Link>
              <span>|</span>
              <Link to="#" className="hover:text-cyan-400 text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;