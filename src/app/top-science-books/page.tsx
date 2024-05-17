import React from 'react';
import { ScienceFieldsMenu } from './ScienceFieldsMenu';
import data from '@/data/data';
import NavBar from '@/components/navigation/NavbarContainer';
import styles from './Recomendaciones.module.css';
import ScrollTopButton from '@/components/ScrollTopButton'


export const metadata = {
  title: "Recomendaciones",
};

const Page: React.FC = () => {
  return (
    <div>
      {/* <NavBar menuPath='./NavigationMenu'/> */}
      <main className={styles.animatedElement}>
        <section>

          <div className={styles.divContext}>
            <p className={styles.textContext}>Ranking</p>
          </div>
          <h1>Top Science Books</h1>
          <p>Delve into our community-curated anthology of science literature. From foundational principles to cutting-edge theories, embark on a journey to master complex scientific concepts.</p>
          <ScienceFieldsMenu data={data}/>
          <ScrollTopButton />
          
        </section>
      </main>
    </div>
  );
};

export default Page;
