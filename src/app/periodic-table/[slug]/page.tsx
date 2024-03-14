import React from 'react';
import { PrismaClient } from '@prisma/client';
import { cache } from 'react';
import NavBar from '@/components/NavbarContainer';
import ScrollTopButton from '@/components/ScrollTopButton';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

interface ElementPageProps {
  params: {
    slug: string;
  };
}

// Cached function to get element data
const getElementData = cache(async (slug: string) => {
  const element = await prisma.chemicalElement.findUnique({
    where: { slug },
    include: {
      atomicStructure: true,
      physicalProperties: true,
      chemicalProperties: true,
      history: true,
      classifications: true,
      isotopes: {
        include: {
          abundances: true,
        },
      },
      compounds: true,
      crystalStructures: true,
      allotropes: true,
      electronConfig: true,
      oxidationStates: true,
      environmentalSafety: true,
      practicalApplications: true,
      economicData: true,
      spectralLines: true,
      naturalOccurrence: true,
      biologicalRole: true,
      imageGallery: true,
      futurePredictions: true,
      userInteractions: true,
      externalResources: true,
      magneticElectricalProperties: true,
      opticalProperties: true,
      quantumProperties: true,
      synthesisProduction: true,
      safetyDataSheet: true,
      legalStatus: true,
      interdisciplinaryConnections: true,
      // ...any other relationships you might have
    },
  });

  if (!element) notFound();
  return element;
});


