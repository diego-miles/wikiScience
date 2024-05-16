"use client"
// components/SearchBar.tsx
import React, { useState } from 'react';
import words from '@/data/words.json';
import Link from 'next/link';

const LocalSearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === '') {
      setSearchResults([]);
    } else {
      const filteredResults = words.filter((word) =>
        word.toLowerCase().includes(term)
      );
      setSearchResults(filteredResults.slice(0, 10)); // Limit to 10 results
    }
  };

  return (
    <div className="mx-auto border border-black/90 rounded-lg max-w-[70rem] ">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        className="w-full px-4 py-4 text-gray-900 text-lg bg-background1 border-4  rounded-md focus:outline-none focus:ring-2 focus:ring-[#4fcaff]"
      />
      <div className='relative -top-2 -left-1 lg:w-[70.4rem]'>
      {searchResults.length > 0 && (
        <ul className="absolute py-6 z-10 w-full bg-background1 border-[.2rem] border-[#d3bc8d] rounded-md shadow-lg  min-h-40 max-h-[20rem] overflow-auto  rounded-b-2xl">
          {searchResults.map((result, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-sky-300 cursor-pointer"
            ><Link className='text-black/90' href={`/dictionary/${result.toLowerCase().replace(/ /g, '-')}`}>
              {result}
            </Link>
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default LocalSearchBar;