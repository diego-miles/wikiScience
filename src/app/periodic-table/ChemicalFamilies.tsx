import React from 'react';
import Link from 'next/link';
import ContextHoverCard  from '@/components/ContextHoverCard';
import {generateSlug} from '@/utils/slugGenerator'

interface ChemicalFamily {
  name: string;
  color: string;
}

const chemicalFamilies: ChemicalFamily[] = [
  { name: 'Alkali Metals', color: 'alkali-metal' },
  { name: 'Alkali earth metals', color: 'alkali-earth' },
  { name: 'Transition Metals', color: 'transition-metal' },
  { name: 'Post Transition Metal', color: 'post-transition-metal' },
  { name: 'Metalloids', color: 'metalloids' },
  { name: 'Non-Metals', color: 'non-metals' },
  { name: 'Halogens', color: 'halogens' },
  // { name: 'Noble Gases', color: 'noble-gases' },
  { name: 'Lanthanides', color: 'lanthanide' },
  { name: 'Noble Gases', color: 'noble-gas' },
  { name: 'Actinide', color: 'actinide' },
];

const ChemicalFamilies: React.FC = () => {
  return (
    <div className="flex items-stretch">
      {chemicalFamilies.map((family, index) => (
        
        <div
          key={index}
          className={`flex items-center justify-center py-4 px-2 shadow-xl  rounded-sm text-white font-medium min-w-[11rem] w-fit text-[1.2rem]  bg-${family.color} `}
        >
      <ContextHoverCard  buttonText={family.name}/>

      {/* <p  className='text-sm'>{family.name}</p> */}
        </div>
      ))}
    </div>
  );
};


export default ChemicalFamilies;
