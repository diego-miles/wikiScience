"use client";
import { useState } from 'react';
import elementsData from '@/data/elementsData.json';
import Link from 'next/link';

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
      case 'Actinide':
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
        return 'bg-gray-400';
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
    <div className={`grid-item m-[.1rem] rounded-lg px-0 py-2 w-fit min-w-[7.2rem] 
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

      <Link href={`/periodic-table/${element.name}`} passHref key={element.atomicNumber}>
        <div>
          <span className="text-base font-black text-black block">{element.symbol}</span>
          <span className="text-[1rem] px-0 font-bold  text-black block ">{element.name}</span>
          <span className="text-2xs text-gray-200 block">{element.atomicNumber}</span>
        </div>
      </Link>
    </div>
  );
};
  return (
    <div className="p-1 rounded-lg shadow-md mx-auto w-fit">
      <div className="grid grid-cols-18 grid-rows-10 gap-0 mx-auto ">
        {elements.map((element) => renderElement(element))}
      </div>
    </div>
  );
};

export default PeriodicTable; 