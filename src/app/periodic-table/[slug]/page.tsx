import React from 'react';
import { PrismaClient } from '@prisma/client';
import {ChemicalElement} from '@prisma/client';
import { unstable_cache } from 'next/cache';
import NavBar from '@/components/navigation/NavbarContainer';
import ScrollTopButton from '@/components/ScrollTopButton';
import { notFound } from 'next/navigation';
import LocalContextLinks from '@/components/LocalContextLinksTop'; // Import the component
import ImageCarousel from '@/components/books-components/ImageCarousel'; // Ajusta la ruta según tu estructura de proyecto
import History from '@/components/tables/hystoryTable'; // Ajusta la ruta de importación según tu estructura de proyecto



type ImageGalleryItem = {
  imageUrl: string | null;
  description: string | null;
};


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

async function ElementPage({ params: { slug } }: ElementPageProps) {
  const element = await getElementData(slug);

  if (!element) {
    return <div>Error fetching element data</div>;
  }

const sectionTitles = [
    "1. Physical Properties",
    "2. Chemical Properties",
    "3. Discovery and History",
    "4. Natural Occurrence",
    "5. Classifications",
    "6. Atomic Structure",
    "7. Electron Configuration",
    "8. Crystal Structures",
    "9. Allotropes",
    "10. Isotopes and Abundances",
    "11. Oxidation States",
    "12. Compounds",
    "13. Magnetic and Electrical Properties",
    "14. Optical Properties",
    "15. Quantum Properties",
    "16. Spectral Lines",
    "17. Practical Applications",
    "18. Biological Role",
    "19. Health and Environmental Impact",
    "20. Economic Data",
    "21. Legal Status",
    "22. Safety Data Sheet",
    "23. Future Predictions",
    "24. Interdisciplinary Connections",
    "25. External Resources",
    "26. User Interactions",
    "27. Synthesis and Production",
    "28. Environmental Safety"
];



  // Crear enlaces a partir de los títulos de sección
  const links = sectionTitles.map(title => ({
    text: title,
    id: title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')
  }));

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
      <main style={{ marginTop: '9rem' }}>
        <h1>{element.name} ({element.symbol})</h1>
        {/* {images.length > 0 && <ImageCarousel images={images} />} */}
        <LocalContextLinks links={links} />
        <p><strong>Atomic Number:</strong> {element.atomicNumber}</p>
        <p><strong>Atomic Weight:</strong> {element.atomicWeight}</p>
        <p><strong>Appearance:</strong> {element.appearance}</p>
        <p><strong>General Description:</strong> {element.description}</p>

        {/* Discovery Year, Melting and Boiling Points, Density, and Appearance */}
        <section id="1-physical-properties">
            <h2>1. Physical Properties</h2>
            <p><strong>Melting Point:</strong> {element.physicalProperties?.meltingPoint ? `${element.physicalProperties.meltingPoint}` : 'N/A'}</p>
            <p><strong>Boiling Point:</strong> {element.physicalProperties?.boilingPoint ? `${element.physicalProperties.boilingPoint}` : 'N/A'}</p>
            <p><strong>Density:</strong> {element.physicalProperties?.density ? `${element.physicalProperties.density} ` : 'N/A'}</p>
            <p><strong>Atomic Radius:</strong> {element.physicalProperties?.atomicRadius || 'N/A'}</p>
            <p><strong>Atomic Volume:</strong> {element.physicalProperties?.atomicVolume || 'N/A'}</p>
            <p><strong>Covalent Radius:</strong> {element.physicalProperties?.covalentRadius || 'N/A'}</p>
            <p><strong>Molar Heat:</strong> {element.physicalProperties?.molarHeat || 'N/A'}</p>
            <p><strong>Thermal Conductivity:</strong> {element.physicalProperties?.thermalConductivity || 'N/A'}</p>
            <p><strong>Sound Velocity:</strong> {element.physicalProperties?.soundVelocity || 'N/A'}</p>
            <p><strong>Mohs Hardness:</strong> {element.physicalProperties?.mohsHardness || 'N/A'}</p>
            <p><strong>Brinell Hardness:</strong> {element.physicalProperties?.brinellHardness || 'N/A'}</p>
            <p><strong>Specific Heat Capacity:</strong> {element.physicalProperties?.specificHeatCapacity || 'N/A'}</p>
            <p><strong>Thermal Expansion Coefficient:</strong> {element.physicalProperties?.thermalExpansionCoefficient || 'N/A'}</p>
            <p><strong>Phase Transition Temperatures:</strong> {element.physicalProperties?.phaseTransitionTemperatures || 'N/A'}</p>
        </section>

        <section id="2-chemical-properties">
            <h2>2. Chemical Properties</h2>
            <p><strong>Reactivity:</strong> {element.chemicalProperties?.reactivity || 'N/A'}</p>
            <p><strong>Common Oxidation States:</strong> {element.chemicalProperties?.commonOxidationStates || 'N/A'}</p>
            <p><strong>Standard Reduction Potential:</strong> {element.chemicalProperties?.standardReductionPotential || 'N/A'}</p>
            <p><strong>Description:</strong> {element.chemicalProperties?.description || 'N/A'}</p>
        </section>


        {/* Discovery and History */}
        <section id="3-discovery-and-history" className='mx-auto w-fit'>
          <h2>3. Discovery and History</h2>
          <History data={sanitizedHistoryData} />
        </section>


        <section id="4-natural-occurrence">
          <h2>4. Natural Occurrence</h2>
          <p><strong>Type:</strong> {element.naturalOccurrence?.occurrenceType}</p>
          <p><strong>Description:</strong> {element.naturalOccurrence?.description}</p>
        </section>



        {/* Classifications */}
        <section id="5-classifications">
          <h2>5. Classifications</h2>
          {element.classifications.map((cls, index) => (
            <div key={index}>
              <p><strong>Classification:</strong> {cls.classification}</p>
              <p><strong>Description:</strong> {cls.description}</p>
            </div>
          ))}
        </section>


        {/* Atomic Structure */}
        <section id="6-atomic-structure">
          <h2>6. Atomic Structure</h2>
          <p><strong>Electrons:</strong> {element.atomicStructure?.electrons}</p>
          <p><strong>Protons:</strong> {element.atomicStructure?.protons}</p>
          <p><strong>Neutrons:</strong> {element.atomicStructure?.neutrons}</p>
          <p><strong>Ionization Energy:</strong> {element.atomicStructure?.ionizationEnergy} eV</p>
          <p><strong>Electron Affinity:</strong> {element.atomicStructure?.electronAffinity} eV</p>
          <p><strong>Atomic Radius:</strong> {element.atomicStructure?.atomicRadius} eV</p>
          <p><strong>Atomic Polarization:</strong> {element.atomicStructure?.atomicPolarization} eV</p>
          <p><strong>Electronegativity:</strong> {element.atomicStructure?.electronegativity} eV</p>
          <p><strong>First Ionization Potential:</strong> {element.atomicStructure?.firstIonizationPotential} eV</p>
        </section>


        {/* Electron Configuration */}
        <section id="7-electron-configuration">
          <h2>7. Electron Configuration</h2>
          <p>{element.electronConfig?.configuration}</p>
          <p><strong>Description:</strong> {element.electronConfig?.description}</p>
        </section>



        <section id="8-crystal-structures">
          <h2>8. Crystal Structures</h2>
          {element.crystalStructures.map((structure, index) => (
            <div key={index}>
              <p><strong>Type:</strong> {structure?.type}</p>
              <p><strong>Temperature:</strong> {structure?.temperature} K</p>
              <p><strong>Description:</strong> {structure?.description}</p>
            </div>
          ))}
        </section>

        <section id="9-allotropes">
          <h2>9. Allotropes</h2>
          {element.allotropes.map((allotrope, index) => (
            <div key={index}>
              <p><strong>Name:</strong> {allotrope?.name}</p>
              <p><strong>Description:</strong> {allotrope?.description}</p>
            </div>
          ))}
        </section>


        <section id="10-isotopes-abundances">
          <h2>10. Isotopes and Abundances</h2>
          {element.isotopes.map(isotope => (
            <div key={isotope.isotopeNumber}>
              <p><strong>Isotope Number:</strong> {isotope?.isotopeNumber}</p>
              <p><strong>Abundance:</strong> {isotope?.abundance}%</p>
              <p><strong>Half Life:</strong> {isotope?.halfLife}</p>
              <p><strong>Decay Mode:</strong> {isotope?.decayMode}</p>
              <p><strong>Description:</strong> {isotope?.description}</p>
            </div>
          ))}
        </section>



                {/* Oxidation States */}
        <section id="11-oxidation-states">
          <h2>11. Oxidation States</h2>
          {element.oxidationStates.map(state => (
            <p key={state?.state}>{state?.state}: {state?.description}</p>
          ))}
        </section>


        <section id="12-compounds">
          <h2>12. Compounds</h2>
          {element.compounds.map((compound, index) => (
            <div key={index}>
              <p><strong>Name:</strong> {compound?.name}</p>
              <p><strong>Formula:</strong> {compound?.formula}</p>
              <p><strong>Description:</strong> {compound?.description}</p>
            </div>
          ))}
        </section>


        {/* Magnetic and Electrical Properties */}
        {element.magneticElectricalProperties && (
          <section id="13-magnetic-and-electrical-properties">
            <h2>13. Magnetic and Electrical Properties</h2>
            <p><strong>Magnetic Susceptibility:</strong> {element.magneticElectricalProperties?.magneticSusceptibility}</p>
            <p><strong>Electrical Resistivity:</strong> {element.magneticElectricalProperties?.electricalResistivity}</p>
            <p><strong>Hall Coefficient:</strong> {element.magneticElectricalProperties?.hallCoefficient}</p>
          </section>
        )}


        <section id="14-optical-properties">
          <h2>14. Optical Properties</h2>
          <p><strong>Refractive Index:</strong> {element.opticalProperties?.refractiveIndex}</p>
          <p><strong>Reflectivity:</strong> {element.opticalProperties?.reflectivity}</p>
          <p><strong>Absorption Spectrum:</strong> {element.opticalProperties?.absorptionSpectrum}</p>
        </section>




        <section id="15-quantum-properties">
          <h2>15. Quantum Properties</h2>
          {element.quantumProperties && (
            <>
              <p><strong>Quantum Numbers:</strong> {JSON.stringify(element.quantumProperties?.quantumNumbers)}</p>
              <p><strong>Electron Shell Model:</strong> {JSON.stringify(element.quantumProperties?.electronShellModel)}</p>
              <p><strong>Energy Levels:</strong> {JSON.stringify(element.quantumProperties?.energyLevels)}</p>
            </>
          )}
        </section>



        {/* Spectral Lines */}
        <section id="16-spectral-lines">
          <h2>16. Spectral Lines</h2>
          {element.spectralLines.map((line, index) => (
            <div key={index}>
              <p><strong>Wavelength:</strong> {line?.wavelength} nm</p>
              <p><strong>Intensity:</strong> {line?.intensity}</p>
              <p><strong>Line Type:</strong> {line?.lineType}</p>
            </div>
          ))}
        </section>




        {/* Practical Applications */}
        <section id="17-practical-applications">
          <h2>17. Practical Applications</h2>
          {element.practicalApplications.map(app => (
            <div key={app.application}>
              <p><strong>Application:</strong> {app?.application}</p>
              <p><strong>Description:</strong> {app?.description}</p>
            </div>
          ))}
        </section>


        {/* Biological Role */}
        <section id="18-biological-role">
          <h2>18. Biological Role</h2>
          <p><strong>Role:</strong> {element.biologicalRole?.role}</p>
          <p><strong>Description:</strong> {element.biologicalRole?.description}</p>
        </section>


        <section id="19-health-environmental-impact">
          <h2>19. Health and Environmental Impact</h2>
          <p><strong>Health Impact:</strong> {element.healthEnvironmentalImpact?.healthImpact}</p>
          <p><strong>Environmental Impact:</strong> {element.healthEnvironmentalImpact?.environmentalImpact}</p>
        </section>


        {/* Economic Data */}
        <section id="20-economic-data">
          <h2>20. Economic Data</h2>
          <p><strong>Market Price:</strong> {element.economicData?.marketPrice}</p>
          <p><strong>Producing Countries:</strong> {element.economicData?.producingCountries}</p>
          <p><strong>Industrial Use:</strong> {element.economicData?.industrialUse}</p>
          <p><strong>Description:</strong> {element.economicData?.description}</p>
        </section>



        <section id="21-legal-status">
          <h2>21. Legal Status</h2>
          {element.legalStatus && (
            <>
              <p><strong>Regulations:</strong> {element.legalStatus?.regulations}</p>
              <p><strong>Legal Restrictions:</strong> {element.legalStatus?.legalRestrictions}</p>
            </>
          )}
        </section>


        <section id="22-safety-data-sheet">
          <h2>22. Safety Data Sheet</h2>
          {element.safetyDataSheet && (
            <>
              <p><strong>Handling:</strong> {element?.safetyDataSheet?.handling}</p>
              <p><strong>Storage:</strong> {element?.safetyDataSheet?.storage}</p>
              <p><strong>First Aid Measures:</strong> {element?.safetyDataSheet?.firstAidMeasures}</p>
            </>
          )}
        </section>


        {/* Future Predictions */}
        <section id="23-future-predictions">
          <h2>23. Future Predictions</h2>
          {element.futurePredictions.map((prediction, index) => (
            <div key={index}>
              <p><strong>Prediction:</strong> {prediction.prediction}</p>
              <p><strong>Description:</strong> {prediction.description}</p>
            </div>
          ))}
        </section>


        <section id="24-interdisciplinary-connections">
            <h2>24. Interdisciplinary Connections</h2>
            {/* Assuming interdisciplinaryConnections is an object with titles as keys and descriptions as values */}
            {element.interdisciplinaryConnections ? (
                Object.entries(element.interdisciplinaryConnections).map(([key, description], index) => (
                    <div key={index}>
                        <p><strong>Title:</strong> {key.replace(/([A-Z])/g, ' $1').trim()}</p> {/* This will format the key to add spaces before any capital letters */}
                        <p><strong>Description:</strong> {description}</p>
                    </div>
                ))
            ) : (
                <p>No interdisciplinary connections available.</p>
            )}
        </section>


        <section id="25-external-resources">
          <h2>25. External Resources</h2>
          {element.externalResources && element.externalResources.map((resource, index) => (
            <div key={index}>
              <p><strong>Resource Type:</strong> {resource.resourceType}</p>
              <a href={resource?.link || undefined}><strong>Link:</strong> {resource?.description}</a>
            </div>
          ))}
        </section>


        <section id="26-user-interactions">
          <h2>26. User Interactions</h2>
          {element.userInteractions && element.userInteractions.map((interaction, index) => (
            <div key={index}>
              <p><strong>Contribution:</strong> {interaction?.contribution}</p>
              <p><strong>Question:</strong> {interaction?.question}</p>
              <p><strong>Discussion:</strong> {interaction?.discussion}</p>
            </div>
          ))}
        </section>


        <section id="27-synthesis-and-production">
          <h2>27. Synthesis and Production</h2>
          {element.synthesisProduction && (
            <>
              <p><strong>Synthesis Methods:</strong> {element?.synthesisProduction?.synthesisMethods}</p>
              <p><strong>Extraction Methods:</strong> {element?.synthesisProduction?.extractionMethods}</p>
              <p><strong>Global Production:</strong> {element?.synthesisProduction?.globalProduction}</p>
            </>
          )}
        </section>

        {/* Environmental Safety */}
        <section id="28-environmental-safety">
          <h2>28. Environmental Safety</h2>
          <p><strong>Health Hazards:</strong> {element.environmentalSafety?.healthHazards}</p>
          <p><strong>Safety Precautions:</strong> {element.environmentalSafety?.safetyPrecautions}</p>
        </section>


        <ScrollTopButton />
      </main>
    </>
  );

};

export default ElementPage;