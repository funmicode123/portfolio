import React from 'react';
import styles from '../footer/Footer.module.css';
function Footer() {
  return (
    <div className={styles.footer}>
      <h5>© Designed by Sanni Funmilola, {new Date().getFullYear()}.</h5>
    </div>
  )
}

export default Footer
