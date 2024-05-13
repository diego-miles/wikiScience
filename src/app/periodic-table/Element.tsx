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
      className={`relative top-[6rem] left-[40rem] xl:left-[35rem] flex`}
    >
      {/* Columna izquierda */}
      <div className="text-right pt-[3rem] -mr-[.2rem]">
        <span className="pb-1 left-[20.2rem] border-sky-400 top-0 absolute text-dark font-medium dark:text-gray-100 block mt-1   border-b-[.3rem] px-3 text-xs">Electronic Configuration</span>
        <div>
        <span className="  text-dark dark:text-gray-100   border-b-[.3rem] px-3 inline-block border-sky-400 font-medium text-xs">Symbol</span>
        </div>
        <div>
        <span className="  text-dark dark:text-gray-100 inline-block mt-1   border-b-[.3rem] border-sky-400 px-3 font-medium text-xs" >Name</span>
        </div>
        <span className="  text-dark dark:text-gray-100 inline-block mt-1   border-b-[.3rem] border-sky-400 px-3 font-medium text-xs">Atomic Number</span>
      </div>
      
      {/* Columna derecha */}
      <div>
          <div className="border-4 border-sky-400 rounded-lg px-4 py-3">
            {/* Configuración electrónica en la parte superior */}
            <span className="text-[.9rem] min-h-8 text-dark dark:text-white tracking-wider ">{hydrogenData.electronicConfiguration}</span>
            <span className="text-xl font-black text-dark dark:text-white block -mb-1 ">{hydrogenData.symbol}</span>
            <span className="text-[1.3rem] text-dark font-bold dark:text-white block py-1 pb-2">{hydrogenData.name}</span>
            <span className="text-dark dark:text-white block">{hydrogenData.atomicNumber}</span>
          </div>
      </div>
    </div>
  );
};

export default HydrogenElement;