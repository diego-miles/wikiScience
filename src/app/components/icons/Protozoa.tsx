import React from 'react';

const Protozoa = ({ color }: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100">
      <g>
        <ellipse cx="70" cy="50" rx="40" ry="30" fill="#96c7ed" stroke="#0066CC" strokeWidth="4"/>
        <circle cx="85" cy="45" r="8" fill="#0050a0"/>
        <path d="M105,50 Q95,30 85,50 T65,50" fill="none" stroke="#004080" strokeWidth="4"/>
        <path d="M35,40 Q45,30 55,40" fill="none" stroke="#004080" strokeWidth="4"/>
        <path d="M35,60 Q45,70 55,60" fill="none" stroke="#0061c2" strokeWidth="4"/>
        <path d="M30,50 L0,20 M30,50 L0,50 M30,50 L0,80" fill="none" stroke="#006ad3" strokeWidth="4"/>
      </g>
    </svg>
  );
};

export default Protozoa;