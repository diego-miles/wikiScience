import React from 'react';
import Link from 'next/link';

interface ChemicalFamily {
  name: string;
  color: string;
}

const chemicalFamilies: ChemicalFamily[] = [
  { name: 'Alkali Metal', color: 'alkali-metal' },
  { name: 'Alkali Earth', color: 'alkali-earth' },
  { name: 'Transition Metal', color: 'transition-metal' },
  { name: 'Post Transition Metal', color: 'post-transition-metal' },
  { name: 'Metalloids', color: 'metalloids' },
  { name: 'Non-Metals', color: 'non-metals' },
  { name: 'Halogens', color: 'halogens' },
  // { name: 'Noble Gases', color: 'noble-gases' },
  { name: 'Lanthanides', color: 'lanthanide' },
  { name: 'Noble Gas', color: 'noble-gas' },
  { name: 'Actinide', color: 'actinide' },
];

const ChemicalFamilies: React.FC = () => {
  return (
    <div className="flex items-stretch">

      {chemicalFamilies.map((family, index) => (
        
        <div
          key={index}
          className={`flex items-center justify-center py-4 px-2 shadow-xl  rounded-sm text-white font-medium min-w-[11rem] text-[1.2rem]  bg-${family.color} `}
        >
          {family.name}
        </div>
      ))}
    </div>
  );
};


export default ChemicalFamilies;
