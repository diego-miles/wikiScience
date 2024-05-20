"use client";
import { useState } from 'react';
import elementsData from '@/data/elementsData.json';
import Link from 'next/link';
// import ContextHoverCard from '@/components/ContextHoverCard'


interface Element {
  symbol: string;
  name: string;
  family: string;
  atomicNumber: number;
  period: number;
  group: number;
  block: string;
  electronicConfiguration: string;
  atomicMass: number;
}

const PeriodicTable: React.FC = () => {
  const [elements, setElements] = useState<Element[]>(elementsData);

  const getBackgroundColor = (family: string): string => {
    switch (family) {
      case 'Alkali metal':
        return 'bg-alkali-metal';
      case 'Alkaline earth metal':
        return 'bg-alkali-earth';
      case 'Transition metal':
        return 'bg-transition-metal';
      case 'Lanthanides':
        return 'bg-lanthanide';
      case 'Post-transition metal':
        return 'bg-post-transition-metal';
      case 'Actinides':
        return 'bg-actinide';
      case 'Metalloid':
        return 'bg-metalloids';
      case 'Non-metal':
        return 'bg-non-metals';
      case 'Halogens':
        return 'bg-halogens';
      case 'Noble gas':
        return 'bg-noble-gas';
      default:
        return 'bg-slate-500';
    }
  };

  const getElementPosition = (period: number, group: number, atomicNumber: number): { row: number, col: number } => {
    if (atomicNumber >= 57 && atomicNumber <= 71) {
      // Lanthanides
      return { row: 9, col: atomicNumber - 54 };
    } else if (atomicNumber >= 89 && atomicNumber <= 103) {
      // Actinides
      return { row: 10, col: atomicNumber - 86 };
    } else {
      // Regular elements
      return { row: period, col: group };
    }
  };


  

  const renderElement = (element: Element) => {
    const { row, col } = getElementPosition(element.period, element.group, element.atomicNumber);
    const style = {
      gridRow: row,
      gridColumn: col,
    };
    // Define hover styles for scaling and z-index
    const hoverStyles = {
      transform: 'scale(1.2)', // Increased scaling for better UX
      zIndex: 1, // Ensure hovered element is on top
    };
    return (
      <div 
        className={`grid-item m-[.1rem] rounded-lg  py-2 w-[7.4rem]
          text-center relative group transition-transform duration-300 ease-in-out
          ${getBackgroundColor(element.family)}`}
        style={style}
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyles)}
        onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.zIndex = '' }}
      >
        {/* Brillo en hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white opacity-0 group-hover:opacity-30 transition duration-500 rounded-lg"></div>
        {/* Borde brillante en hover */}
        <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#eae9c6] group-hover:shadow-lg rounded-xl transition duration-100 group-hover:-m-[.3rem] "></div>
        {/* Sombra en hover */}
        <div className="absolute inset-0 shadow-lg opacity-0 group-hover:opacity-100 transition duration-100 rounded-lg "></div >
        <Link href={`/periodic-table/${element.name.toLowerCase()}`} className='hover:no-underline' passHref key={element.atomicNumber}>
          <div className="flex flex-col items-center">
            {/* Configuración electrónica en la parte superior */}
            <span className="text-[.9rem]  min-h-8 text-white dark:text-white tracking-wider font-thin">{element.electronicConfiguration}</span> 
            <span className="text-lg font-black text-black block dark:text-black -mb-2 ">{element.symbol}</span>
            <span className="text-[1rem] font-bold text-black dark:text-black block hover:no-underline'">{element.name}</span>
            <span className="text-2xs text-gray-200 block dark:text-gray-200">{element.atomicNumber}</span>
          </div>
        </Link>
      </div>
    );
  };

  

  return (
    <div className="mx-auto w-fit py-12 px-4">
      {/* Agrega la clase "overflow-auto" para permitir el desplazamiento */}
      <div className="grid grid-cols-18 grid-rows-10 gap-0 mx-auto">
        {elements.map((element) => renderElement(element))}
      </div>
    </div>
  );
};

export default PeriodicTable;