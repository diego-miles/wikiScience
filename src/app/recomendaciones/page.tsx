import React from 'react';
import { ScienceFieldsMenu } from './components/ScienceFieldsMenu';
import data from '@/data';
import NavBar from '@/NavBarContainer';
import styles from './Recomendaciones.module.css';

export const metadata = {
  title: "Recomendaciones",
};



const ScienceFieldsPage: React.FC = () => {
  return (
    <div className=''>
      <NavBar title='./' profileLink={''} menuLink='http://localhost:3000/recomendaciones/menu'/>
      <main>
        <div className={styles.divContext}>
          <p className={styles.textContext}>Ranking</p>
        </div>
        <h1>MEJORES LIBROS DE CIENCA</h1>
        <p>Recomendaciones de libros para adquirir un conocimiento profundo clasificados por campo y nivel de especialización.</p>
        <ScienceFieldsMenu data={data}/>
      </main>
    </div>
  );
};

export default ScienceFieldsPage;