async function ElementPage({ params: { slug } }: ElementPageProps) {
  const element = await getElementData(slug);

  if (!element) {
    return <div>Error fetching element data</div>;
  }

  // Utility function to safely check and render data fields
  const renderField = (label: any, value: any) => value ? <p><strong>{label}:</strong> {value}</p> : null;

  return (
    <div>
      <NavBar domain="www.wiki-science.com/" menuPath='./NavigationMenu' />
      <main>
        <h1>{element.name} ({element.symbol})</h1>
        {renderField("Description", element.description)}
        {renderField("Atomic Number", element.atomicNumber)}
        {renderField("Atomic Weight", element.atomicWeight)}
        {/* ...other basic fields */}

        {/* Existing sections for Atomic Structure, Classifications, Isotopes, etc. */}

        {/* Render Crystal Structures */}
        {element.crystalStructures && element.crystalStructures.length > 0 && (
          <section>
            <h2>Crystal Structures</h2>
            {element.crystalStructures.map((structure, index) => (
              <div key={index}>
                {renderField("Type", structure.type)}
                {renderField("Temperature", structure.temperature)}
              </div>
            ))}
          </section>
        )}

        {/* Render Allotropes */}
        {element.allotropes && element.allotropes.length > 0 && (
          <section>
            <h2>Allotropes</h2>
            {element.allotropes.map((allotrope, index) => (
              <div key={index}>
                {renderField("Name", allotrope.name)}
                {renderField("Description", allotrope.description)}
              </div>
            ))}
          </section>
        )}

        {/* Render Electron Configuration */}
        {element.electronConfig && (
          <section>
            <h2>Electron Configuration</h2>
            {renderField("Configuration", element.electronConfig.configuration)}
          </section>
        )}

        {/* Render Oxidation States */}
        {element.oxidationStates && element.oxidationStates.length > 0 && (
          <section>
            <h2>Oxidation States</h2>
            {element.oxidationStates.map((state, index) => (
              <div key={index}>
                {renderField("State", state.state)}
              </div>
            ))}
          </section>
        )}

        {/* Render History */}
        {element.history && element.history.length > 0 && (
          <section>
            <h2>History</h2>
            {element.history.map((event, index) => (
              <div key={index}>
                {renderField("Event", event.event)}
                {renderField("Year", event.year)}
                {renderField("Description", event.description)}
                {/* ... other fields of history ... */}
              </div>
            ))}
          </section>
        )}

        {/* // Render Physical Properties */}
        {element.physicalProperties && (
          <section>
            <h2>Physical Properties</h2>
            {renderField("Melting Point", element.physicalProperties.meltingPoint)}
            {renderField("Boiling Point", element.physicalProperties.boilingPoint)}
            {/* ...other physical properties */}
          </section>
        )}

        {/* // Render Chemical Properties */}
        {element.chemicalProperties && (
          <section>
            <h2>Chemical Properties</h2>
            {renderField("Electronegativity", element.chemicalProperties.electronegativity)}
            {/* ...other chemical properties */}
          </section>
        )}

        {/* // Render Practical Applications */}
        {element.practicalApplications && element.practicalApplications.length > 0 && (
          <section>
            <h2>Practical Applications</h2>
            {element.practicalApplications.map((application, index) => (
              <div key={index}>
                {renderField("Application", application.application)}
                {renderField("Description", application.description)}
              </div>
            ))}
          </section>
        )}

        {/* // Render Economic Data */}
        {element.economicData && (
          <section>
            <h2>Economic Data</h2>
            {renderField("Market Price", element.economicData.marketPrice)}
            {/* ...other economic data */}
          </section>
        )}

        {/* // Render Health and Environmental Impact */}
        {element.environmentalSafety && (
          <section>
            <h2>Health & Environmental Impact</h2>
            {renderField("Health Impact", element.environmentalSafety.biosphereAccumulation)}
            {/* ...other health and environmental impacts */}
          </section>
        )}

        {/* // Render Spectral Lines */}
        {element.spectralLines && element.spectralLines.length > 0 && (
          <section>
            <h2>Spectral Lines</h2>
            {element.spectralLines.map((line, index) => (
              <div key={index}>
                {renderField("Wavelength", line.wavelength)}
                {/* ...other spectral line details */}
              </div>
            ))}
          </section>
        )}

        {/* // ...previous code... */}

        {/* // Render Isotopes */}
        {element.isotopes && element.isotopes.length > 0 && (
          <section>
            <h2>Isotopes</h2>
            {element.isotopes.map((isotope, index) => (
              <div key={index}>
                {renderField("Isotope Number", isotope.isotopeNumber)}
                {renderField("Abundance", isotope.abundance)}
                {/* ...other fields of isotopes... */}
              </div>
            ))}
          </section>
        )}

        {/* // Render Compounds */}
        {element.compounds && element.compounds.length > 0 && (
          <section>
            <h2>Compounds</h2>
            {element.compounds.map((compound, index) => (
              <div key={index}>
                {renderField("Name", compound.name)}
                {renderField("Formula", compound.formula)}
                {/* ...other fields of compounds... */}
              </div>
            ))}
          </section>
        )}

        {/* // Render Image Gallery */}
        {element.imageGallery && element.imageGallery.length > 0 && (
          <section>
            <h2>Image Gallery</h2>
            {element.imageGallery.map((image, index) => (
              <div key={index}>
                {/* Render images here */}
              </div>
            ))}
          </section>
        )}

        {/* // Render User Interactions */}
        {element.userInteractions && element.userInteractions.length > 0 && (
          <section>
            <h2>User Interactions</h2>
            {element.userInteractions.map((interaction, index) => (
              <div key={index}>
                {renderField("Contribution", interaction.contribution)}
                {/* ...other fields of user interactions... */}
              </div>
            ))}
          </section>
        )}

        {/* // Render External Resources */}
        {element.externalResources && element.externalResources.length > 0 && (
          <section>
            <h2>External Resources</h2>
            {element.externalResources.map((resource, index) => (
              <div key={index}>
                {renderField("Resource Type", resource.resourceType)}
                {/* ...other fields of external resources... */}
              </div>
            ))}
          </section>
        )}

        {/* // ... Add similar sections for each remaining relationship ... */}

        {/* // End of component */}
        <ScrollTopButton />
        </main>
        </div>
        );
        }

export default ElementPage;

