import React from 'react';
import Link from 'next/link';
import ContextHoverCard  from '@/components/ContextHoverCard';
import {generateSlug} from '@/utils/slugGenerator'
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic';



interface ChemicalFamily {
  name: string;
  color: string;
}

const chemicalFamilies: ChemicalFamily[] = [
  { name: 'Alkali Metals', color: 'alkali-metal' },
  { name: 'Alkali earth metals', color: 'alkali-earth' },
  { name: 'Transition Metals', color: 'transition-metal' },
  { name: 'Post-Transition Metals', color: 'post-transition-metal' },
  { name: 'Metalloids', color: 'metalloids' },
  { name: 'Non-Metals', color: 'non-metals' },
  { name: 'Halogens', color: 'halogens' },
  // { name: 'Noble Gases', color: 'noble-gases' },
  { name: 'Lanthanides', color: 'lanthanide' },
  { name: 'Noble Gases', color: 'noble-gas' },
  { name: 'Actinides', color: 'actinide' },
];

const ChemicalFamilies: React.FC = () => {
  return (
    <div className="flex ">
      {chemicalFamilies.map((family, index) => (
        
        <div
          key={index}
          className={`flex items-center py-3    shadow-xl pr-2  rounded-lg text-white font-medium   bg-${family.color} `}
        >
      {/* <ContextHoverCard  buttonText={family.name}> */}
<ContextHoverCard buttonText={family.name} questionMarkColor="#ffffff">
      <Button  variant="link" className=' text-xs w-fit leading-tight pl-2'>{family.name}</Button>
</ContextHoverCard>

        </div>
      ))}
    </div>
  );
};


export default ChemicalFamilies;
