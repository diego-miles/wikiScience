import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerMenu}>
        <li>
          <Link href="/top-science-books">Top Science Books</Link>
        </li>
      </ul>
        <div className='globalHeight'></div>
        <p className={styles.textFooter}>--  WikiScience V1.0  --</p>
        <p className={styles.textFooter}>wikisciencemx@gmail.com</p>
    </footer>
  );
};


export default Footer
