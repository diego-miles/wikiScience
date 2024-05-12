// pages/index.tsx
import React from 'react';
import PeriodicTable from './PeriodicTable';
import NavbarContainer from '@/components/navigation/NavbarContainer';

const Home: React.FC = () => {
  return (
    <div>
      <NavbarContainer></NavbarContainer>
      <h1 className="text-center text-3xl my-4">Tabla Periódica de los Elementos</h1>
      <PeriodicTable />
    </div>
  );
};

export default Home;