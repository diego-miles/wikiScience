// pages/index.tsx
import React from 'react';
import PeriodicTable from './PeriodicTable';
import NavbarContainer from '@/components/navigation/NavbarContainer';
import ChemicalFamilies from './ChemicalFamilies';
import States from './ElementStates'
import HydrogenElement from './Element'
import {db} from '@/db/index'
import { unstable_cache } from 'next/cache';
import { contextDefinition} from '@/db/schema/elements'; // Reemplaza con la ruta real a tu esquema
import { eq } from 'drizzle-orm';




// const getDefinitionData = unstable_cache(async (slug: string) => {
//   const element = await db.select().from(contextDefinition).where(eq(contextDefinition.slug, slug)).get();
//   if (!element) console.log("not found");
//   return element;
// });



async function Home() {
  // const element = await getDefinitionData("alkali_metals");
  return (
    <div>
      {/* <NavbarContainer></NavbarContainer> */}
      <main className='h-[140rem] md:h-[140rem]'>
      <h1 className=" ">Periodic Table of the Chemical Elements</h1>
      {/* {element?.definition} */}
<p>element</p>
      <div className='absolute left-0 right-0 overflow-auto md:overflow-hidden '>
        <div className='mx-auto   w-fit  max-h-40  text-center'>
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