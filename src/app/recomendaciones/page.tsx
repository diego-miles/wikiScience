import React from 'react';
import { ScienceFieldsMenu } from './components/ScienceFieldsMenu';
import data from './menu/data';
import NavBar from '@/NavBarContainer';

export const metadata = {
  title: "Recomendaciones",
};

const ScienceFieldsPage: React.FC = () => {
  return (
    <div>
      <NavBar title='./' profileLink={''} menuLink=''/>
      <p>Ranking</p>
      <h1>MEJORES LIBROS DE CIENCA</h1>
      <p>Recomendaciones de libros para adquirir un conocimiento profundo clasificados por campo y nivel de especialización.</p>
      <ScienceFieldsMenu data={data} />
    </div>
  );
};

export default ScienceFieldsPage;
