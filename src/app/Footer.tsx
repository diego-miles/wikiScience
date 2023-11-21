import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerMenu}>
        <li>
          <Link href="/recommendations">Best Science Books</Link>
        </li>
        <div className='globalHeight'></div>
        <li>
          <p className={styles.goldText}>2024</p>
          <p className={styles.textFooter}>--  WikiScience V0.0  --</p>
          <p className={styles.textFooter}>wikisciencemx@gmail.com</p>
        </li>
      </ul>
    </footer>
  );
};


export default Footer
