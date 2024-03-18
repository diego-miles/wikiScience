import React from 'react';
import { PrismaClient } from '@prisma/client';
import { cache } from 'react';
import NavBar from '@/components/NavbarContainer';
import ScrollTopButton from '@/components/ScrollTopButton';
import { notFound } from 'next/navigation';
import LocalContextLinks from '@/components/LocalContextLinks'; // Import the component
import ImageCarousel from '@/components/ImageCarousel'; // Ajusta la ruta según tu estructura de proyecto


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

const renderField = (label:any, value:any, isSubField = false) => {
  if (value === null || value === undefined) {
    return null; // Omit fields with null or undefined
  }

  if (Array.isArray(value)) {
    return (
      <div>
        <h3>{label}:</h3>
        {value.map((item, idx) => (
          <div key={idx}> {/* Changed from <p> to <div> */}
            {typeof item === 'object' ? 
              Object.entries(item).map(([key, val]) => <div key={key}>{renderField(key, val, true)}</div>) : <p>{item.toString()}</p> // Changed from .toString() to <span>
            }
          </div>
        ))}
      </div>
    );
  }

  if (typeof value === 'object' && !React.isValidElement(value)) {
    const HeadingTag = isSubField ? 'h2' : 'h2'; // Adjusted heading levels for semantics
    return (
      <div>
        <HeadingTag>{label}:</HeadingTag>
        <div style={{ paddingLeft: '10px' }}>
          {Object.entries(value).map(([key, val]) => renderField(key, val, true))}
        </div>
      </div>
    );
  }

  return <div><strong>{label}:</strong> <p>{value.toString()}</p></div>; // Changed from <p> to <div>
};





    // Estructura personalizada según tu jerarquía
  const structuredElement = {
    // "Element": element.name,
    // "Symbol": element.symbol,
    // "Name": element.name,
    // "Atomic Number": element.atomicNumber,
    // "Atomic Weight": element.atomicWeight,
    // "Appearance": element.appearance,
    // "General Description": element.description,
    "Discovery and History": element.history,
    // "Natural Occurrence and Biological Role": {
      "Occurrence": element.naturalOccurrence,
      "Biological Role": element.biologicalRole,
    // },
    // "Economic Data and Future Predictions": {
      "Economic Data": element.economicData,
      // "Future Predictions": element?.futurePredictions
    // },
    "Safety and Health Impact": element.environmentalSafety,
    "Atomic and Chemical Properties": {
      "Classifications": element.classifications,
      "Atomic Structure": element.atomicStructure,
      "Chemical Properties": element.chemicalProperties,
      "Oxidation States": element.oxidationStates,
      "Electron Configuration": element.electronConfig
    },
    "Physical Properties": element.physicalProperties,
    // "Quantum, Magnetic, and Optical Properties": {
      "Quantum Properties": element.quantumProperties,
      "Magnetic and Electrical Properties": element.magneticElectricalProperties,
      "Optical Properties": element.opticalProperties,
    // },
    // "Compounds, Isotopes, and Crystal Structures": {
      "Compounds": element.compounds,
      "Isotopes": element.isotopes,
      "Crystal Structures": element.crystalStructures,
    // },
    // "Practical Applications and Synthesis": {
      "Practical Applications": element.practicalApplications,
      "Synthesis and Production": element.synthesisProduction,
    // },
    // "Safety, Legal Status, and Interdisciplinary Connections": {
      "Safety Data Sheet": element.safetyDataSheet,
      "Legal Status": element.legalStatus,
      "Interdisciplinary Connections": element.interdisciplinaryConnections,
    // },
    // "Additional Information": {
      // "Image Gallery": element.imageGallery,
      "User Interactions": element.userInteractions,
    // }
  };

  // Function to transform title into a suitable ID format
  const titleToId = (title: string) => {
    return title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
  };
  const links = Object.keys(structuredElement).map(title => ({
    text: title,
    id: titleToId(title)
  }));

function isImageGalleryItem(item: any): item is ImageGalleryItem {
  return item && typeof item === 'object' && 'imageUrl' in item && 'description' in item;
}

  // Check and map over the gallery only if it's an array of the expected type
  const images = element.imageGallery.map((img: ImageGalleryItem) => ({
    URL: img.imageUrl,
    Description: img.description
  }));


  
  return (
    <>
      <NavBar domain="www.wiki-science.com/" menuPath='./NavigationMenu' />
      <main>
        <h1>{element.name} ({element.symbol})</h1>
        <LocalContextLinks links={links} />
            {images.length > 0 && <ImageCarousel images={images} />}
        <p><strong>Atomic Number:</strong> {element.atomicNumber}</p>
        <p><strong>Atomic Weight:</strong> {element.atomicWeight}</p>
        <p><strong>Appearance:</strong> {element.appearance}</p>
        <p><strong>General Description:</strong> {element.description}</p>

        {Object.entries(structuredElement).map(([label, value], index) => (
          <section key={label + index} id={titleToId(label)}>
            {renderField(label, value)}
          </section>
        ))}
        <ScrollTopButton />
      </main>
    </>
  );

}

export default ElementPage;
