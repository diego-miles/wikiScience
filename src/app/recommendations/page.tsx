import React from 'react';
import { ScienceFieldsMenu } from './ScienceFieldsMenu';
import data from '@/data';
import NavBar from '../../components/NavBarContainer';
import styles from './Recomendaciones.module.css';
import ScrollTopButton from '@/ScrollTopButton'


export const metadata = {
  title: "Recomendaciones",
};

const Page: React.FC = () => {
  return (
    <div>
      <NavBar/>
      <main className={styles.animatedElement}>
          <div className={styles.divContext}>
            <p className={styles.textContext}>Ranking</p>
          </div>
          <h1>Top Science Books</h1>
          <p>Delve into our community-curated anthology of science literature, where every book is a portal to unraveling the mysteries of the universe. From foundational principles to cutting-edge theories, embark on a journey to master complex scientific concepts.</p>
          <ScienceFieldsMenu data={data}/>
          <ScrollTopButton />
          
      </main>
    </div>
  );
};

export default Page;
