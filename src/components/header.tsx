import { useState } from 'react';
import styles from './styles/header.module.scss';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  return (
    <header className={styles.header}>
      <nav className="px-4 lg:px-6 py-1 w-full">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl padding-global">
          {/* Logo */}
          <a href="/" className="flex items-center ps-5">
          <img decoding="async" width="100" height="286" sizes="105px" srcSet="https://framerusercontent.com/images/LtJOacjpCfrAdQJhzULOxsNXP8.png?scale-down-to=512 512w,https://framerusercontent.com/images/LtJOacjpCfrAdQJhzULOxsNXP8.png 768w" src="https://framerusercontent.com/images/LtJOacjpCfrAdQJhzULOxsNXP8.png?scale-down-to=512" alt=""/>
            {/* <img
              src={companyLogo}
              alt="Company Logo"
              width={100}
              height={50}
              className={styles.logo}
            /> */}
          </a>

          {/* Right Buttons */}
          <div className="flex items-center lg:order-2">
            <button className={`${styles.getStartedBtn} font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2`}>
              Get started
            </button>
            <button
              type="button"
              className={`${styles.hamburgerBtn} inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden`}
              onClick={toggleMobileMenu}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {/* Close Icon */}
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <div
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu"
          >
            <ul className={`${styles.navItems} flex flex-col mt-4 text-lg font-medium lg:flex-row lg:space-x-8 lg:mt-0`}>
              <li>
                <a href="#services" className="block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:p-0">
                  Services
                </a>
              </li>
              <li>
                <a href="#plans" className="block py-2 pr-4 pl-3 lg:hover:bg-transparent lg:border-0 lg:p-0">
                  Plans
                </a>
              </li>
              <li>
                <a href="#process" className="block py-2 pr-4 pl-3 lg:hover:bg-transparent lg:border-0 lg:p-0">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-2 pr-4 pl-3 lg:hover:bg-transparent lg:border-0 lg:p-0">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
