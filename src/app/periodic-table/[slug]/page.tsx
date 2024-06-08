import React from 'react';
import { unstable_cache } from 'next/cache';
import ScrollTopButton from '@/components/ScrollTopButton';
import { notFound } from 'next/navigation';
import History from '@/components/tables/hystoryTable';
import { Button } from "@/components/ui/button"
import ContextHoverCard from '@/components/ContextHoverCard';
import ChemicalFamilies from '../ChemicalFamilies'
import  PeriodicDrawer  from '@/components/Drawer';
import { eq } from 'drizzle-orm';
// Import your existing schema file (replace with the actual path)
import { chemical_element } from '@/db/schema/elements'; // Replace with the actual path to your schema
import {db} from '@/db/index'
// Create a LibSQL client
// const client = createClient({ url: process.env.DATABASE_URL!, authToken: process.env.DATABASE_TOKEN! });

// Initialize Drizzle with the client
// const db = drizzle(client);

type ImageGalleryItem = {
  imageUrl: string | null;
  description: string | null;
};

interface ChemicalFamily {
  name: string;
  color: string;
}

interface ElementPageProps {
  params: {
    slug: string;
  };
}

interface interdisciplinary {

}

// Obtener datos del elemento
const getElementData = unstable_cache(async (slug: string) => {
  const element = await db.select().from(chemical_element).where(eq(chemical_element.slug, slug)).get();
  if (!element) notFound();
  return element;
});

// Define types for sectionId and strongId
type SectionId = string;
type StrongId = string;

// Function to generate JSX for section headers with hover cards
const generateSectionHeader = (buttonText: string, title: string, buttonColor?: string) => (
  <div className=' '>
    <ContextHoverCard buttonText={buttonText} questionMarkColor={buttonColor} >
      <Button variant="link">
        <h2 className='mt-0 pt-0  block'>{title}</h2>
      </Button>
    </ContextHoverCard>
  </div>
);

// Function to generate JSX for strong elements with hover cards
const generateStrong = (content: string, buttonText: string, buttonColor?: string) => (
  <div className=' w-fit'>
    <ContextHoverCard buttonText={buttonText} questionMarkColor={buttonColor}>
      <Button variant="link">
        <strong className='text-base'>{content}</strong>
      </Button>
    </ContextHoverCard>
  </div>
);

// Function to format the electronic configuration by adding superscripts
const formatElectronicConfiguration = (config: string) => {
  // Use a regular expression to find one or two numbers at the end of each subconfiguration
  return config.replace(/(\d{1,2})(?=\s|$)/g, '<sup>$1</sup>');
};

