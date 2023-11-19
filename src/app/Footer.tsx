import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerMenu}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/courses">Courses</Link>
        </li>
        <li>
          <Link href="/biographies">Biographies</Link>
        </li>
        <li>
          <Link href="/best-books">Best Books</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </footer>
  );
};


export default Footer
