import React from 'react';
import Image from 'next/image';
import NavBar from '@/components/NavbarContainer';
// import { ScienceFieldsMenu } from '@/components/ScienceFieldsMenu';
import data from '@/components/data';
import styles from './page.module.css';
import ScrollTopButton from '@/components/ScrollTopButton';
import Link from 'next/link';

const toSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '_');
};


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
          <h2>Unlock the secrets of science</h2>
  <p>Explore the vast expanse of human knowledge with our curated collection of top science books.</p>

          <ul className={styles.bullets}>
            <li className={styles.customBullet}>
              <p>Get an in-depth look at each book with our expert summaries.</p>
            </li>
            <li className={styles.customBullet}>
              <p>Discover how each book has impacted the world of science.</p>
            </li>
            <li className={styles.customBullet}>
              <p>Visualize the journey with stunning book cover images.</p>
            </li>
            <li className={styles.customBullet}>
              <p>Explore detailed outlines to get a sneak peek at the rich content.</p>
            </li>
            <li className={styles.customBullet}>
              <p>See what others have to say about each book on platforms like Amazon and Goodreads.</p>
            </li>
            <li className={styles.customBullet}>
              <p>Gain valuable insights from personal reading experiences and reviews.</p>
            </li>
          </ul>
          <div tabIndex={0} className={`${styles.menuWrapper}`}>
            <div className={styles.menuMain}>
              <div className={styles.navContainer}>
                {data.map((field, idx) => (
                  <div className={styles.branchContainer} key={idx}>
                    <div>
                      <li className={styles.titleField}>{field.title}</li>
                    </div>
                    <div className={styles.gridLayout}>
                      {field.subFields.map((subField, sIdx) => (
                        <ul key={sIdx}>
                          <li className={styles.subField}>
                            <Link href={`/top-science-books/${toSlug(subField.title)}`} className='menu-link'>
                              {subField.title}
                            </Link>
                          </li>
                          {subField.topics.map((topic, tIdx) => (
                            <li className={styles.subTopic} key={tIdx}>
                              <Link href={`/top-science-books/${toSlug(subField.title)}/${toSlug(topic)}`}>
                                {topic}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <ScienceFieldsMenu data={data}/> */}

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
