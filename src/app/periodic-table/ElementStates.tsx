import React from 'react';

interface ElementInfo {
  symbol: string;
  state: string;
}

const elements: ElementInfo[] = [
  { symbol: 'C', state: 'Solid' },
  { symbol: 'Hg', state: 'Liquid' },
  { symbol: 'H', state: 'Gas' },
  { symbol: 'Rf', state: 'Unknown' },
];

const ChemicalElements: React.FC = () => {
  return (
    <div className="flex   relative -top-10 left-[25rem] xl:left-[16rem]     h-20">
      <div className="flex flex-col ">
        {elements.map((element, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-12 w-12 border border-[#2e76c8]  rounded-lg mr-4 mb-4"
          >
            <p className="text-xs py-3 font-medium">{element.symbol}</p>
          </div>
        ))}
      </div>
      <div className="absolute left-16 flex flex-col pt-2">
        {elements.map((element, index) => (
          <div key={index} className="flex items-center">
            <p className=" font-medium text-sm  pb-8">{element.state}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChemicalElements;
