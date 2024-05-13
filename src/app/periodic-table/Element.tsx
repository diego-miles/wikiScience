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
      <div className="text-right pt-[2.5rem] -mr-[.2rem]">
        <span className="pb-1 left-[16.5rem] border-sky-400 top-0 absolute text-gray-200 block mt-1 border-b-[.1rem] px-3">Electronic Configuration</span>
        <div>
        <span className="pb-[.1rem] text-gray-200  border-b-[.1rem] px-3 inline-block border-sky-400">Symbol</span>
        </div>
        <div>
        <span className="pb-[.1rem] text-gray-200 inline-block mt-1 border-b-[.1rem] border-sky-400 px-3">Name</span>
        </div>
        <span className="pb-[.1rem]  text-gray-200 inline-block mt-1 border-b-[.1rem] border-sky-400 px-3">Atomic Number</span>
      </div>
      
      {/* Columna derecha */}
      <div>
          <div className="border-2 border-sky-400 rounded-lg px-3 py-2">
            {/* Configuración electrónica en la parte superior */}
            <span className="text-[.9rem] min-h-8 text-white tracking-wider ">{hydrogenData.electronicConfiguration}</span>
            <span className="text-lg font-black text-white block -mb-1 ">{hydrogenData.symbol}</span>
            <span className="text-[1.2rem]  font-bold text-white block ">{hydrogenData.name}</span>
            <span className=" text-gray-200 block">{hydrogenData.atomicNumber}</span>
          </div>
      </div>
    </div>
  );
};

export default HydrogenElement;