import React from 'react';
import { PrismaClient } from '@prisma/client';
import { cache } from 'react';
import NavBar from '@/components/navigation/NavbarContainer';
import ScrollTopButton from '@/components/ScrollTopButton';
import { notFound } from 'next/navigation';
import LocalContextLinks from '@/components/LocalContextLinksTop';

const prisma = new PrismaClient();

interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Cache function to get electronic component data
const getElectronicComponent = cache(async (slug: string) => {
  const electronicComponent = await prisma.electronicComponent.findUnique({
    where: { slug: slug },
  });

  if (!electronicComponent) notFound();

  return electronicComponent;
});

// Generate metadata for the electronic component
export async function generateMetadata({
  params: { slug },
}: ProductPageProps) {
  const electronicComponent = await getElectronicComponent(slug);
  return {
    title: electronicComponent?.name,
  };
}

// Display electronic component details on the page
const ElectronicComponentPage: React.FC<ProductPageProps> = async ({ params: { slug } }) => {
  const electronicComponent = await getElectronicComponent(slug);

  const contextLinks = [
    { text: 'Variants', id: 'variants-section' },
    { text: 'Functions', id: 'functions-section' },
    { text: 'Operations', id: 'operations-section' },
    { text: 'Applications', id: 'applications-section' },
    { text: 'Thermal Specifications', id: 'thermal-specifications-section' },
    { text: 'Manufacturers', id: 'manufacturers-section' },
    { text: 'Life Span', id: 'life-span-section' },
    { text: 'History', id: 'history-section' },
    { text: 'Availability', id: 'availability-section' },
    { text: 'Pricing', id: 'pricing-section' },
    { text: 'Footprint', id: 'footprint-section' },
    { text: 'Standards and Regulations', id: 'standards-and-regulations-section' },
    { text: 'Package Type', id: 'package-type-section' },
    { text: 'Package Dimensions', id: 'package-dimensions-section' },
    { text: 'Pin Count', id: 'pin-count-section' },
    { text: 'Mounting Type', id: 'mounting-type-section' },
    { text: 'MTBF', id: 'mtbf-section' },
    { text: 'Failure Rate', id: 'failure-rate-section' },
    { text: 'RoHS Compliant', id: 'rohs-compliant-section' },
    { text: 'REACH Compliant', id: 'reach-compliant-section' },
    { text: 'Lead Free', id: 'lead-free-section' },
  ];

  if (!electronicComponent) {
    console.error('Electronic component not found');
    return <div>Error fetching electronic component</div>;
  }

  return (
    <div>
      <main className='mt-[9rem]'>
        <h1>{electronicComponent.name}</h1>
        <LocalContextLinks links={contextLinks} />
        <p>Description: {electronicComponent.description}</p>

        <section id="variants-section">
          <h2>Variants</h2>
          {electronicComponent.variants && electronicComponent.variants.map((variant) => (
            <div key={variant.name}>
              <h3>{variant.name}</h3>
              <p>{variant.description}</p>
              <p>{variant.source}</p>
            </div>
          ))}
        </section>

        <section id="functions-section">
          <h2>Functions</h2>
          {electronicComponent.function && (
            <div>
              <p>Function: {electronicComponent.function.Function}</p>
              <h3>Physical Principles</h3>
              <ul>
                {electronicComponent.function.physicalPrinciples.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
              <h3>Chemistry Principles</h3>
              <ul>
                {electronicComponent.function.chemistryPrinciples.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
              <h3>Comparisons</h3>
              {electronicComponent.function.comparisons.map((comparison) => (
                <div key={comparison.comparison}>
                  <p>{comparison.comparison}</p>
                  <p>{comparison.source}</p>
                </div>
              ))}
              <h3>Capabilities</h3>
              <ul>
                {electronicComponent.function.capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
              <h3>Limitations</h3>
              <ul>
                {electronicComponent.function.limitations.map((limitation) => (
                  <li key={limitation}>{limitation}</li>
                ))}
              </ul>
              <p>Diagrams: {electronicComponent.function.diagrams}</p>
            </div>
          )}
        </section>

        <section id="operations-section">
          <h2>Operations</h2>
          {electronicComponent.operation && (
            <div>
              <p>Internal Structure: {electronicComponent.operation.internalStructure}</p>
              <p>Operating Mechanisms: {electronicComponent.operation.operatingMechanisms}</p>
              <p>Input Output Characteristics: {electronicComponent.operation.inputOutputCharacteristics}</p>
              <h3>Functional Relationships</h3>
              {electronicComponent.operation.functionalRelationships.map((relationship) => (
                <div key={relationship.relationship}>
                  <p>{relationship.relationship}</p>
                  <p>{relationship.source}</p>
                </div>
              ))}
              <h3>Equations</h3>
              {electronicComponent.operation.equations.map((equation) => (
                <div key={equation.equation}>
                  <p>Equation: {equation.equation}</p>
                  <p>Description: {equation.description}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section id="applications-section">
          <h2>Applications</h2>
          {electronicComponent.applications.map((application) => (
            <div key={application.field}>
              <h3>Field: {application.field}</h3>
              <h4>Examples</h4>
              <ul>
                {application.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
              <h4>Design Considerations</h4>
              {application.designConsiderations.map((consideration) => (
                <div key={consideration.consideration}>
                  <p>Consideration: {consideration.consideration}</p>
                  <p>Explanation: {consideration.explanation}</p>
                </div>
              ))}
              <h4>Challenges</h4>
              {application.challenges.map((challenge) => (
                <div key={challenge.challenge}>
                  <p>Challenge: {challenge.challenge}</p>
                  <p>Explanation: {challenge.explanation}</p>
                </div>
              ))}
              <p>Source: {application.source}</p>
            </div>
          ))}
        </section>

        <section id="thermal-specifications-section">
          <h2>Thermal Specifications</h2>
          {electronicComponent.thermalSpecifications && (
            <div>
              <h3>Thermal Resistance Junction To Case</h3>
              <p>{electronicComponent.thermalSpecifications.thermalResistanceJunctionToCase.description}</p>
              <p>{electronicComponent.thermalSpecifications.thermalResistanceJunctionToCase.source}</p>
              <h3>Thermal Resistance Junction To Ambient</h3>
              <p>{electronicComponent.thermalSpecifications.thermalResistanceJunctionToAmbient.description}</p>
              <p>{electronicComponent.thermalSpecifications.thermalResistanceJunctionToAmbient.source}</p>
              <h3>Maximum Operating Temperature</h3>
              <p>{electronicComponent.thermalSpecifications.maximumOperatingTemperature.value}</p>
              <p>{electronicComponent.thermalSpecifications.maximumOperatingTemperature.condition}</p>
              <p>{electronicComponent.thermalSpecifications.maximumOperatingTemperature.description}</p>
              <p>{electronicComponent.thermalSpecifications.maximumOperatingTemperature.source}</p>
              <h3>Minimum Operating Temperature</h3>
              <p>{electronicComponent.thermalSpecifications.minimumOperatingTemperature.value}</p>
              <p>{electronicComponent.thermalSpecifications.minimumOperatingTemperature.condition}</p>
              <p>{electronicComponent.thermalSpecifications.minimumOperatingTemperature.description}</p>
              <p>{electronicComponent.thermalSpecifications.minimumOperatingTemperature.source}</p>
            </div>
          )}
        </section>

        <section id="manufacturers-section">
          <h2>Manufacturers</h2>
          {electronicComponent.manufacturers.map((manufacturer) => (
            <div key={manufacturer.name}>
              <p>Name: {manufacturer.name}</p>
              <p>Link: <a href={manufacturer.link}>{manufacturer.link}</a></p>
            </div>
          ))}
        </section>

        <section id="life-span-section">
          <h2>Life Span</h2>
          {electronicComponent.lifeSpan && (
            <div>
              <p>Value: {electronicComponent.lifeSpan.value}</p>
              <p>Source: {electronicComponent.lifeSpan.source}</p>
            </div>
          )}
        </section>

        <section id="history-section">
          <h2>History</h2>
          {electronicComponent.history.map((event) => (
            <div key={event.event}>
              <p>Event: {event.event}</p>
              <p>Year: {event.year}</p>
              <p>Description: {event.description}</p>
              <p>Source: {event.source}</p>
            </div>
          ))}
        </section>

        <section id="availability-section">
          <h2>Availability</h2>
          {electronicComponent.availability && (
            <div>
              <p>Status: {electronicComponent.availability.status ? 'Available' : 'Not Available'}</p>
              <p>Description: {electronicComponent.availability.description}</p>
            </div>
          )}
        </section>

        <section id="pricing-section">
          <h2>Pricing</h2>
          {electronicComponent.pricing && (
            <div>
              <p>Value: {electronicComponent.pricing.value}</p>
              <p>Condition: {electronicComponent.pricing.condition}</p>
            </div>
          )}
        </section>

        <section id="footprint-section">
          <h2>Footprint</h2>
          {electronicComponent.footprint && (
            <div>
              <p>Description: {electronicComponent.footprint.description}</p>
              <p>Source: {electronicComponent.footprint.source}</p>
            </div>
          )}
        </section>

        <section id="standards-and-regulations-section">
          <h2>Standards and Regulations</h2>
          {electronicComponent.standardsAndRegulations.map((standard) => (
            <div key={standard.name}>
              <p>Name: {standard.name}</p>
              <p>Description: {standard.description}</p>
              <p>Link: <a href={standard.link}>{standard.link}</a></p>
            </div>
          ))}
        </section>

        <section id="package-type-section">
          <h2>Package Type</h2>
          {electronicComponent.packageType && (
            <div>
              <p>Description: {electronicComponent.packageType.description}</p>
              <p>Source: {electronicComponent.packageType.source}</p>
            </div>
          )}
        </section>

        <section id="package-dimensions-section">
          <h2>Package Dimensions</h2>
          {electronicComponent.packageDimensions && (
            <div>
              <p>Description: {electronicComponent.packageDimensions.description}</p>
              <p>Source: {electronicComponent.packageDimensions.source}</p>
            </div>
          )}
        </section>

        <section id="pin-count-section">
          <h2>Pin Count</h2>
          <p>{electronicComponent.pinCount}</p>
        </section>

        <section id="mounting-type-section">
          <h2>Mounting Type</h2>
          {electronicComponent.mountingType && (
            <div>
              <p>Description: {electronicComponent.mountingType.description}</p>
              <p>Source: {electronicComponent.mountingType.source}</p>
            </div>
          )}
        </section>

        <section id="mtbf-section">
          <h2>MTBF</h2>
          {electronicComponent.mtbf && (
            <div>
              <p>Description: {electronicComponent.mtbf.description}</p>
              <p>Source: {electronicComponent.mtbf.source}</p>
            </div>
          )}
        </section>

        <section id="failure-rate-section">
          <h2>Failure Rate</h2>
          {electronicComponent.failureRate && (
            <div>
              <p>Description: {electronicComponent.failureRate.description}</p>
              <p>Source: {electronicComponent.failureRate.source}</p>
            </div>
          )}
        </section>

        <section id="rohs-compliant-section">
          <h2>RoHS Compliant</h2>
          {electronicComponent.rohsCompliant && (
            <div>
              <p>Description: {electronicComponent.rohsCompliant.description}</p>
              <p>Source: {electronicComponent.rohsCompliant.source}</p>
            </div>
          )}
        </section>

        <section id="reach-compliant-section">
          <h2>REACH Compliant</h2>
          {electronicComponent.reachCompliant && (
            <div>
              <p>Description: {electronicComponent.reachCompliant.description}</p>
              <p>Source: {electronicComponent.reachCompliant.source}</p>
            </div>
          )}
        </section>

        <section id="lead-free-section">
          <h2>Lead Free</h2>
          <p>{electronicComponent.leadFree}</p>
        </section>

        <section id="datasheets-section">
          <h2>Datasheets</h2>
          {electronicComponent.datasheets.map((datasheet) => (
            <div key={datasheet.name}>
              <p>Name: {datasheet.name}</p>
              <p>Description: {datasheet.description}</p>
              <p>URL: <a href={datasheet.url}>{datasheet.url}</a></p>
            </div>
          ))}
        </section>

        <section id="additional-resources-section">
          <h2>Additional Resources</h2>
          {electronicComponent.additionalResources.map((resource) => (
            <div key={resource.type}>
              <p>Type: {resource.type}</p>
              <p>Description: {resource.description}</p>
              <p>Link: <a href={resource.link}>{resource.link}</a></p>
            </div>
          ))}
        </section>

        <ScrollTopButton />
      </main>
    </div>
  );
}

export default ElectronicComponentPage;
