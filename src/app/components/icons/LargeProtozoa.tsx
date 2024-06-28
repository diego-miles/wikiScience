import React from 'react';

const Protozoa = ({ width = 'auto', height = 'auto' }) => (
  <svg
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width}
    height={height}
  >
    <style>{`.a{fill:#be2814}.b{fill:#dc4632}.c{fill:#fa6450}`}</style>
    <path className="a" d="m263.5 29.7c-1.6 0.8-4.1 2.5-5.3 3.7-1.3 1.1-3.3 3.8-4.3 5.9-1.5 2.9-1.9 5.9-1.9 14.2v10.5h8c0-15.1 0.5-18.5 1.8-21 1-2 3.2-4.2 5.2-5.2 2.5-1.3 5.9-1.8 12.3-1.8h8.7v-8c-18.6 0.1-22.3 0.5-24.5 1.7zm-77.6 19c-1.9 2.1-4.1 5.6-4.8 7.8-0.9 2.5-1.1 5.7-0.7 8.5 0.4 2.5 1.7 6 2.9 7.9 1.2 1.9 5.1 5.7 8.7 8.3 3.6 2.7 7.1 4.8 7.7 4.8 0.7 0 2.5-1 3.9-2.2l2.7-2.3c-11.3-8.5-15.2-11.9-16-13-0.7-1.1-1.3-3.9-1.3-6.3 0-3.3 0.7-4.9 3.2-7.8l3.3-3.5-6-6zm141 17.9c-1.9 0.8-7.4 4.4-12.2 8-4.8 3.5-8.8 6.6-8.8 6.9 0 0.3 1.3 1.6 2.8 2.9 2.2 1.9 3.1 2.2 4.7 1.3 1.1-0.5 4.5-2.9 7.5-5.3 3.1-2.3 7.1-4.9 9-5.8 2.6-1.1 4.5-1.3 7-0.6 2 0.5 5.6 2.7 8 5l4.5 4.1 6-6.2c-6.9-6.4-10.8-9-13-10-2.2-1-5.8-1.9-8-1.8-2.2 0-5.5 0.7-7.5 1.5zm-187 39.9c0 8.3 0.4 11.3 1.9 14.2 1.1 2.1 3 4.8 4.3 6 1.3 1.2 4 2.9 6.1 3.7 2.6 1.1 7 1.6 14.2 1.6 10.1 0 10.6-0.1 11-2.3 0.3-1.2 0.5-3 0.5-4 0-1.5-1.1-1.7-9.7-1.7-7.3 0-10.6-0.5-13.3-1.8-2-1-4.2-3.2-5.2-5.2-1.3-2.5-1.8-5.9-1.8-12.3v-8.7h-8zm193.6 20.2c0.3 1.6 0.8 3.4 1 4 0.3 0.9 3.2 1.3 9.7 1.3 6.8 0 10.2 0.5 12.7 1.7 2 1 4.3 3.3 5.3 5.3 1.3 2.5 1.7 5.9 1.7 12.2v8.8h8c0-16.8-0.5-21.2-1.5-23.8-0.9-2-2.6-4.8-3.8-6.1-1.2-1.2-3.8-3.2-5.9-4.2-3.1-1.6-5.9-1.9-15.8-1.9h-12zm-193.6 43.7c0 8.4 0.4 11.3 1.9 14.3 1.1 2.1 3 4.7 4.3 5.9 1.3 1.2 4 2.9 6.1 3.8 2.5 1 7 1.5 13.7 1.5h10v-8c-15 0-18.4-0.4-21-1.7-2-1-4.2-3.3-5.2-5.3-1.3-2.5-1.8-5.9-1.8-12.2v-8.8h-8zm196 21.5v4c15.1 0 18.5 0.5 21 1.8 2 1 4.3 3.2 5.3 5.2 1.2 2.6 1.7 6 1.7 12.3v8.7h8c0-16.7-0.5-21.2-1.5-23.7-0.9-2.1-2.6-4.8-3.8-6.1-1.2-1.3-3.9-3.2-5.9-4.3-3-1.5-5.9-1.9-14.3-1.9h-10.5zm-196 42.5c0 8.4 0.4 11.3 1.9 14.3 1.1 2.1 3 4.7 4.3 5.9 1.3 1.2 4 2.9 6.1 3.8 2.5 1 7 1.5 13.7 1.5h10v-8c-15 0-18.4-0.4-21-1.7-2-1-4.2-3.3-5.2-5.3-1.3-2.5-1.8-5.9-1.8-12.2v-8.8h-8zm196 21.5v4c15.1 0 18.5 0.5 21 1.8 2 1 4.3 3.2 5.3 5.2 1.2 2.6 1.7 6 1.7 12.3v8.7h8c0-16.7-0.5-21.2-1.5-23.7-0.9-2.1-2.6-4.8-3.8-6.1-1.2-1.3-3.9-3.2-5.9-4.3-3-1.5-5.9-1.9-14.3-1.9h-10.5zm-196 42.5c0 8.4 0.4 11.3 1.9 14.3 1.1 2.1 3 4.7 4.3 5.9 1.3 1.2 4 2.9 6.1 3.8 2.5 1 7 1.5 13.7 1.5h10v-8c-15 0-18.4-0.4-21-1.7-2-1-4.2-3.3-5.2-5.3-1.3-2.5-1.8-5.9-1.8-12.2v-8.8h-8zm196 21.5v4c15.1 0 18.5 0.5 21 1.8 2 1 4.3 3.2 5.3 5.2 1.2 2.6 1.7 6 1.7 12.3v8.7h8c0-16.7-0.5-21.2-1.5-23.7-0.9-2.1-2.6-4.8-3.8-6.1-1.2-1.3-3.9-3.2-5.9-4.3-3-1.5-5.9-1.9-14.3-1.9h-10.5zm-196 42.5c0 8.4 0.4 11.3 1.9 14.3 1.1 2.1 3 4.7 4.3 5.9 1.3 1.2 4 2.9 6.1 3.8 2.6 1.1 7.1 1.5 14.7 1.5 9.9 0 11-0.1 11-1.7 0-1-0.2-2.8-0.5-4-0.4-2.1-0.9-2.3-9.7-2.3-6.8 0-10.2-0.4-12.8-1.7-2-1-4.2-3.3-5.2-5.3-1.3-2.5-1.8-5.9-1.8-12.2v-8.8h-8zm194.6 19.8c-0.3 1.2-0.5 3-0.5 4-0.1 1.5 1.1 1.7 9.7 1.7 7.3 0 10.6 0.5 13.2 1.8 2 1 4.3 3.2 5.3 5.2 1.2 2.6 1.7 6 1.7 12.3v8.7h8c0-16.7-0.5-21.2-1.5-23.7-0.9-2.1-2.6-4.8-3.8-6.1-1.2-1.3-3.9-3.2-5.9-4.3-3-1.5-5.9-1.9-14.7-1.9-10.4 0-10.9 0.1-11.5 2.3zm-143.1 49c-3.8 2.8-8.5 5.7-10.5 6.3-2.3 0.8-4.5 0.9-6.5 0.3-1.6-0.5-4.9-2.8-7.2-5.1l-4.2-4.3-6.1 6c6.6 6.8 10.3 9.6 12.5 10.6 2.2 1.1 5.7 1.9 7.8 1.9 2 0 5.4-0.7 7.5-1.5 2-0.9 7.7-4.6 12.6-8.3l8.9-6.7c-4.1-3.4-5.9-4.5-6.6-4.5-0.7 0-4.4 2.4-8.2 5.3zm117.7-3.7c-1.4 0.8-2.4 2.1-2.3 2.7 0 0.7 3.1 3.5 6.8 6.2 3.6 2.8 7.3 5.9 8 7 0.7 1.1 1.4 3.8 1.4 6 0 2.9-0.8 5.2-3 8l-2.9 4 6 6c3.9-4.6 5.9-8 7.1-10.5 1.6-3.5 1.9-5.6 1.3-9.5-0.3-2.7-1.6-6.5-2.8-8.4-1.3-1.9-5.2-5.6-8.8-8.3-3.5-2.6-6.9-4.8-7.5-4.8-0.5 0-2 0.7-3.3 1.6zm-57.2 29.2c0 6.3-0.5 9.7-1.7 12.2-1 2-3.3 4.3-5.3 5.3-2.5 1.3-5.9 1.7-12.2 1.7h-8.8v8c18.9 0 21.8-0.4 24.8-1.9 2-1 4.7-2.9 5.9-4.2 1.2-1.3 2.9-4 3.8-6.1 1-2.6 1.5-7 1.5-13.8v-10h-8z"/><path className="b" d="m238.5 65.5c-3.3 0.7-9.4 2.6-13.5 4.3-4.1 1.7-10.1 5-13.3 7.2-3.1 2.2-6 3.7-6.4 3.3-0.3-0.5-0.3-0.2 0 0.5 0.4 0.7-0.4 1.9-1.9 3-1.4 0.9-4.4 3.7-6.7 6.1-2.3 2.3-5.9 6.8-8 10-2 3.1-5.1 9-6.8 13.1-1.7 4.1-3.6 9.8-4.2 12.5-0.7 3.3-1.2 45.7-1.4 128-0.3 86.7-0.1 124.6 0.7 128.5 0.6 3 2.1 8.6 3.3 12.5 1.2 3.8 4 10 6.2 13.7 2.2 3.7 6 9.1 8.4 12 2.5 2.9 5.8 6.2 7.5 7.4 1.7 1.1 3 2.6 2.9 3.2-0.2 0.7 0 1.1 0.5 1 0.4-0.1 3.4 1.5 6.7 3.7 3.3 2.1 8.5 4.9 11.5 6.3 3 1.3 9.3 3.3 14 4.4 7 1.6 10.8 1.9 21 1.5 9.2-0.3 14.6-1.1 20.5-2.8 4.4-1.3 11.4-4.3 15.5-6.7 4.1-2.3 9.5-6.1 12-8.3 2.5-2.2 6-5.4 7.8-7.2 1.8-1.8 5.3-6.1 7.7-9.7 2.4-3.6 5.6-9.2 7-12.5 1.5-3.3 3.4-9.1 4.4-13 1.4-6.3 1.6-19.3 1.6-130.5 0-115-0.1-124-1.8-131-1-4.1-3.8-11.7-6.2-16.8-2.5-5-7-12.1-10-15.7-3-3.6-5.2-6.8-4.8-7.2 0.5-0.3 0.4-0.4-0.2 0-0.6 0.3-3.5-1.7-6.5-4.5-3.3-2.9-9.6-6.9-15.5-9.8-5.6-2.8-13.2-5.6-17.3-6.5-4.1-0.8-11.8-1.5-17.9-1.4-6 0-13.5 0.6-16.8 1.4z"/><path className="c" d="m242 81.5c-3.6 0.8-10.3 3.4-15 5.7-6.4 3.2-10.3 6-16 11.8-5.8 5.7-8.6 9.5-11.8 16-2.3 4.7-4.9 11.7-5.7 15.5-1.2 5.9-1.5 25.3-1.5 125.5 0 100.2 0.3 119.6 1.5 125.5 0.8 3.9 3.4 10.8 5.7 15.5 3.1 6.4 6 10.3 11.2 15.5 3.9 3.9 9.6 8.5 12.6 10.2 3 1.8 8.9 4.5 13 5.9 5.1 1.8 10.4 2.8 16.5 3.1 6.1 0.3 11.4 0 16.5-1.1 4.1-0.8 11.3-3.5 16-5.8 6.4-3.2 10.4-6.1 16-11.8 5.7-5.6 8.6-9.6 11.8-16 2.4-4.8 4.9-11.7 5.8-16 1.3-6.5 1.5-23.3 1.2-127.5l-0.3-120c-4.4-12.4-7.6-19.2-9.9-23-2.4-3.8-7.5-9.9-11.3-13.5-4.1-3.8-9.9-7.9-13.9-9.9-3.8-1.9-8.9-4-11.4-4.8-2.5-0.8-9-1.6-14.5-1.8-6.6-0.3-12.2 0-16.5 1z"/><path className="a" d="m274.5 130.5c-1.4 1.4-2.4 3.6-2.5 5.5 0 1.9 0.9 3.9 2.5 5.5 1.6 1.6 3.6 2.5 5.5 2.5 2 0 4-0.9 5.5-2.5 1.6-1.5 2.5-3.7 2.5-5.5 0-1.9-0.9-3.9-2.5-5.5-1.6-1.6-3.6-2.5-5.5-2.5-2 0-4 0.9-5.5 2.5zm-25.4 30.9c-1.9 0.7-4.5 2.7-5.8 4.5-1.2 1.7-2.6 4.6-2.9 6.4-0.3 1.7-0.3 4.9 0 7 0.4 2.5 1.9 5 4.6 7.7 2.3 2.3 5.4 4.3 7.2 4.6 1.8 0.3 5 0.3 7 0 2.6-0.4 5.1-1.9 7.8-4.6 2.7-2.7 4.2-5.2 4.6-7.7 0.4-2.1 0.3-5.1 0-6.8-0.4-1.7-1.7-4.3-3-6-1.2-1.7-3.9-3.8-5.9-4.7-2-1-5.2-1.8-7-1.8-1.7 0.1-4.7 0.7-6.6 1.4zm-10.6 111.7c-2.2 0.5-6.6 2.4-9.9 4.2-3.2 1.8-7.7 5.2-9.9 7.7-2.3 2.5-5.5 7.4-7.2 11-2.7 5.8-3 7.5-3 16.1 0 8.9 0.2 10 3.6 17 2.5 4.9 5.3 8.9 8.5 11.8 2.7 2.4 7.8 5.8 11.4 7.5 5.9 2.8 7.4 3.1 16 3.1 8.5 0 10.2-0.3 16-3 3.6-1.7 8.7-5.1 11.3-7.5 3.2-2.9 6.2-7.1 8.5-11.9 3.5-7.1 3.7-8.1 3.7-17.1 0-9-0.2-10-3.7-17.1-2.3-4.8-5.3-9-8.5-11.9-2.6-2.4-7.7-5.7-11.3-7.4-5-2.2-8.3-3-14-3.2-4.1-0.2-9.3 0.1-11.5 0.7zm-28 97.4c-1.4 1.4-2.4 3.6-2.5 5.5 0 1.9 0.9 3.9 2.5 5.5 1.6 1.6 3.6 2.5 5.5 2.5 2 0 4-0.9 5.5-2.5 1.6-1.5 2.5-3.7 2.5-5.5 0-1.9-0.9-3.9-2.5-5.5-1.6-1.6-3.6-2.5-5.5-2.5-2 0-4 0.9-5.5 2.5zm38.6-1.1c-1.9 0.7-4.5 2.7-5.8 4.5-1.2 1.7-2.6 4.6-2.9 6.3-0.3 1.8-0.3 5 0 7 0.4 2.6 1.9 5.1 4.6 7.8 2.3 2.3 5.4 4.3 7.2 4.6 1.8 0.3 5 0.3 7 0 2.6-0.4 5.1-1.9 7.8-4.6 2.7-2.7 4.2-5.2 4.6-7.8 0.4-2 0.3-5.1 0-6.7-0.4-1.6-1.7-4.4-3-6-1.2-1.6-3.9-3.8-5.9-4.8-2-0.9-5.2-1.7-7-1.7-1.7 0.1-4.7 0.7-6.6 1.4z"/>
</svg>
  );

export default Protozoa;