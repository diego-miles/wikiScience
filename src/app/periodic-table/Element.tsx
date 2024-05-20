import Link from 'next/link';

// Función para obtener el color de fondo basado en la familia del elemento (asumiendo que tienes esta función definida)

// Estilos para el hover


// Datos del elemento hidrógeno
const hydrogenData = {
  electronicConfiguration: "1s¹",
  symbol: "H",
  name: "Hydrogen",
  atomicNumber: 1,
};

// Componente para mostrar los datos del hidrógeno
const HydrogenElement = () => {
  const style = {}; // Estilos adicionales para el componente (actualmente vacío)

  return (
    <div
      className={`relative top-[6rem] left-[40.5rem] xl:left-[35rem] flex`}
    >
      {/* Columna izquierda */}
      <div className="text-right pt-[3rem] ">
        <span className="pb-1 left-[17.2rem] border-sky-400 top-0 absolute text-dark font-medium dark:text-gray-100 block mt-1   border-b-2 px-3 text-2xs">Electronic Configuration</span>
        <div>
        <span className="  text-dark dark:text-gray-100   border-b-2 px-3 inline-block border-sky-400 font-medium text-2xs">Symbol</span>
        </div>
        <div>
        <span className="  text-dark dark:text-gray-100 inline-block mt-2   border-b-[.2rem] border-sky-400 px-3 font-medium text-2xs" >Name</span>
        </div>
        <span className="  text-dark dark:text-gray-100 inline-block mt-2   border-b-2 border-sky-400 px-3 font-medium text-2xs">Atomic Number</span>
      </div>
      
      {/* Columna derecha */}
      <div>
          <div className="border-2 border-sky-400 rounded-lg px-4 py-4 min-w-32">
            {/* Configuración electrónica en la parte superior */}
            <span className="text-[.9rem] min-h-8 text-dark dark:text-white tracking-wider ">{hydrogenData.electronicConfiguration}</span>
            <span className="text-base font-black text-dark dark:text-white block -mb-1 ">{hydrogenData.symbol}</span>
            <span className="text-[1.2rem] text-dark font-bold dark:text-white block py-1 pb-2">{hydrogenData.name}</span>
            <span className="text-dark dark:text-white block">{hydrogenData.atomicNumber}</span>
          </div>
      </div>
      {/* <div className='absolute top-60'>
        <p>[He] = 2s <sup>2</sup></p>
      </div> */}
    </div>
  );
};

export default HydrogenElement;