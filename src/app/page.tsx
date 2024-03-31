import React from 'react';
import Image from 'next/image';
import NavBar from '@/components/NavbarContainer';
import { ScienceFieldsMenu } from '@/components/ScienceFieldsMenu';
import data from '@/components/data';
import styles from './page.module.css';
import ScrollTopButton from '@/components/ScrollTopButton';

const HomePage: React.FC = () => {
  return (
    <div>
      <NavBar />

      <main className={styles.mainContent}>
        <div className={styles.logoContainer}>
                  </div>

        <header className={styles.headerSection}>
          <h1 className={styles.h1}>Wiki Science</h1>
          <p className={styles.center}>A next-generation educational platform. Powered by AI.</p>
        </header>

        <section className={styles.recommendationIntro}>
        {/* <div className={styles.ImageBooksContainer}>
                  </div> */}
          <h2>Top Science Books</h2>
          <p>Discover the depths of the universe, the intricacies of biology, and more in our handpicked science book collection. Here’s what you’ll find:</p>
          <ul className={styles.bullets}>
            <li className={styles.customBullet}><p>Dive deep into each book with our thorough and insightful content descriptions.</p></li>
            <li className={styles.customBullet}><p>Understand the impact and relevance of each work in the world of science.</p></li>
            <li className={styles.customBullet}><p>Visualize the journey with high-quality images of book covers.</p></li>
            <li className={styles.customBullet}><p>Explore detailed syllabuses to preview the rich content.</p></li>
            <li className={styles.customBullet}><p>See how others rated the books on platforms like Amazon and Goodreads.</p></li>
            <li className={styles.customBullet}><p>Gain insights from personal reading experiences and reviews.</p></li>
          </ul>
        </section>

        <ScienceFieldsMenu data={data}/>

        <ScrollTopButton />

        {/* Additional sections can be added here */}

      </main>

      <footer className={styles.footer}>
        {/* Footer content here */}
      </footer>
    </div>
  );
};

export default HomePage;
