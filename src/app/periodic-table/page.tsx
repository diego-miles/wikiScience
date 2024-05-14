// pages/index.tsx
import React from 'react';
import PeriodicTable from './PeriodicTable';
import NavbarContainer from '@/components/navigation/NavbarContainer';
import ChemicalFamilies from './ChemicalFamilies';
import States from './ElementStates'
import HydrogenElement from './Element'


const Home: React.FC = () => {
  return (
    <div>
      <NavbarContainer></NavbarContainer>
      <main className='h-[140rem] md:h-[140rem]'>
      <h1 className="text-center te my-4">Periodic Table of the Chemical Elements</h1>

      <div className='absolute left-0 right-0 overflow-auto md:overflow-hidden '>
        <div className='mx-auto   w-full max-w-[115rem] max-h-40  text-center'>
            <ChemicalFamilies></ChemicalFamilies>
          <HydrogenElement></HydrogenElement>
            <States></States>
        </div>
        <PeriodicTable />
      </div>
      </main>
    </div>
  );
};

export default Home;