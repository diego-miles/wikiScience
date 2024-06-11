"use client";
import { useState } from 'react';
import elementsData from '@/data/elementsData.json';
import Link from 'next/link';
// import ContextHoverCard from '@/components/ContextHoverCard'



// const elementsdata = 






interface Element {
  symbol: string;
  name: string;
  family: string;
  atomicNumber: number;
  period: number;
  group: number;
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

const formatElectronicConfiguration = (config: string) => {
  // Usar una expresión regular para encontrar los números al final de las subconfiguraciones y envolverlos en etiquetas <sup>
  return config.replace(/(\d)(?=\s|$)/g, '<sup>$1</sup>');
};


  const renderElement = (element: Element) => {
    const { row, col } = getElementPosition(element.period, element.group, element.atomicNumber);
    const style = {
      gridRow: row,
      gridColumn: col,
    };
    // Define hover styles for scaling and z-index
    const hoverStyles = {
      transform: 'scale(2)', // Increased scaling for better UX
      zIndex: 1, // Ensure hovered element is on top
    };
    return (
      <div
        key={element.atomicNumber} // Add the unique key
        className={`grid-item rounded-lg py-2 w-[4.5rem] text-center relative group transition-transform duration-300 ease-in-out ${getBackgroundColor(element.family)}`}
        style={style}
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyles)}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = '';
          e.currentTarget.style.zIndex = '';
          e.currentTarget.style.boxShadow = '';
        }}
      >
        <Link href={`/periodic-table/${element.name.toLowerCase()}`} className='hover:no-underline' passHref>
          <div className="flex flex-col items-center">
            <span className="font-black pb-2 text-sm text-black block dark:text-black -mb-2">{element.symbol}</span>
            <span className="text-[.8rem] font-semibold text-black dark:text-black block hover:no-underline">{element.name}</span>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className="mx-auto w-fit px-12">
      {/* Adjust the grid size to fit the periodic table correctly */}
      <div className="grid grid-cols-18 grid-rows-12 gap-2 mx-auto overflow-x-auto px-12  -mb-20"> 
        {elements.map(renderElement)} 
      </div>
    </div>
  );
};

export default PeriodicTable;