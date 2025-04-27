import { useState } from 'react';
import styles from './styles/header.module.scss';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  return (
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
          <button className={`${styles.getStartedBtn} font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 flex items-center gap-2`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              className="w-5 h-5"
              style={{ userSelect: "none", display: "inline-block", flexShrink: 0 }}
              fill="currentColor"
            >
              <g>
                <path d="M146.34,98.34,164.69,80,146.34,61.66a8,8,0,0,1,11.32-11.32L176,68.69l18.34-18.35a8,8,0,0,1,11.32,11.32L187.32,80l18.34,18.34a8,8,0,0,1-11.32,11.32L176,91.31l-18.34,18.35a8,8,0,0,1-11.32-11.32Zm77.54,84.74A56.26,56.26,0,0,1,168,232C88.6,232,24,167.4,24,88A56.26,56.26,0,0,1,72.92,32.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,109.39,104c-.18.27-.37.52-.57.77L88,129.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,223.88,183.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L96,95.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,40,88,128.14,128.14,0,0,0,168,216,40.21,40.21,0,0,0,208,181.07Z" />
              </g>
            </svg>
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
  );
};

export default Header;
