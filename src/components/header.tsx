import  { useState } from 'react';
import styles from './styles/header.module.scss';
import companyLogo from '../assets/images/companyLogo2-removebg-preview-COPY.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className={`flex items-center justify-between lg:justify-evenly fixed inset-x-0 top-0 z-50 bg-white/60 backdrop-blur-md shadow-sm ${styles.headerContainer}`} aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-25 w-auto" src={companyLogo} alt="Logo" />
            </a>
          </div>

          {/* Hamburger */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className={styles.navLink}>Home</a>
            <a href="#" className={styles.navLink}>Services</a>
            <a href="#" className={styles.navLink}>Contact Us</a>
            <a href="#" className={styles.navLink}>Team</a>
          </div>
        </nav>

        {/* Mobile Links */}
        {menuOpen && (
          <div className="lg:hidden px-4 pb-4 pt-2 bg-white shadow-md">
            <a href="#" className="block py-2 text-lg text-gray-900">Home</a>
            <a href="#" className="block py-2 text-lg text-gray-900">Services</a>
            <a href="#" className="block py-2 text-lg text-gray-900">Team</a>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
