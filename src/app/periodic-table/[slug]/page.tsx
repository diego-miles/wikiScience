import React from 'react';
import { PrismaClient } from '@prisma/client';
import { cache } from 'react';
import NavBar from '@/components/NavbarContainer';
import ScrollTopButton from '@/components/ScrollTopButton';
import { notFound } from 'next/navigation';
import LocalContextLinks from '@/components/LocalContextLinksTop'; // Import the component
import ImageCarousel from '@/components/ImageCarousel'; // Ajusta la ruta según tu estructura de proyecto
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

const getElementData = cache(async (slug: string) => {
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
    "5. Chemical Classification",
    "6. Classifications",
    "7. Atomic Structure",
    "8. Electron Configuration",
    "9. Crystal Structures",
    "10. Allotropes",
    "11. Isotopes and Abundances",
    "12. Oxidation States",
    "13. Compounds",
    "14. Magnetic and Electrical Properties",
    "15. Optical Properties",
    "16. Quantum Properties",
    "17. Spectral Lines",
    "18. Practical Applications",
    "19. Biological Role",
    "20. Environmental Safety",
    "21. Health and Environmental Impact",
    "22. Economic Data",
    "23. Legal Status",
    "24. Safety Data Sheet",
    "25. Future Predictions",
    "26. Interdisciplinary Connections",
    "27. External Resources",
    "28. User Interactions",
    "29. Synthesis and Production"
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
      <NavBar domain="www.wiki-science.com/" menuPath='./NavigationMenu' />
      <main style={{ marginTop: '9rem' }}>
        <h1>{element.name} ({element.symbol})</h1>
        {images.length > 0 && <ImageCarousel images={images} />}
        <LocalContextLinks links={links} />
        <p><strong>Atomic Number:</strong> {element.atomicNumber}</p>
        <p><strong>Atomic Weight:</strong> {element.atomicWeight}</p>
        <p><strong>Appearance:</strong> {element.appearance}</p>
        <p><strong>General Description:</strong> {element.description}</p>

        {/* Discovery Year, Melting and Boiling Points, Density, and Appearance */}
        <section id="1-physical-properties">
          <h2>1. Physical Properties</h2>
          <p><strong>Discovery Year:</strong> {element.discoveryYear}</p>
          <p><strong>Melting Point:</strong> {element.meltingPoint ? `${element.meltingPoint} K` : 'N/A'}</p>
          <p><strong>Boiling Point:</strong> {element.boilingPoint ? `${element.boilingPoint} K` : 'N/A'}</p>
          <p><strong>Density:</strong> {element.density ? `${element.density} g/cm³` : 'N/A'}</p>
          <p><strong>Appearance:</strong> {element.appearance || 'N/A'}</p>
        </section>


        <section id="2-chemical-properties">
          <h2>2. Chemical Properties</h2>
          {/* Properties like electronegativity, ionizationPotential, etc., similar to Physical Properties rendering */}
        </section>



        {/* Discovery and History */}
        <section id="3-discovery-and-history">
          <h2>Discovery and History</h2>
          <History data={sanitizedHistoryData} />
        </section>


        <section id="4-natural-occurrence">
          <h2>Natural Occurrence</h2>
          <p><strong>Type:</strong> {element.naturalOccurrence?.occurrenceType}</p>
          <p><strong>Description:</strong> {element.naturalOccurrence?.description}</p>
        </section>

        {/* <section id="5-chemical-classification">
          <h2>Chemical Classification</h2>
          {element.classifications.map((classification, index) => (
            <div key={index}>
              <p><strong>Classification:</strong> {classification.classification}</p>
              <p><strong>Description:</strong> {classification.description}</p>
            </div>
          ))}
        </section> */}


        {/* Classifications */}
        <section id="6-classifications">
          <h2>6. Classifications</h2>
          {element.classifications.map((cls, index) => (
            <div key={index}>
              <p><strong>Classification:</strong> {cls.classification}</p>
              <p><strong>Description:</strong> {cls.description}</p>
            </div>
          ))}
        </section>


        {/* Atomic Structure */}
        <section id="7-atomic-structure">
          <h2>7. Atomic Structure</h2>
          <p><strong>Electrons:</strong> {element.atomicStructure?.electrons}</p>
          <p><strong>Protons:</strong> {element.atomicStructure?.protons}</p>
          <p><strong>Neutrons:</strong> {element.atomicStructure?.neutrons}</p>
          <p><strong>Ionization Energy:</strong> {element.atomicStructure?.ionizationEnergy} eV</p>
          <p><strong>Electron Affinity:</strong> {element.atomicStructure?.electronAffinity} eV</p>
        </section>


        {/* Electron Configuration */}
        <section id="8-electron-configuration">
          <h2>8. Electron Configuration</h2>
          <p>{element.electronConfig?.configuration}</p>
          <p><strong>Description:</strong> {element.electronConfig?.description}</p>
        </section>



        <section id="9-crystal-structures">
          <h2>9. Crystal Structures</h2>
          {element.crystalStructures.map((structure, index) => (
            <div key={index}>
              <p><strong>Type:</strong> {structure?.type}</p>
              <p><strong>Temperature:</strong> {structure?.temperature} K</p>
              <p><strong>Description:</strong> {structure?.description}</p>
            </div>
          ))}
        </section>

        <section id="10-allotropes">
          <h2>10. Allotropes</h2>
          {element.allotropes.map((allotrope, index) => (
            <div key={index}>
              <p><strong>Name:</strong> {allotrope?.name}</p>
              <p><strong>Description:</strong> {allotrope?.description}</p>
            </div>
          ))}
        </section>


        <section id="11-isotopes-abundances">
          <h2>11. Isotopes and Abundances</h2>
          {element.isotopes.map(isotope => (
            <div key={isotope.isotopeNumber}>
              <p><strong>Isotope Number:</strong> {isotope?.isotopeNumber}</p>
              <p><strong>Abundance:</strong> {isotope?.abundance}%</p>
              <p><strong>Half Life:</strong> {isotope?.halfLife}</p>
              <p><strong>Decay Mode:</strong> {isotope?.decayMode}</p>
            </div>
          ))}
        </section>



                {/* Oxidation States */}
        <section id="12-oxidation-states">
          <h2>12. Oxidation States</h2>
          {element.oxidationStates.map(state => (
            <p key={state?.state}>{state?.state}: {state?.description}</p>
          ))}
        </section>


        <section id="13-compounds">
          <h2>13. Compounds</h2>
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
          <section id="14-magnetic-and-electrical-properties">
            <h2>14. Magnetic and Electrical Properties</h2>
            <p><strong>Magnetic Susceptibility:</strong> {element.magneticElectricalProperties?.magneticSusceptibility}</p>
            <p><strong>Electrical Resistivity:</strong> {element.magneticElectricalProperties?.electricalResistivity}</p>
            <p><strong>Hall Coefficient:</strong> {element.magneticElectricalProperties?.hallCoefficient}</p>
          </section>
        )}


        <section id="15-optical-properties">
          <h2>15. Optical Properties</h2>
          <p><strong>Refractive Index:</strong> {element.opticalProperties?.refractiveIndex}</p>
          <p><strong>Reflectivity:</strong> {element.opticalProperties?.reflectivity}</p>
          <p><strong>Absorption Spectrum:</strong> {element.opticalProperties?.absorptionSpectrum}</p>
        </section>




        <section id="16-quantum-properties">
          <h2>16. Quantum Properties</h2>
          {element.quantumProperties && (
            <>
              <p><strong>Quantum Numbers:</strong> {JSON.stringify(element.quantumProperties?.quantumNumbers)}</p>
              <p><strong>Electron Shell Model:</strong> {JSON.stringify(element.quantumProperties?.electronShellModel)}</p>
              <p><strong>Energy Levels:</strong> {JSON.stringify(element.quantumProperties?.energyLevels)}</p>
            </>
          )}
        </section>



        {/* Spectral Lines */}
        <section id="17-spectral-lines">
          <h2>17. Spectral Lines</h2>
          {element.spectralLines.map((line, index) => (
            <div key={index}>
              <p><strong>Wavelength:</strong> {line?.wavelength} nm</p>
              <p><strong>Intensity:</strong> {line?.intensity}</p>
              <p><strong>Line Type:</strong> {line?.lineType}</p>
            </div>
          ))}
        </section>




        {/* Practical Applications */}
        <section id="18-practical-applications">
          <h2>18. Practical Applications</h2>
          {element.practicalApplications.map(app => (
            <div key={app.application}>
              <p><strong>Application:</strong> {app?.application}</p>
              <p><strong>Description:</strong> {app?.description}</p>
            </div>
          ))}
        </section>


        {/* Biological Role */}
        <section id="19-biological-role">
          <h2>19. Biological Role</h2>
          <p><strong>Role:</strong> {element.biologicalRole?.role}</p>
          <p><strong>Description:</strong> {element.biologicalRole?.description}</p>
        </section>


        <section id="21-health-environmental-impact">
          <h2>21. Health and Environmental Impact</h2>
          <p><strong>Health Impact:</strong> {element.healthEnvironmentalImpact?.healthImpact}</p>
          <p><strong>Environmental Impact:</strong> {element.healthEnvironmentalImpact?.environmentalImpact}</p>
        </section>


        {/* Economic Data */}
        <section id="22-economic-data">
          <h2>22. Economic Data</h2>
          <p><strong>Market Price:</strong> {element.economicData?.marketPrice}</p>
          <p><strong>Producing Countries:</strong> {element.economicData?.producingCountries}</p>
          <p><strong>Industrial Use:</strong> {element.economicData?.industrialUse}</p>
          <p><strong>Description:</strong> {element.economicData?.description}</p>
        </section>



        <section id="23-legal-status">
          <h2>23. Legal Status</h2>
          {element.legalStatus && (
            <>
              <p><strong>Regulations:</strong> {element.legalStatus?.regulations}</p>
              <p><strong>Legal Restrictions:</strong> {element.legalStatus?.legalRestrictions}</p>
            </>
          )}
        </section>


        <section id="24-safety-data-sheet">
          <h2>24. Safety Data Sheet</h2>
          {element.safetyDataSheet && (
            <>
              <p><strong>Handling:</strong> {element?.safetyDataSheet?.handling}</p>
              <p><strong>Storage:</strong> {element?.safetyDataSheet?.storage}</p>
              <p><strong>First Aid Measures:</strong> {element?.safetyDataSheet?.firstAidMeasures}</p>
            </>
          )}
        </section>


        {/* Future Predictions */}
        <section id="25-future-predictions">
          <h2>25. Future Predictions</h2>
          {element.futurePredictions.map((prediction, index) => (
            <div key={index}>
              <p><strong>Prediction:</strong> {prediction.prediction}</p>
              <p><strong>Description:</strong> {prediction.description}</p>
            </div>
          ))}
        </section>


        <section id="26-interdisciplinary-connections">
          <h2>26. Interdisciplinary Connections</h2>
          {/* Assume it's parsed into objects with titles and descriptions */}
          {/* {element.interdisciplinaryConnections?.map((connection, index) => (
            <div key={index}>
              <p><strong>Title:</strong> {connection.title}</p>
              <p><strong>Description:</strong> {connection.description}</p>
            </div>
          ))} */}
        </section>


        <section id="27-external-resources">
          <h2>27. External Resources</h2>
          {element.externalResources && element.externalResources.map((resource, index) => (
            <div key={index}>
              <p><strong>Resource Type:</strong> {resource.resourceType}</p>
              <a href={resource?.link}><strong>Link:</strong> {resource?.description}</a>
            </div>
          ))}
        </section>

        <section id="28-user-interactions">
          <h2>28. User Interactions</h2>
          {element.userInteractions && element.userInteractions.map((interaction, index) => (
            <div key={index}>
              <p><strong>Contribution:</strong> {interaction?.contribution}</p>
              <p><strong>Question:</strong> {interaction?.question}</p>
              <p><strong>Discussion:</strong> {interaction?.discussion}</p>
            </div>
          ))}
        </section>


        <section id="29-synthesis-and-production">
          <h2>29. Synthesis and Production</h2>
          {element.synthesisProduction && (
            <>
              <p><strong>Synthesis Methods:</strong> {element?.synthesisProduction?.synthesisMethods}</p>
              <p><strong>Extraction Methods:</strong> {element?.synthesisProduction?.extractionMethods}</p>
              <p><strong>Global Production:</strong> {element?.synthesisProduction?.globalProduction}</p>
            </>
          )}
        </section>

        {/* Environmental Safety */}
        <section id="environmental-safety">
          <h2>Environmental Safety</h2>
          <p><strong>Health Hazards:</strong> {element.environmentalSafety?.healthHazards}</p>
          <p><strong>Safety Precautions:</strong> {element.environmentalSafety?.safetyPrecautions}</p>
        </section>


        <ScrollTopButton />
      </main>
    </>
  );

};

export default ElementPage;