async function ElementPage({ params: { slug } }: ElementPageProps) {
  const element = await getElementData(slug);
  if (!element) {
    return <div>Error fetching element data</div>;
  }
  // Assuming element.history is an array of objects with the structure { event: string; year: number; description: string; }
  // Then, pass this object to the History component
  // Assuming element.history is a string containing JSON data
// let sanitizedHistoryData: { event: any; year: any; description: any; }[] = [];
// if (element.history) {
//     try {
//         const parsedHistory = JSON.parse(element.history);
//         if (Array.isArray(parsedHistory)) {
//             sanitizedHistoryData = parsedHistory.map((histItem) => ({
//                 event: histItem.event || 'Unknown Event',
//                 year: histItem.year || 'Unknown Year',
//                 description: histItem.description || 'No description available'
//             }));
//         }
//     } catch (error) {
//         console.error('Error parsing history:', error);
//     }
// }


  const formatElectronicConfiguration = (config: string) => {
    // Usar una expresiÃ³n regular para encontrar uno o dos nÃºmeros al final de cada subconfiguraciÃ³n
    return config.replace(/(\d{1,2})(?=\s|$)/g, '<sup>$1</sup>');
  };

  return (
    <>
      {/* <NavBar domain="www.wiki-science.com/" menuPath='./NavigationMenu' /> */}
      <div className='max-w-full overflow-x-auto  mt-80 w-fit mx-auto '>
        <ChemicalFamilies></ChemicalFamilies>
      </div>
      <main  className=' pt-20  '>
        {/* <h1 >{element.name} ({element.symbol})</h1> */}
        <div              className="pt-1 px-2 pb-0 mb-0 border-2 border-[#1d6aaa] top-4  left-3/4   -ml-28  p-1 bg-background1 rounded-xl absolute  border-b-[.6rem] shadow-2xl transform transition-all duration-200 hover:translate-y-1 active:border-b-4 active:shadow-inner active:translate-y-2  z-50"            >
          <PeriodicDrawer />
        </div>
        <section className='text-center  '>
          <div      className={`relative flex w-fit mx-auto pr-40 mb-20 `}    >
            {/* Columna izquierda */}
            <div className="text-right pt-10 ">
              <div className="absolute  pb-1 pl-2 -right-5   border-[#168cc7]  top-0  text-dark font-medium dark:text-gray-100   block mt-1   border-b-2  text-[1.1rem]">
                <ContextHoverCard buttonText={"Electronic Configuration"} questionMarkColor={"#85a985"}>
                  <Button variant="link">
                    <strong className='text-xs'>Electronic Config</strong>
                  </Button>
                </ContextHoverCard>
              </div>
              <div>
                <div className="  text-dark dark:text-gray-100   border-b-2 px-3 inline-block border-[#168cc7]  font-medium text-xs ">
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
              <div className={`border-4  dark:bg-background1dark border-[#1380b6] bg-background1 rounded-lg px-4 py-2 min-w-32 bg-${element.classification}`}>
                {/* ConfiguraciÃ³n electrÃ³nica en la parte superior */}
                <span className=" text-[1.4rem] min-h-8 text-dark dark:text-white tracking-wider             "              dangerouslySetInnerHTML={{ __html: formatElectronicConfiguration(element.electronConfiguration_configuration || "")}}            >
                </span>
                <span className="text-xl font-black text-dark dark:text-white block -mb-1 pb-0 ">{element.symbol}</span>
                <span className="text-[1.5rem] text-dark font-extrabold dark:text-white block ">{element.name}</span>
                <span className="text-dark text-base dark:text-white block"> {element.atomicNumber}</span>
              </div>
            </div>
            {/* <div className='absolute top-60'>        <p>[He] = 2s <sup>2</sup></p>      </div> */}
          </div>
          {/* {images.length > 0 && <ImageCarousel images={images} />} */}
          {/* <LocalContextLinks links={links} /> */}
          {/* <div className='w-fit mx-auto'>            <div className='flex flex-wrap'>                          {generateStrong("Atomic Number", "Atomic Number:")}            <p className=''> {element.atomicNumber}</p>            </div>          </div> */}
          <div className='max-w-[50rem] mx-auto pb-12'>
            <p className='font-semibold text-h4 pb-0'>CLASSIFICATION: </p>
                <p className='font-bold text-lg '>{element.classification}</p>
                <p>{element.classification_description}</p>
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
                {element.atomicStructure_electrons}
              </p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Protons", "Protons:")}
              <p>
                {element.atomicStructure_protons}
              </p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Neutrons", "Neutrons:")}
              <p>
                {element.atomicStructure_neutrons}
              </p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Ionization Energy", "Ionization Energy:")}
              <p>
                {element.atomicStructure_ionizationEnergy}
              </p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Electron Affinity", "Electron Affinity:")}
              <p>
                {element.atomicStructure_electronAffinity}
              </p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Atomic Radius", "Atomic Radius:")}
              <p >
                {element.atomicStructure_atomicRadius}
              </p>
            </div>
            <div className=' flex flex-wrap'>
              <div className='w-fit h-fit '>
                {generateStrong("Atomic Polarization", "Atomic Polarization:")}
              </div>
              <p className=''>
                {element.atomicStructure_atomicPolarization}
              </p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Electronegativity", "Electronegativity:")}
              <p className='flex flex-wrap'>
                {element.atomicStructure_electronegativity} eV
              </p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("First Ionization Potential", "First Ionization Potential:")}
              <p className='flex flex-wrap'>
                {element.atomicStructure_firstIonizationPotential}
              </p>
            </div>
          </section>
          <section id="2-history" className='mx-auto w-fit'>
            <div>
              <h2>4. Discovery and History</h2>
            </div>
            {/* <History data={sanitizedHistoryData} /> */}
          </section>
          {/* Discovery Year, Melting and Boiling Points, Density, and Appearance */}
          {/* Physical Properties */}
          <section id="3-physical-properties">
            <div>
              {generateSectionHeader("Physical Properties", "2. Physical Properties")}
            </div>
            <div className='flex flex-wrap text-left'>
              {generateStrong("Melting Point", "Melting Point:")}
              <p>{element.physicalProperties_meltingPoint ? `${element.physicalProperties_meltingPoint}` : 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Boiling Point", "Boiling Point:")}
              <p>{element.physicalProperties_boilingPoint ? `${element.physicalProperties_boilingPoint}` : 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Density", "Density:")}
              <p>{element.physicalProperties_density ? `${element.physicalProperties_density} ` : 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Atomic Radius", "Atomic Radius:")}
              <p>{element.physicalProperties_atomicRadius || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Atomic Volume", "Atomic Volume:")}
              <p>{element.physicalProperties_atomicVolume || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Covalent Radius", "Covalent Radius:")}
              <p>{element.physicalProperties_covalentRadius || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Molar Heat", "Molar Heat:")}
              <p>{element.physicalProperties_molarHeat || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Thermal Conductivity", "Thermal Conductivity:")}
              <p>{element.physicalProperties_thermalConductivity || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Sound Velocity", "Sound Velocity:")}
              <p>{element.physicalProperties_soundVelocity || 'N/A'}</p>
            </div>
            {generateStrong("Density", "Density:")}
            <p>{element.physicalProperties_density || 'N/A'}</p>
            <div className='flex flex-wrap'>
              {generateStrong("Mohs Hardness", "Mohs Hardness:")}
              <p>{element.physicalProperties_mohsHardness || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Thermal Conductivity", "Thermal Conductivity:")}
              <p>{element.physicalProperties_thermalConductivity || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Brinell Hardness", "Brinell Hardness:")}
              <p>{element.physicalProperties_brinellHardness || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Specific Heat Capacity", "Specific Heat Capacity:")}
              <p>{element.physicalProperties_specificHeatCapacity || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Thermal Expansion Coefficient", "Thermal Expansion Coefficient:")}
              <p>{element.physicalProperties_thermalExpansionCoefficient || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Phase Transition Temperatures", "Phase Transition Temperatures:")}
              <p>{element.physicalProperties_phaseTransitionTemperatures || 'N/A'}</p>
            </div>
          </section>
          <section id="4-chemical-properties">
            <div>
              {generateSectionHeader("Chemical Properties", "3. Chemical Properties")}
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Reactivity", "Reactivity:")}
              <p>{element.chemicalProperties_reactivity || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Common Oxidation States", "Common Oxidation States:")}
              <p>{element.chemicalProperties_commonOxidationStates || 'N/A'}</p>
            </div>
            <div className='flex flex-wrap'>
              {generateStrong("Standard Reduction Potential", "Standard Reduction Potential:")}
              <p>{element.chemicalProperties_standardReductionPotential || 'N/A'}</p>
            </div>
            <div>
              <p>{element.chemicalProperties_description || 'N/A'}</p>
            </div>
          </section>
          {element.magneticElectricalProperties_magneticSusceptibility && (
            <section id="5-magnetic-and-electrical-properties">
              <div className='w-full'>
                {generateSectionHeader("Magnetic and Electrical Properties", "13. Magnetic and Electrical Properties")}
              </div>
              {generateStrong("Magnetic Susceptibility", "Magnetic Susceptibility:")}
              <p>{element.magneticElectricalProperties_magneticSusceptibility || 'N/A'}</p>
              {generateStrong("Electrical Resistivity", "Electrical Resistivity:")}
              <p>{element.magneticElectricalProperties_electricalResistivity || 'N/A'}</p>
              {generateStrong("Hall Coefficient", "Hall Coefficient:")}
              <p>{element.magneticElectricalProperties_hallCoefficient || 'N/A'}</p>
            </section>
          )}
          <section id="6-optical-properties">
            <div>
              {generateSectionHeader("Optical Properties", "14. Optical Properties")}
            </div>
            {generateStrong("Refractive Index", "Refractive Index:")}
            <p>{element.opticalProperties_refractiveIndex || 'N/A'}</p>
            {generateStrong("Reflectivity", "Reflectivity:")}
            <p>{element.opticalProperties_reflectivity || 'N/A'}</p>
            {generateStrong("Absorption Spectrum", "Absorption Spectrum:")}
            <p>{element.opticalProperties_absorptionSpectrum || 'N/A'}</p>
          </section>
<section id="7-quantum-properties">
  <div>
    {generateSectionHeader("Quantum Properties", "15. Quantum Properties")}
  </div>
  {generateStrong("Quantum Numbers", "Quantum Numbers:")}
  <p>
    {element.quantumProperties_quantumNumbers ? 
      `${JSON.parse(element.quantumProperties_quantumNumbers).principal} (${JSON.parse(element.quantumProperties_quantumNumbers).azimuthal})` 
      : 'N/A'
    }
  </p>
  {generateStrong("Electron Shell Model", "Electron Shell Model:")}
  <p>
    {element.quantumProperties_electronShellModel ? 
      `Total Electrons: ${JSON.parse(element.quantumProperties_electronShellModel).totalElectrons}, Shells: ${JSON.parse(element.quantumProperties_electronShellModel).shells.join(', ')}` 
      : 'N/A'
    }
  </p>
  {generateStrong("Energy Levels", "Energy Levels:")}
  <p>
    {element.quantumProperties_energyLevels ? 
      JSON.parse(element.quantumProperties_energyLevels)[0] 
      : 'N/A'
    }
  </p>
</section>


          <section id="8-electron-configuration">
            <div>
              {generateSectionHeader("Electron Configuration", "7. Electron Configuration")}
            </div>
            <p>{element.electronConfiguration_configuration}</p>
            <p>{element.electronConfiguration_description}</p>
          </section>
          <section id="9-natural-occurrence">
            <div>
              {generateSectionHeader("Natural Occurrence", "6. Natural Occurrence")}
            </div>
            <h3>{element.naturalOccurrence_occurrenceType}</h3>
            <p>{element.naturalOccurrence_description}</p>
          </section>
          <section id="10-crystal-structures">
            <div>
              {generateSectionHeader("Crystal Structures", "8. Crystal Structures")}
            </div>
          {(element.crystalStructures ? JSON.parse(element.crystalStructures) : []).map((structure: { type: string, temperature: string, description: string }, index: string) => (
            
              <div className='' key={index}>
                <h3>{structure.type || 'N/A'}</h3>
                <p><strong>Temperature:</strong> {structure.temperature || 'N/A'}</p>
                <p>{structure.description || 'N/A'}</p>
              </div>
            
          ))}
          </section>
          <section className='col-span-2' id="11-isotopes-and-abundances">
            <div>
              {generateSectionHeader("Isotopes and Abundances", "10. Isotopes and Abundances")}
            </div>
            <div className='lg:grid lg:grid-cols-2 gap-x-12  max-w-fit mx-auto mt-16'>
              {/* You'll need to handle the isotopes data from your database here */}
              {/* For example, you might have a separate table for isotopes */}
              {/* Replace this with your actual data fetching and rendering logic */}
            </div>
          </section>
          <section id="12-oxidation-states">
            <div>
              {generateSectionHeader("Oxidation States", "11. Oxidation States")}
            </div>
            <p>{element.oxidationState}</p>
            <p>{element.oxidationState_description || 'N/A'}</p>
          </section>
          <section id="13-compounds">
            <div>
              {generateSectionHeader("Compounds", "12. Compounds")}
            </div>
            {/*  Assuming `element.compounds` is a string containing JSON data */}
            {(element.compounds ? JSON.parse(element.compounds) : []).map((compound: { name: string, formula: string, description: string }, index: string) => (
              <div className='' key={index}>
                <h3>{compound.name}</h3>
                <p><strong>{compound.formula}</strong> </p>
                <p><strong></strong> {compound.description}</p>
              </div>
            ))}
          </section>
          <section id="14-spectral-lines">
            <div>
              {generateSectionHeader("Spectral Lines", "16. Spectral Lines")}
            </div>
            {/*  Assuming `element.spectralLines` is a string containing JSON data */}
            {(element.spectralLines ? JSON.parse(element.spectralLines) : []).map((line: { wavelength: string, intensity: string, lineType: string }, index: string) => (
              <div className='mb-12' key={index}>
                {generateStrong("Wavelength", "Wavelength:")}
                <p>{line.wavelength} nm</p>
                {generateStrong("Intensity", "Intensity:")}
                <p>{line.intensity}</p>
                {generateStrong("Line Type", "Line Type:")}
                <p>{line.lineType}</p>
              </div>
            ))}
          </section>
  <section id="15-allotropes">
    <div>
      {generateSectionHeader("Allotropes", "9. Allotropes")}
    </div>
    {/*  Assuming `element.allotropes` is a string containing JSON data */}
{element.allotrops && (
  JSON.parse(element.allotrops).map((allotrope: any, index: string) => (
    <div className='border border-black dark:border-white/20 rounded-3xl py-8 my-12 px-7 min-h-[17rem] max-w-[32rem] justify-center' key={index}>
      {generateStrong(allotrope.name || '', allotrope.name ? allotrope.name + ":" : '')}
      <p>{allotrope.description}</p>
    </div>
  ))
)}


  </section>
  <section id="16-practical-applications">
    <div>
      <h2>17. Practical Applications</h2>
    </div>
    {/*  Assuming `element.practicalApplications` is a string containing JSON data */}
    {element.practical_applications && (
      (element.practical_applications ? JSON.parse(element.practical_applications) : []).map((app: { application: string, description: string }, index: string) => (
        <div className='mt-12' key={index}>
          <h3>{app.application || 'N/A'}</h3>
          <p>{app.description || 'N/A'}</p>
        </div>
      ))
    )}
  </section>
  <section id="17-synthesis-and-production">
    <div>
      <h2>26. Synthesis and Production</h2>
    </div>
    {generateStrong("Synthesis Methods", "Synthesis Methods:")}
    <p>{element.synthesisProduction_synthesisMethods || 'N/A'}</p>
    {generateStrong("Extraction Methods", "Extraction Methods:")}
    <p>{element.synthesisProduction_extractionMethods || 'N/A'}</p>
    {generateStrong("Global Production", "Global Production:")}
    <p>{element.synthesisProduction_globalProduction || 'N/A'}</p>
  </section>
  <section id="18-economic-data">
    <div>
      <h2>20. Economic Data</h2>
    </div>
    <p><strong>Market Price:</strong> {element.economicData_marketPrice || 'N/A'}</p>
    <p><strong>Producing Countries:</strong> {element.economicData_producingCountries || 'N/A'}</p>
    <p><strong>Industrial Use:</strong> {element.economicData_industrialUse || 'N/A'}</p>
    <p><strong>Description:</strong> {element.economicData_description || 'N/A'}</p>
  </section>
  <section id="19-biological-role">
    <div>
      <h2>18. Biological Role</h2>
    </div>
    <h3>{element.biologicalRole_role || 'N/A'}</h3>
    <p>{element.biologicalRole_description || 'N/A'}</p>
  </section>
  <section id="20-legal-status">
    <div>
      {generateSectionHeader("Legal Status", "21. Legal Status")}
    </div>
    {generateStrong("Regulations", "Regulations:")}
    <p>{element.legalStatus_regulations || 'N/A'}</p>
    {generateStrong("Legal Restrictions", "Legal Restrictions:")}
    <p>{element.legalStatus_legalRestrictions || 'N/A'}</p>
  </section>
  <section id="21-health-environmental-impact">
    <h2>19. Health and Environmental Impact</h2>
    {generateStrong("Health Impact", "Health Impact:")}
    <p><span className='font-semibold text-[#ff6262]'>{element.healthEnvironmentalImpact_healthImpact || 'N/A'}</span></p>
    {generateStrong("Environmental Impact", "Environmental Impact:")}
    <p>{element.healthEnvironmentalImpact_environmentalImpact || 'N/A'}</p>
  </section>
  <section id="22-environmental-safety">
    <div>
      <h2>27. Environmental Safety</h2>
    </div>
    {generateStrong("Health Hazards", "Health Hazards:")}
    <p>{element.environmentalSafety_healthHazards || 'N/A'}</p>
    {generateStrong("Safety Precautions", "Safety Precautions:")}
    <p>{element.environmentalSafety_safetyPrecautions || 'N/A'}</p>
  </section>
  <section id="23-safety-data-sheet">
    <div>
      {generateSectionHeader("Safety Data Sheet", "22. Safety Data Sheet")}
    </div>
    <p><strong>Handling:</strong> {element.safetyDataSheet_handling || 'N/A'}</p>
    <p><strong>Storage:</strong> {element.safetyDataSheet_storage || 'N/A'}</p>
    <p><strong>First Aid Measures:</strong> {element.safetyDataSheet_firstAidMeasures || 'N/A'}</p>
  </section>
  <section id="24-future-predictions">
    <div>
      <h2>23. Future Predictions</h2>
    </div>
    {/*  Assuming `element.futurePredictions` is a string containing JSON data */}
    {element.futurePredictions && (
      (element.futurePredictions ? JSON.parse(element.futurePredictions) : []).map((prediction: { prediction: string, description: string }, index: string) => (
        <div className='-scroll-mt-12' key={index}>
          <h3>{prediction.prediction || 'N/A'}</h3>
          <p>{prediction.description || 'N/A'}</p>
        </div>
      ))
    )}
  </section>
  <section id="25-interdisciplinary-connections">
    <h2>24. Interdisciplinary Connections</h2>
{/* {element.interdisciplinaryConnections && (
  <div>
    {Object.entries(element.interdisciplinaryConnections).map(([key, description], index) => (
      <div key={index}>
        <p>{generateStrong(key, key + ":")}</p> 
        <p>{description}</p>
      </div>
    ))}
  </div>
)} */}
  </section>
  <section id="26-external-resources">
    <h2>25. External Resources</h2>
    {/*  Assuming `element.externalResources` is a string containing JSON data */}
    {/* {element.externalResources && (
      (element.externalResources ? JSON.parse(element.externalResources) : []).map((resource: { resourceType: string, link: string, description: string }, index: string) => (
        <div key={index}>
          {generateStrong("Resource Type", "Resource Type:")}
          <p>{resource.resourceType || 'N/A'}</p>
          <a href={resource.link || undefined}><strong>Link:</strong> {resource.description || 'N/A'}</a>
        </div>
      ))
    )} */}
  </section>
        </div>


        <ScrollTopButton />
      </main>
    </>
  );

};

export default ElementPage;