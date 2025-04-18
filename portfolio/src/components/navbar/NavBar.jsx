import React, { useState } from 'react';
import styles from '../navbar/NavBar.module.css';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => setIsOpen(!isOpen);
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <div className={styles.navBar}>
      <div className={styles.brand}>
        <h2>Funmilola Sanni | </h2>
        <h2 className={styles.soft}> Software Engineer</h2>
      </div>

      <button className={styles.menuButton} onClick={toggleNavBar}>☰</button>

      <div className={`${styles.rightNavbar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.menuLink}>
          {isHome ? (
            <>
              <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" onClick={() => setIsOpen(false)}>About Me</a>
              <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            </>
          ) : (
            <>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>About Me</Link>
              <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
              <Link to="/project" onClick={() => setIsOpen(false)}>Projects</Link>
            </>
          )}
        </div>

        <div className={styles.contactMeButton}>
          {isHome ? (
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <button>Contact Me</button>
            </a>
          ) : (
            <Link to="/contactMe" onClick={() => setIsOpen(false)}>
              <button>Contact Me</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
