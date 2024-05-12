"use client";
import { useState } from 'react';
import elementsData from '@/data/elementsData.json'; // Assuming this file now contains all elements

interface Element {
  symbol: string;
  name: string;
  family: string;
  atomicNumber: number;
  period: number;
  group: number;
  block: string;
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
        return 'bg-lanthanides';
      case 'Actinides':
        return 'bg-actinides';
      case 'Metalloids':
        return 'bg-metalloids';
      case 'Non-metal':
        return 'bg-non-metals';
      case 'Halogens':
        return 'bg-halogens';
      case 'Noble gas':
        return 'bg-noble-gas'; 
      default:
        return 'bg-gray-200'; // You might want to change this to a neutral background variable
    }
  };

  const renderElement = (element: Element) => (
    <td
      key={element.atomicNumber}
      className={`border border-gray-300 px-2 py-1 text-center ${getBackgroundColor(element.family)}`}
    >
      <span className="font-bold text-black block">{element.symbol}</span>
      <span className="text-sm text-black block">{element.name}</span>
      <span className="text-xs text-gray-400 block">{element.atomicNumber}</span>
    </td>
  );

  const renderEmptyCell = () => (
    <td className=" py-1" />
  );

  return (
    <div className="p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-h2">Periodic Table</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th colSpan={2} className="border px-2 py-1 text-center"></th>
            {[...Array(18)].map((_, i) => (
              <th key={i} className="border px-2 py-1 text-center text-black">
                {i + 1}
              </th>
            ))}
          </tr>
          <tr>
            <th colSpan={2} className="border px-2 py-1 text-center"></th>
            {[...Array(18)].map((_, i) => {
              const group = i + 1;
              const block = elements.find((el) => el.group === group)?.block || '';
              return (
                <th key={i} className="border px-2 py-1 text-center text-black">
                  {block}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {/* Periods 1-7 */}
          {[1, 2, 3, 4, 5, 6, 7].map((period) => (
            <tr key={period}>
              <td className="border px-1 py-1 text-center text-black">{period}</td>
              <td className="border px-1 py-1 text-center text-black"></td> 
              {[...Array(18)].map((_, group) => {
                const element = elements.find(
                  (el) => el.period === period && el.group === group + 1
                );
                return element ? renderElement(element) : renderEmptyCell();
              })}
            </tr>
          ))}

          {/* Lanthanides */}
          <tr>
            <td colSpan={3} className="border px-1 py-1 text-center"></td>
            {[57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71].map(
              (atomicNumber) => {
                const element = elements.find(
                  (el) => el.atomicNumber === atomicNumber
                );
                return element ? renderElement(element) : renderEmptyCell();
              }
            )}
            <td colSpan={2} className="border px-1 py-1 text-center"></td>
          </tr>

          {/* Actinides */}
          <tr>
            <td colSpan={3} className="border px-1 py-1 text-center"></td>
            {[89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103].map(
              (atomicNumber) => {
                const element = elements.find(
                  (el) => el.atomicNumber === atomicNumber
                );
                return element ? renderElement(element) : renderEmptyCell();
              }
            )}
            <td colSpan={2} className="border px-1 py-1 text-center"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PeriodicTable;