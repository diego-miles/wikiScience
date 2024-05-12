// pages/index.tsx
import React from 'react';
import PeriodicTable from './PeriodicTable';
import NavbarContainer from '@/components/navigation/NavbarContainer';

const Home: React.FC = () => {
  return (
    <div>
      <NavbarContainer></NavbarContainer>
      <main className='h-[120rem]'>
      <h1 className="text-center te my-4">Periodic Table of the Chemical Elements</h1>
      <div className='absolute left-0 right-0 '>
      <PeriodicTable />
      </div>
      </main>
    </div>
  );
};

export default Home;