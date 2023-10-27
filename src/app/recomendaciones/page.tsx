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
      <h1>Title 1</h1>
      <p>This is a paragraph.</p>
      <ScienceFieldsMenu data={data} />
    </div>
  );
};

export default ScienceFieldsPage;
