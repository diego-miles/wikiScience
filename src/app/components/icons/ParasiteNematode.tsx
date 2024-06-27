
// En el componente SVG (MySVG.jsx)
const ParasiteNematode = ({ color }: any) => {
  return (


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="#8B0000" stroke-width="8" stroke-linecap="round"/>
  <circle cx="90" cy="50" r="6" fill="#8B0000"/>
  <path d="M86,46 L94,54 M94,46 L86,54" stroke="#fff" stroke-width="2"/>
  <circle cx="50" cy="50" r="4" fill="#FF0000" opacity="0.7"/>
  <circle cx="30" cy="35" r="3" fill="#FF0000" opacity="0.7"/>
  <circle cx="70" cy="65" r="3" fill="#FF0000" opacity="0.7"/>
</svg>
    
  );
};

export default  ParasiteNematode;


