"use client";
import { useState } from 'react';
import elementsData from '@/data/elementsData.json';

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
        return 'bg-red-400';
      case 'Alkaline earth metal':
        return 'bg-orange-400';
      case 'Transition metal':
        return 'bg-yellow-300';
      case 'Lanthanides':
        return 'bg-pink-400';
      case 'Actinides':
        return 'bg-purple-400';
      case 'Metalloids':
        return 'bg-green-400';
      case 'Non-metal':
        return 'bg-blue-400';
      case 'Halogens':
        return 'bg-indigo-400';
      case 'Noble gas':
        return 'bg-cyan-400';
      default:
        return 'bg-gray-200';
    }
  };

  const renderElement = (element: Element) => (
    <td
      key={element.atomicNumber}
      className={`border border-gray-300 px-2 py-1 text-center ${getBackgroundColor(element.family)}`}
    >
      <span className="font-bold text-gray-800 block">{element.symbol}</span>
      <span className="text-sm text-gray-600 block">{element.name}</span>
      <span className="text-xs text-gray-400 block">
        {element.atomicNumber}
      </span>
    </td>
  );

  const renderEmptyCell = () => (
    <td className="border px-2 py-1" />
  );

  return (
    <div className="p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-h2">Periodic Table</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th colSpan={2} className="border px-2 py-1 text-center"></th>
            {[...Array(18)].map((_, i) => (
              <th key={i} className="border px-2 py-1 text-center text-gray-600">
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
                <th key={i} className="border px-2 py-1 text-center text-gray-600">
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
              <td className="border px-2 py-1 text-center text-gray-600">{period}</td>
              <td className="border px-2 py-1 text-center text-gray-600"></td>
              {[...Array(18)].map((_, i) => {
                const group = i + 1;
                const element = elements.find(
                  (el) =>
                    el.period === period &&
                    el.group === group &&
                    el.block !== 'f' // Exclude f-block elements 
                );
                return element ? renderElement(element) : renderEmptyCell();
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Lanthanides and Actinides */}
      <div className="flex justify-center mt-4">
        <table className="w-auto border-collapse border border-gray-300">
          <tbody>
            {/* Lanthanides */}
            <tr>
              {[...Array(15)].map((_, i) => {
                const group = i + 3; // Lanthanides start from group 3
                const element = elements.find(
                  (el) => el.period === 6 && el.group === group && el.block === 'f'
                );
                return element ? renderElement(element) : renderEmptyCell();
              })}
            </tr>
            {/* Actinides */}
            <tr>
              {[...Array(15)].map((_, i) => {
                const group = i + 3; // Actinides start from group 3
                const element = elements.find(
                  (el) => el.period === 7 && el.group === group && el.block === 'f'
                );
                return element ? renderElement(element) : renderEmptyCell();
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PeriodicTable; 