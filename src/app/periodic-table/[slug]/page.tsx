import React from 'react';
import { PrismaClient } from '@prisma/client';
import { cache } from 'react';
import NavBar from '@/components/NavbarContainer';
import ScrollTopButton from '@/components/ScrollTopButton';
import { notFound } from 'next/navigation';
import LocalContextLinks from '@/components/LocalContextLinksTop'; // Import the component
import ImageCarousel from '@/components/ImageCarousel'; // Ajusta la ruta según tu estructura de proyecto
import History from '@/components/tables/hystoryTable'; // Ajusta la ruta de importación según tu estructura de proyecto



interface ImageGalleryItem {
  imageUrl: string;
  description: string;
}

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
    'Discovery and History',
    'Atomic Structure',
    'Practical Applications',
    'Oxidation States',
    'Environmental Safety',
    'Natural Occurrence',
    'Magnetic and Electrical Properties',
    'Optical Properties',
    'Quantum Properties',
    'Synthesis and Production',
    'Safety Data Sheet',
    'Legal Status',
    'External Resources',
    'Spectral Lines',
    'Economic Data',
    'Biological Role',
    'Future Predictions',
    'User Interactions',
    // Agrega otros títulos si se añaden más secciones
  ];

  // Crear enlaces a partir de los títulos de sección
  const links = sectionTitles.map(title => ({
    text: title,
    id: title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')
  }));

  // Check and map over the gallery only if it's an array of the expected type
  const images = element.imageGallery.map((img: ImageGalleryItem) => ({
    URL: img.imageUrl,
    Description: img.description
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

        {/* Discovery and History */}
        {/* Already implemented */}

        {/* Atomic Structure */}
        <section id="atomic-structure">
          <h2>Atomic Structure</h2>
          <p><strong>Electrons:</strong> {element.atomicStructure.electrons}</p>
          <p><strong>Protons:</strong> {element.atomicStructure.protons}</p>
          <p><strong>Neutrons:</strong> {element.atomicStructure.neutrons}</p>
          <p><strong>Ionization Energy:</strong> {element.atomicStructure.ionizationEnergy} eV</p>
          <p><strong>Electron Affinity:</strong> {element.atomicStructure.electronAffinity} eV</p>
        </section>

        {/* Practical Applications */}
        <section id="practical-applications">
          <h2>Practical Applications</h2>
          {element.practicalApplications.map(app => (
            <div key={app.application}>
              <p><strong>Application:</strong> {app.application}</p>
              <p><strong>Description:</strong> {app.description}</p>
            </div>
          ))}
        </section>

        {/* Oxidation States */}
        <section id="oxidation-states">
          <h2>Oxidation States</h2>
          {element.oxidationStates.map(state => (
            <p key={state.state}>{state.state}: {state.description}</p>
          ))}
        </section>

        {/* Magnetic and Electrical Properties */}
        {element.magneticElectricalProperties && (
          <section id="magnetic-and-electrical-properties">
            <h2>Magnetic and Electrical Properties</h2>
            <p><strong>Magnetic Susceptibility:</strong> {element.magneticElectricalProperties.magneticSusceptibility}</p>
            <p><strong>Electrical Resistivity:</strong> {element.magneticElectricalProperties.electricalResistivity}</p>
            <p><strong>Hall Coefficient:</strong> {element.magneticElectricalProperties.hallCoefficient}</p>
          </section>
        )}

        {/* Additional sections like "Optical Properties", "Quantum Properties", etc. will be added following a similar pattern */}

        {/* Other sections... */}
        {/* Following the provided schema, you can continue adding other necessary sections, ensuring each gets a unique ID as per the 'links' mapping. */}

        <ScrollTopButton />
      </main>
    </>
  );

};

export default ElementPage;