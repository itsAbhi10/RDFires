import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaPhone } from 'react-icons/fa';

/**
 * Header Component
 * Navigation bar with responsive menu for mobile devices
 * Includes logo, navigation links, and contact button
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'AMC', path: '/amc' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-fire-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <div className="bg-fire-red p-2 rounded">
              <span className="text-white">🔥</span>
            </div>
            <span className="hidden sm:inline">RD Fire Engineers</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-fire-red transition duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button - Desktop */}
          <a
            href="tel:+91-8888368101"
            className="hidden md:flex items-center gap-2 btn-secondary"
          >
            <FaPhone /> Call Us
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-fire-red transition duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+91-8888368101"
              className="btn-secondary inline-block text-center"
            >
              <FaPhone className="inline mr-2" /> Call Us
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
