import React from 'react';
import { PrismaClient } from '@prisma/client';
import { ChemicalElement } from '@prisma/client';
import { unstable_cache } from 'next/cache';
import ScrollTopButton from '@/components/ScrollTopButton';
import { notFound } from 'next/navigation';
import History from '@/components/tables/hystoryTable'; // Ajusta la ruta de importación según tu estructura de proyecto
import { Button } from "@/components/ui/button"
import ContextHoverCard from '@/components/ContextHoverCard';
import { PeriodicDrawer } from '@/components/Drawer'
import ChemicalFamilies from '../ChemicalFamilies'

type ImageGalleryItem = {
  imageUrl: string | null;
  description: string | null;
};
interface ChemicalFamily {
  name: string;
  color: string;
}




const prisma = new PrismaClient();

interface ElementPageProps {
  params: {
    slug: string;
  };
}

const getElementData = unstable_cache(async (slug: string) => {
  const element = await prisma.chemicalElement.findUnique({
    where: { slug }
  });

  if (!element) notFound();
  return element;
});

// Definir un tipo para sectionId
type SectionId = string;

// Tipo para la función generateSectionHeader
type GenerateSectionHeader = (
  buttonText: string,
  title: string,
  buttonColor?: string
) => JSX.Element;

// Definir un tipo para strongId
type StrongId = string;

// Tipo para la función generateStrong
type GenerateStrong = (
  content: string,
  buttonText: string,
  buttonColor?: string,
) => JSX.Element;




// Función para generar JSX structure para encabezados de sección con hover cards
const generateSectionHeader: GenerateSectionHeader = (
  buttonText,
  title,
  buttonColor?,

) => (
  <div className=' '>
    <ContextHoverCard buttonText={buttonText} questionMarkColor={buttonColor} >
      <Button variant="link">
        <h2 className='mt-0 pt-0  block'>{title}</h2>
      </Button>
    </ContextHoverCard>
  </div>
);



// Función para generar JSX structure para strong con hover cards
const generateStrong: GenerateStrong = (
  buttonText,
  content,
  buttonColor?,
) => (
  <div className=' w-fit'>
    <ContextHoverCard buttonText={buttonText} questionMarkColor={buttonColor}>
      <Button variant="link">
        <strong className='text-base'>{content}</strong>
      </Button>
    </ContextHoverCard>
  </div>
);



