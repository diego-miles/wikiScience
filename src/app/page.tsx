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
        {/* <div className={styles.ImageBooksContainer}>
                  </div> */}
      <h2 className={styles.title2}>Top Science Books</h2>
      <p>Explore our curated selection of science books.</p>
      <ul className={styles.bullets}>
        <li className={styles.customBullet}>
          <p>Book summaries and descriptions</p>
        </li>
        <li className={styles.customBullet}>
          <p>Book impact and relevance</p>
        </li>
        <li className={styles.customBullet}>
          <p>High-quality book cover images</p>
        </li>
        <li className={styles.customBullet}>
          <p>Syllabus previews</p>
        </li>
        <li className={styles.customBullet}>
          <p>Ratings and reviews from Amazon and Goodreads</p>
        </li>
        <li className={styles.customBullet}>
          <p>Personal reading experiences</p>
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
                                            {/* Use toSlug to convert subField.title into a slug */}
                                            <Link href={`/top-science-books/${toSlug(subField.title)}`} className='menu-link'>
                                                {subField.title}
                                            </Link>
                                        </li>
                                        {subField.topics.map((topic, tIdx) => (
                                            <li className={styles.subTopic} key={tIdx}>
                                                {/* Use toSlug for both subField.title and topic to create a nested slug */}
                                                <Link href={`/top-science-books/${toSlug(subField.title)}/${toSlug(topic)}`} >
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
