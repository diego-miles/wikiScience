import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className="bg-[#162b46] text-center py-32 mt-12">
      <ul className='pb-16'>
        <li>
          <Link href="#" className="text-white py-4 font-medium">Periodic Table</Link>
        </li>
        <li>
          <Link href="#" className="text-white py-4 font-medium">Top Science Books</Link>
        </li>
        <li>
          <Link href="#" className="text-white py-4 font-medium">Periodic Table</Link>
        </li>
      </ul>
        <div className='globalHeight '></div>
        <p className="text-white/80 text-base font-medium">wikisciencemx@gmail.com</p>
        <p className="text-white/40 text-sm">--  WikiScience V2.0  --</p>
    </footer>
  );
};


export default Footer
