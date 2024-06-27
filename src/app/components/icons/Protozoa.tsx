



// En el componente SVG (MySVG.jsx)
const ParasiteNematode = ({ color }: any) => {
  return (


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <ellipse cx="50" cy="50" rx="40" ry="30" fill="#7CB9E8" stroke="#0066CC" stroke-width="2"/>
  <circle cx="35" cy="45" r="8" fill="#004080"/>
  <path d="M15,50 Q25,30 35,50 T55,50" fill="none" stroke="#004080" stroke-width="2"/>
  <path d="M85,40 Q75,30 65,40" fill="none" stroke="#004080" stroke-width="2"/>
  <path d="M85,60 Q75,70 65,60" fill="none" stroke="#004080" stroke-width="2"/>
  <path d="M90,50 L110,30 M90,50 L110,50 M90,50 L110,70" fill="none" stroke="#004080" stroke-width="2"/>
</svg>

    
  );
};

export default  ParasiteNematode;