async function ElementPage({ params: { slug } }: ElementPageProps) {
  const element = await getElementData(slug);

  if (!element) { 
    return <div>Error fetching element data</div>;
  }

const sectionTitles = [
  "1. Atomic Structure",
  "2. History",
  "3. Physical Properties",
  "4. Chemical Properties",
  "5. Electron Configuration",
  "6. Natural Occurrence",
  "7. Crystal Structures",
  "8. Isotopes and Abundances",
  "9. Oxidation States",
  "10. Compounds",
  "11. Spectral Lines",
  "12. Allotropes",
  "13. Magnetic and Electrical Properties",
  "14. Optical Properties",
  "15. Quantum Properties",
  "16. Practical Applications",
  "17. Biological Role",
  "18. Legal Status",
  "19. Safety Data Sheet",
  "20. Synthesis and Production",
  "21. Health and Environmental Impact",
  "22. Environmental Safety",
  "23. Economic Data",
  "24. Interdisciplinary Connections",
  "25. Future Predictions",
  "26. External Resources",
  "27. User Interactions",
];

const chemicalFamilies: ChemicalFamily[] = [
  { name: 'Alkali Metals', color: 'alkali-metal' },
  { name: 'Alkali earth metals', color: 'alkali-earth' },
  { name: 'Transition Metals', color: 'transition-metal' },
  { name: 'Post-Transition Metals', color: 'post-transition-metal' },
  { name: 'Metalloids', color: 'metalloids' },
  { name: 'Non-Metals', color: 'non-metals' },
  { name: 'Halogens', color: 'halogens' },
  // { name: 'Noble Gases', color: 'noble-gases' },
  { name: 'Lanthanides', color: 'lanthanide' },
  { name: 'Noble Gases', color: 'noble-gas' },
  { name: 'Actinides', color: 'actinide' },
];


  // // Crear enlaces a partir de los títulos de sección
  // const links = sectionTitles.map(title => ({
  //   text: title,
  //   id: title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')
  // }));

  // Check and map over the gallery only if it's an array of the expected type
  const images = element?.imageGallery?.map((img: ImageGalleryItem) => ({
    URL: img.imageUrl ?? 'DefaultURL', // Proporciona una URL por defecto o maneja el caso de null de alguna manera
    Description: img.description ?? 'No description' // Proporciona una descripción por defecto o maneja el caso de null
  }));
  // Assuming element.history is an array of objects with the structure { event: string; year: number; description: string; }
  // Then, pass this object to the History component

  const sanitizedHistoryData = element.history.map(histItem => ({
    event: histItem.event ?? 'Unknown Event',
    year: histItem.year ?? 'Unknown Year',
    description: histItem.description ?? 'No description available'
  }));






  return (
    <>
      {/* <NavBar domain="www.wiki-science.com/" menuPath='./NavigationMenu' /> */}
      <main  className='lg:pt-60 mt-[7rem] lg:mt-[5rem]'>
        {/* <h1 >{element.name} ({element.symbol})</h1> */}
        <div className='max-w-90 overflow-x-auto pb-2'>

        <ChemicalFamilies></ChemicalFamilies>
        </div>
        <section className='text-center pt-20'>

            <div
      className={`relative flex w-fit mx-auto pr-40 mb-20`}
    >
      {/* Columna izquierda */}
      <div className="text-right pt-10 ">
        <div className="absolute  pb-1 pl-2 -right-5   border-[#168cc7]  top-0  text-dark font-medium dark:text-gray-100 block mt-1   border-b-2  text-[1.1rem]">
           <ContextHoverCard buttonText={"Electronic Configuration"} questionMarkColor={"#85a985"}>
      <Button variant="link">
        <strong className='text-xs'>{"Electronic Config"}</strong>
      </Button>
    </ContextHoverCard> 
          </div>
        <div>
        <div className="  text-dark dark:text-gray-100   border-b-2 px-3 inline-block border-[#168cc7]  font-medium text-xs">
           <ContextHoverCard buttonText={"Electronic Configuration"} questionMarkColor={"#729c72"}>
      <Button variant="link">
        <strong className='text-xs'>{"Symbol"}</strong>
      </Button>
    </ContextHoverCard> 
        </div>
        </div>
        <div>
        <span className="  text-dark dark:text-gray-100 inline-block mt-3   border-b-[.2rem] border-[#168cc7]  px-3 font-medium text-xs" >Name</span>
        </div>
        <div className="  text-dark dark:text-gray-100 inline-block mt-4   border-b-2 border-[#168cc7]  px-3 font-medium text-xs">
           <ContextHoverCard buttonText={"Atomic number"} questionMarkColor={"#80ac80"}>
      <Button variant="link">
        <strong className='text-xs'>{"Atomic Number"}</strong>
      </Button>
    </ContextHoverCard> 
          </div>
      </div>
      
      {/* Columna derecha */}
      <div>
          <div className={`border-4 border-[#1380b6] bg-background1 rounded-lg px-4 py-2 min-w-32 bg-${element.classifications}`}>
            {/* Configuración electrónica en la parte superior */}
            <span className=" text-[1.4rem] min-h-8 text-dark dark:text-white tracking-wider ">{element.electronConfig?.configuration}</span>
            <span className="text-xl font-black text-dark dark:text-white block -mb-1 pb-0 ">{element.symbol}</span>
            <span className="text-[1.5rem] text-dark font-extrabold dark:text-white block ">{element.name}</span>
            <span className="text-dark text-base dark:text-white block"> {element.atomicNumber}</span>
          </div>
      </div>
      {/* <div className='absolute top-60'>
        <p>[He] = 2s <sup>2</sup></p>
      </div> */}
    </div>
          {/* {images.length > 0 && <ImageCarousel images={images} />} */}
          {/* <LocalContextLinks links={links} /> */}
          {/* <div className='w-fit mx-auto'>
            <div className='flex flex-wrap'>
                          {generateStrong("Atomic Number", "Atomic Number:")}
            <p className=''> {element.atomicNumber}</p>
            </div>
          </div> */}

  <div className='max-w-[50rem] mx-auto pb-12'>
            <p className='font-semibold text-h4 pb-0'>CLASSIFICATION: </p>
  {element.classifications.map((cls, index) => (
    <div className=' ' key={index}>
      <p className='font-bold text-lg '>{cls.classification}</p>
      <p>{cls.description}</p>
    </div>
  ))}
  </div>
          <div className='w-fit mx-auto'>
            <div className='flex flex-wrap'>
                          {generateStrong("Atomic Weight", "Atomic Weight:")}
          <p > {element.atomicWeight}</p>
            </div>
          </div>
          <p ><strong>Appearance:</strong> {element.appearance}</p>
          <p className='text-lg max-w-[50rem] mx-auto'> {element.description}</p>

        </section>





        <div className='lg:grid lg:grid-cols-2 gap-x-24 gap-y-12 lg:px-12 '>
          {/* Atomic Structure */}

          <section id="1-atomic-structure">
            {/* Atomic Structure */}
            {generateSectionHeader("Atomic Structure", "1. Atomic Structure")}
            <div className='flex flex-wrap text-left'>
              {generateStrong("Electrons", "Electrons:")}
              <p  >
                {element.atomicStructure?.electrons} </p>
            </div>

            <div className='flex flex-wrap'>
              {generateStrong("Protons", "Protons:")}
              <p>
                {element.atomicStructure?.protons}</p>
            </div>

            <div className='flex flex-wrap'>
              {generateStrong("Neutrons", "Neutrons:")}
              <p>
                {element.atomicStructure?.neutrons}
              </p>
            </div>

            <div className='flex flex-wrap'>
              {generateStrong("Ionization Energy", "Ionization Energy:")}
              <p>
                {element.atomicStructure?.ionizationEnergy}
              </p>
            </div>

            <div className='flex flex-wrap'>
              {generateStrong("Electron Affinity", "Electron Affinity:")}
              <p>
                {element.atomicStructure?.electronAffinity}
              </p>
            </div>

            <div className='flex flex-wrap'>
              {generateStrong("Atomic Radius", "Atomic Radius:")}
              <p >
                {element.atomicStructure?.atomicRadius}
              </p>
            </div>


            <div className=' flex flex-wrap'>
              <div className='w-fit h-fit '>
                {generateStrong("Atomic Polarization", "Atomic Polarization:")}
              </div>
              <p className=''>
                {element.atomicStructure?.atomicPolarization}
              </p>
            </div>

            <div className='flex flex-wrap'>
              {generateStrong("Electronegativity", "Electronegativity:")}
              <p className='flex flex-wrap'>
                {element.atomicStructure?.electronegativity} eV
              </p>
            </div>

            <div className='flex flex-wrap'>
              {generateStrong("First Ionization Potential", "First Ionization Potential:")}
              <p className='flex flex-wrap'>
                {element.atomicStructure?.firstIonizationPotential}
              </p>
            </div>
          </section>


<section id="2-history" className='mx-auto w-fit'>
  <div>
            <h2>4. Discovery and History</h2>
  </div>
  <History data={sanitizedHistoryData} />
</section>



          {/* Discovery Year, Melting and Boiling Points, Density, and Appearance */}
          {/* Physical Properties */}
          <section id="3-physical-properties">
            <div>
              {generateSectionHeader("Physical Properties", "2. Physical Properties")}
            </div>
            <div className='flex flex-wrap text-left'>
              {generateStrong("Melting Point", "Melting Point:")}
              <p>{element.physicalProperties?.meltingPoint ? `${element.physicalProperties.meltingPoint}` : 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Boiling Point", "Boiling Point:")}
              <p>{element.physicalProperties?.boilingPoint ? `${element.physicalProperties.boilingPoint}` : 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Density", "Density:")}
              <p>{element.physicalProperties?.density ? `${element.physicalProperties.density} ` : 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Atomic Radius", "Atomic Radius:")}
              <p>{element.physicalProperties?.atomicRadius || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Atomic Volume", "Atomic Volume:")}
              <p>{element.physicalProperties?.atomicVolume || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Covalent Radius", "Covalent Radius:")}
              <p>{element.physicalProperties?.covalentRadius || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Molar Heat", "Molar Heat:")}
              <p>{element.physicalProperties?.molarHeat || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Thermal Conductivity", "Thermal Conductivity:")}
              <p>{element.physicalProperties?.thermalConductivity || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Sound Velocity", "Sound Velocity:")}
              <p>{element.physicalProperties?.soundVelocity || 'N/A'}</p>
            </div>
            {generateStrong("Density", "Density:")}
            <p>{element.physicalProperties?.density || 'N/A'}</p>
            <div className='flex flex-wrap'>
              {generateStrong("Mohs Hardness", "Mohs Hardness:")}
              <p>{element.physicalProperties?.mohsHardness || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Thermal Conductivity", "Thermal Conductivity:")}
              <p>{element.physicalProperties?.thermalConductivity || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Brinell Hardness", "Brinell Hardness:")}
              <p>{element.physicalProperties?.brinellHardness || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Specific Heat Capacity", "Specific Heat Capacity:")}
              <p>{element.physicalProperties?.specificHeatCapacity || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Thermal Expansion Coefficient", "Thermal Expansion Coefficient:")}
              <p>{element.physicalProperties?.thermalExpansionCoefficient || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Phase Transition Temperatures", "Phase Transition Temperatures:")}
              <p>{element.physicalProperties?.phaseTransitionTemperatures || 'N/A'}</p>
            </div>
          </section>


<section id="4-chemical-properties">
  <div>
    {generateSectionHeader("Chemical Properties", "3. Chemical Properties")}
  </div>
  <div className='flex flex-wrap'>
    {generateStrong("Reactivity", "Reactivity:")}
    <p>{element.chemicalProperties?.reactivity || 'N/A'}</p>
  </div>
  <div className='flex flex-wrap'>
    {generateStrong("Common Oxidation States", "Common Oxidation States:")}
    <p>{element.chemicalProperties?.commonOxidationStates || 'N/A'}</p>
  </div>
  <div className='flex flex-wrap'>
    {generateStrong("Standard Reduction Potential", "Standard Reduction Potential:")}
    <p>{element.chemicalProperties?.standardReductionPotential || 'N/A'}</p>
  </div>
  <div>
    <p>{element.chemicalProperties?.description || 'N/A'}</p>
  </div>
</section>


{element.magneticElectricalProperties && (
  <section id="5-magnetic-and-electrical-properties">
    <div className='w-full'>
      {generateSectionHeader("Magnetic and Electrical Properties", "13. Magnetic and Electrical Properties")}
    </div>
    {generateStrong("Magnetic Susceptibility", "Magnetic Susceptibility:")}
    <p>{element.magneticElectricalProperties?.magneticSusceptibility || 'N/A'}</p>
    {generateStrong("Electrical Resistivity", "Electrical Resistivity:")}
    <p>{element.magneticElectricalProperties?.electricalResistivity || 'N/A'}</p>
    {generateStrong("Hall Coefficient", "Hall Coefficient:")}
    <p>{element.magneticElectricalProperties?.hallCoefficient || 'N/A'}</p>
  </section>
)}

<section id="6-optical-properties">
  <div>
    {generateSectionHeader("Optical Properties", "14. Optical Properties")}
  </div>
  {generateStrong("Refractive Index", "Refractive Index:")}
  <p>{element.opticalProperties?.refractiveIndex || 'N/A'}</p>
  {generateStrong("Reflectivity", "Reflectivity:")}
  <p>{element.opticalProperties?.reflectivity || 'N/A'}</p>
  {generateStrong("Absorption Spectrum", "Absorption Spectrum:")}
  <p>{element.opticalProperties?.absorptionSpectrum || 'N/A'}</p>
</section>

<section id="7-quantum-properties">
  <div>
    {generateSectionHeader("Quantum Properties", "15. Quantum Properties")}
  </div>
  {element.quantumProperties && (
    <>
      {generateStrong("Quantum Numbers", "Quantum Numbers:")}
      <p>{JSON.stringify(element.quantumProperties?.quantumNumbers)}</p>
      {generateStrong("Electron Shell Model", "Electron Shell Model:")}
      <p>{JSON.stringify(element.quantumProperties?.electronShellModel)}</p>
      {generateStrong("Energy Levels", "Energy Levels:")}
      <p>{JSON.stringify(element.quantumProperties?.energyLevels)}</p>
    </>
  )}
</section>

<section id="8-electron-configuration">
  <div>
    {generateSectionHeader("Electron Configuration", "7. Electron Configuration")}
  </div>
  <p>{element.electronConfig?.configuration}</p>
  <p>{element.electronConfig?.description}</p>
</section>






<section id="9-natural-occurrence">
  <div>
    {generateSectionHeader("Natural Occurrence", "6. Natural Occurrence")}
  </div>
  <h3>{element.naturalOccurrence?.occurrenceType}  </h3>
  <p>{element.naturalOccurrence?.description}</p>
</section>

<section id="10-crystal-structures">
  <div>
    {generateSectionHeader("Crystal Structures", "8. Crystal Structures")}
  </div>
  {element.crystalStructures.map((structure, index) => (
    <div key={index}>
<p>{structure?.type || 'N/A'}</p>
{generateStrong("Temperature", "Temperature:")}
<p>{structure?.temperature ? `${structure.temperature} K` : 'N/A'}</p>
<p>{structure?.description || 'N/A'}</p>

    </div>
  ))}
</section>


<section className='col-span-2' id="11-isotopes-and-abundances">
  <div>
    {generateSectionHeader("Isotopes and Abundances", "10. Isotopes and Abundances")}
  </div>
  <div className='lg:grid lg:grid-cols-2 gap-x-12  max-w-fit mx-auto mt-16'>
    {element.isotopes.map(isotope => (
      <div className='border rounded-3xl max-w-[40rem] px-10 py-2 m-10 pt-8 mx-auto' key={isotope.isotopeNumber}>

        <h3 className='mt-2 mb-6'>{isotope?.name  }</h3>

        {generateStrong("Abundance", "Abundance:")}
        <p>{isotope?.abundance  }</p>
        {/* {generateStrong("Half Life", "Half Life:")} */}
                <div className='flex flex-wrap text-left'>

        {generateStrong("Isotope Number", "Isotope Number:")}
        <h3 className='mt-0'>{isotope?.isotopeNumber }</h3>
            </div>
        <p>{isotope?.nuclearProperties  }</p>
        {/* {generateStrong("Decay Mode", "Decay Mode:")} */}
        <p>{isotope?.applications  }</p>
        <p>{isotope?.otherDetails}</p>
      </div>
    ))}
  </div>
</section>


<section id="12-oxidation-states">
  <div>
    {generateSectionHeader("Oxidation States", "11. Oxidation States")}
  </div>
  {element.oxidationStates.map(state => (
    <div key={state.state}>
      <p className='mt-8 -mb-3'><strong>{state?.state}</strong></p>
      <p>{state?.description || 'N/A'}</p>
    </div>
  ))}
</section>


<section id="13-compounds">
  <div>
    {generateSectionHeader("Compounds", "12. Compounds")}
  </div>
  {element.compounds.map((compound, index) => (
    <div className='' key={index}>
      <h3 className=''>{compound?.name }</h3>
                <p><strong>{compound?.formula}</strong> </p>
                <p><strong></strong> {compound?.description}</p>
    </div>
  ))}
</section>

<section id="14-spectral-lines">
  <div>
    {generateSectionHeader("Spectral Lines", "16. Spectral Lines")}
  </div>
  {element.spectralLines.map((line, index) => (
    <div className='mb-12' key={index}>
      {generateStrong("Wavelength", "Wavelength:")}
      <p>{line?.wavelength} nm</p>
      {generateStrong("Intensity", "Intensity:")}
      <p>{line?.intensity}</p>
      {generateStrong("Line Type", "Line Type:")}
      <p>{line?.lineType}</p>
    </div>
  ))}
</section>



<section id="15-allotropes">
  <div>
    {generateSectionHeader("Allotropes", "9. Allotropes")}
  </div>
  {element.allotropes.map((allotrope, index) => (
    <div className='border border-black dark:border-white/20 rounded-3xl py-8 my-12 px-7 min-h-[17rem] max-w-[32rem] justify-center' key={index}>
{generateStrong(allotrope?.name || '', allotrope?.name ? allotrope.name + ":" : '')}
      <p>{allotrope?.description}</p>
    </div>
  ))}
</section>








<section id="16-practical-applications">
  <div>
            <h2>17. Practical Applications</h2>
  </div>
  {element.practicalApplications.map(app => (
    <div className='mt-12' key={app.application}>
      <h3>{app?.application || 'N/A'}</h3>
      <p>{app?.description || 'N/A'}</p>
    </div>
  ))}
</section>



<section id="17-synthesis-and-production">
  <div>
            <h2>26. Synthesis and Production</h2>
  </div>
  {element.synthesisProduction && (
    <>
      {generateStrong("Synthesis Methods", "Synthesis Methods:")}
      <p>{element?.synthesisProduction?.synthesisMethods || 'N/A'}</p>
      {generateStrong("Extraction Methods", "Extraction Methods:")}
      <p>{element?.synthesisProduction?.extractionMethods || 'N/A'}</p>
      {generateStrong("Global Production", "Global Production:")}
      <p>{element?.synthesisProduction?.globalProduction || 'N/A'}</p>
    </>
  )}
</section>


<section id="18-economic-data">
  <div>
            <h2>20. Economic Data</h2>
  </div>
            <p><strong>Market Price:</strong> {element.economicData?.marketPrice}</p>
            <p><strong>Producing Countries:</strong> {element.economicData?.producingCountries}</p>
            <p><strong>Industrial Use:</strong> {element.economicData?.industrialUse}</p>
            <p><strong>Description:</strong> {element.economicData?.description}</p>
</section>



<section id="19-biological-role">
  <div>
            <h2>18. Biological Role</h2>
  </div>
  {/* {generateStrong("Role", "Role:")} */}
  <h3>{element.biologicalRole?.role || 'N/A'}</h3>
  {/* {generateStrong("Description", "Description:")} */}
  <p>{element.biologicalRole?.description || 'N/A'}</p>
</section>


<section id="20-legal-status">
  <div>
    {generateSectionHeader("Legal Status", "21. Legal Status")}
  </div>
  {element.legalStatus && (
    <>
      {generateStrong("Regulations", "Regulations:")}
      <p>{element.legalStatus?.regulations || 'N/A'}</p>
      {generateStrong("Legal Restrictions", "Legal Restrictions:")}
      <p>{element.legalStatus?.legalRestrictions || 'N/A'}</p>
    </>
  )}
</section>






<section id="21-health-environmental-impact">
            <h2>19. Health and Environmental Impact</h2>
  {generateStrong("Health Impact", "Health Impact:")}
  <p><span className='font-semibold text-[#ff6262]'>{element.healthEnvironmentalImpact?.healthImpact || 'N/A'}</span></p>
  {generateStrong("Environmental Impact", "Environmental Impact:")}
  <p>{element.healthEnvironmentalImpact?.environmentalImpact || 'N/A'}</p>
</section>


<section id="22-environmental-safety">
  <div>
            <h2>27. Environmental Safety</h2>
  </div>
  {generateStrong("Health Hazards", "Health Hazards:")}
  <p>{element.environmentalSafety?.healthHazards || 'N/A'}</p>
  {generateStrong("Safety Precautions", "Safety Precautions:")}
  <p>{element.environmentalSafety?.safetyPrecautions || 'N/A'}</p>
</section>








<section id="23-safety-data-sheet">
  <div>
    {generateSectionHeader("Safety Data Sheet", "22. Safety Data Sheet")}
  </div>
            {element.safetyDataSheet && (
              <>
                <p><strong>Handling:</strong> {element?.safetyDataSheet?.handling}</p>
                <p><strong>Storage:</strong> {element?.safetyDataSheet?.storage}</p>
                <p><strong>First Aid Measures:</strong> {element?.safetyDataSheet?.firstAidMeasures}</p>
              </>
            )}
</section>

<section id="24-future-predictions">
  <div>
            <h2>23. Future Predictions</h2>
  </div>
  {element.futurePredictions.map((prediction, index) => (
    <div className='-scroll-mt-12' key={index}>
      <h3>{prediction.prediction || 'N/A'}</h3>
      <p>{prediction.description || 'N/A'}</p>
    </div>
  ))}
</section>

<section id="25-interdisciplinary-connections">
            <h2>24. Interdisciplinary Connections</h2>

  {element.interdisciplinaryConnections ? (
    Object.entries(element.interdisciplinaryConnections).map(([key, description], index) => (
      <div key={index}>
        {generateStrong(key, key + ":")}
        <p>{description || 'N/A'}</p>
      </div>
    ))
  ) : (
    <p>No interdisciplinary connections available.</p>
  )}
</section>

<section id="26-external-resources">
            <h2>25. External Resources</h2>
  {element.externalResources && element.externalResources.map((resource, index) => (
    <div key={index}>
      {generateStrong("Resource Type", "Resource Type:")}
      <p>{resource.resourceType || 'N/A'}</p>
      <a href={resource?.link || undefined}><strong>Link:</strong> {resource?.description || 'N/A'}</a>
    </div>
  ))}
</section>



{/* <section id="26-user-interactions">
            <h2>26. User Interactions</h2>

  {element.userInteractions && element.userInteractions.map((interaction, index) => (
    <div key={index}>
      {generateStrong("Question", "Question:")}
      <p>{interaction?.question || 'N/A'}</p>
      {generateStrong("Discussion", "Discussion:")}
      <p>{interaction?.discussion || 'N/A'}</p>
    </div>
  ))}
</section> */}

        </div>


        <ScrollTopButton />
      </main>
    </>
  );

};

export default ElementPage;