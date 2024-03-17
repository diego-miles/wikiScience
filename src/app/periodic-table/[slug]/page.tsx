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
    const HeadingTag = isSubField ? 'h4' : 'h3'; // Adjusted heading levels for semantics
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
    "Atomic Number": element.atomicNumber,
    "Atomic Weight": element.atomicWeight,
    "Appearance": element.appearance,
    "General Description": element.description,
    "Discovery and History": element.history,
    "Natural Occurrence and Biological Role": {
      "Occurrence": element.naturalOccurrence,
      "Biological Role": element.biologicalRole
    },
    "Economic Data and Future Predictions": {
      "Economic Data": element.economicData,
      "Future Predictions": element.futurePredictions
    },
    "Environmental Safety and Health Impact": element.environmentalSafety,
    "Atomic and Chemical Properties": {
      "Classifications": element.classifications,
      "Atomic Structure": element.atomicStructure,
      "Chemical Properties": element.chemicalProperties,
      "Oxidation States": element.oxidationStates,
      "Electron Configuration": element.electronConfig
    },
    "Physical Properties": element.physicalProperties,
    "Quantum, Magnetic, and Optical Properties": {
      "Quantum Properties": element.quantumProperties,
      "Magnetic and Electrical Properties": element.magneticElectricalProperties,
      "Optical Properties": element.opticalProperties
    },
    "Compounds, Isotopes, and Crystal Structures": {
      "Compounds": element.compounds,
      "Isotopes": element.isotopes,
      "Crystal Structures": element.crystalStructures
    },
    "Practical Applications and Synthesis": {
      "Practical Applications": element.practicalApplications,
      "Synthesis and Production": element.synthesisProduction
    },
    "Safety, Legal Status, and Interdisciplinary Connections": {
      "Safety Data Sheet": element.safetyDataSheet,
      "Legal Status": element.legalStatus,
      "Interdisciplinary Connections": element.interdisciplinaryConnections
    },
    "Additional Information": {
      "Image Gallery": element.imageGallery,
      "User Interactions": element.userInteractions
    }
  };

  // Rendering logic remains the same.


  return (
    <div>
      <NavBar domain="www.wiki-science.com/" menuPath='./NavigationMenu' />
      <main>
        <h1>{element.name} ({element.symbol})</h1>
        {Object.entries(structuredElement).map(([label, value]) => renderField(label, value))}
        <ScrollTopButton />
      </main>
    </div>
  );
}



export default ElementPage;
