import React, { useState } from 'react';
import Styles from './nav.module.css';
import logo from '../../public/images/logo.png';
import Image from 'next/image';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={Styles.navbar}>
      <div className={Styles.menuIcon} onClick={toggleMenu}>
        &#9776; {/* Unicode for hamburger menu */}
      </div>
      <div className={Styles.logo}>
      <a href="/"> 
       <Image src={logo} alt="Logo" width={25} height={25} />
       </a>
      </div>
      <ul className={`${Styles.navList} ${isOpen ? Styles.showMenu : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="Gallery">Gallery</a></li>
      </ul>
    </nav>
  );
};



export default NavBar;
