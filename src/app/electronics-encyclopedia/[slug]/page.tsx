import React from 'react';
import { PrismaClient } from '@prisma/client';
import { cache } from 'react';
// import NavBar from '@/components/navigation/NavbarContainer';
import ScrollTopButton from '@/components/ScrollTopButton';
import { notFound } from 'next/navigation';
import LocalContextLinks from '@/components/LocalContextLinksTop';
// import useStickyHeader from '@/utils/useStickyHeader'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import RightArrowRigth from '@/components/right-arrow'
import ChevronLeft from '@/components/ChevronLeft'
import RightArrow from '@/components/right-arrow-large'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Image from 'next/image';
import NewPageIcon from '@/components/NewPageIcon'




const StickyH2 = dynamic(() => import('@/utils/useStickyHeader'), { ssr: false });

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
    { text: '1. Variants', id: 'variants-section' },
    { text: '2. Manufacturers', id: 'manufacturers-section' },
    { text: '2. Functions', id: 'functions-section' },
    { text: 'Operations', id: 'operations-section' },
    { text: 'Applications', id: 'applications-section' },
    { text: 'Thermal Specifications', id: 'thermal-specifications-section' },
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

  // const [isSticky] = useStickyHeader(["variants-section"]);




  if (!electronicComponent) {
    console.error('Electronic component not found');
    return <div>Error fetching electronic component</div>;
  }

  const formatTitleForURL = (title: string) => {
    return title
      .replace(/[^a-zA-Z0-9 ,'&-]/g, "")
      .replace(/&/g, "%26")
      .replace(/ /g, "+");
  };


  return (
    <div>
      <main className='mt-[10rem]'>
        <LocalContextLinks links={contextLinks} />
        <header className='max-w-[60rem] mx-auto'>
          <h1>{electronicComponent.name}</h1>
          <p className='text-lg max-w-[50rem] mx-auto'> {electronicComponent.description}</p>
          <Carousel className="w-full mx-auto max-w-xs">
            <CarouselContent className=' '>
              {Array.from({ length: 1 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={`${formatTitleForURL(electronicComponent.name)}.jpg`}
                          alt={electronicComponent.name}
                          // priority={priority}

                          quality={100}
                          width={200}
                          height={200}
                          className='rounded-md'
                          // className={styles.layer0}
                          // sizes="(max-width: 200px)"
                        />
                      </CardContent>
                    </Card>
                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className='pt-12'>
            {/* <h3>Pricing</h3> */}
            {electronicComponent.pricing && (
              <div className=' '>
                <p className='font-semibold text-lg mb-0 pb-0'> {electronicComponent.pricing.value}</p>
                <p><strong>Conditions: </strong>{electronicComponent.pricing.condition}</p>
              </div>
            )}

            <h3 className='text-h4 mt-8'>Life Span</h3>
            {electronicComponent.lifeSpan && (
              <div>
                <p>{electronicComponent.lifeSpan.value}</p>
                {/* <p>{electronicComponent.lifeSpan.source}</p> */}
              </div>
            )}
          </div>


        </header>

        <div className='lg:grid lg:grid-cols-2 gap-x-24 gap-y-12 lg:px-12 '>

          <section id="functions-section">
            <StickyH2 id="functions-section">
              <h2 className='sticky top-5 w-full z-50'>1. Functioning</h2>
            </StickyH2>
            {electronicComponent.function && (
              <div>
                <p>{electronicComponent.function.Function}</p>
                <h3>Physical Principles</h3>
                <ul className='py-[.1rem]'>
                  {electronicComponent.function.physicalPrinciples.map((principle) => (
                    <li className='flex mt-7' key={principle}>
                      <Link prefetch={false} href={'/'}>
                        {principle}
                      </Link>
                      <span className='w-fit pl-2'>
                        <RightArrowRigth color='#ff74ca' />
                      </span>
                    </li>
                  ))}
                </ul>
                <h3>Chemistry Principles</h3>
                <ul>
                  {electronicComponent.function.chemistryPrinciples.map((principle) => (
                    <li className='flex mt-7' key={principle}>
                      <Link prefetch={false} href={'/'}>
                        {principle}
                      </Link>
                      <span className='w-fit pl-2'>
                        <RightArrowRigth color='#ff74ca' />
                      </span>
                    </li>
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
                {/* <p>{electronicComponent.function.diagrams}</p> */}
              </div>
            )}
          </section>



          <section id="operations-section">
            <StickyH2 id="operations-section">
              <h2 className='sticky top-5 w-full z-50'>2. Operation</h2>
            </StickyH2>
            {electronicComponent.operation && (
              <div>
                <h4>
                  Internal Structure:
                </h4>
                <p>{electronicComponent.operation.internalStructure}</p>
                <h3>
                  Operating Mechanisms:
                </h3>
                <p> {electronicComponent.operation.operatingMechanisms}</p>
                <h3>Input Output Characteristics: </h3>
                <p>{electronicComponent.operation.inputOutputCharacteristics}</p>
                <h3>Functional Relationships</h3>
                {electronicComponent.operation.functionalRelationships.map((relationship) => (
                  <div key={relationship.relationship}>
                    <p>{relationship.relationship}</p>
                    <p>{relationship.source}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section id="operations-section">
            <StickyH2 id="functions-section">
            <h2  >3. Equations</h2>
            </StickyH2>
            {electronicComponent.operation?.equations.map((equation) => (
              <div className='pb-4' key={equation.equation}>
                <h4> {equation.equation}</h4>
                <p> {equation.description}</p>
              </div>
            ))}
          </section>




          <section id="manufacturers-section">
            <StickyH2 id="functions-section">
              <h2>4. Manufacturers</h2>
            </StickyH2>
            {electronicComponent.manufacturers.map((manufacturer) => (
              <div key={manufacturer.name}>
                <h4 className='mb-0 text-base'> {manufacturer.name}</h4>
                <Link className='text-black' href={manufacturer.link}>

                  <div className='flex'>
                    <p className='py-1'>
                      {manufacturer.link}
                    </p>
                    <NewPageIcon ></NewPageIcon>
                  </div>
                </Link>
              </div>
            ))}
          </section>


          <section id="variants-section">
            <div className='relative'>
              <StickyH2 id="variants-section">
                <h2 className=' '>4. Variants</h2>
              </StickyH2>
            </div>
            {electronicComponent.variants && electronicComponent.variants.map((variant) => (
              <div key={variant.name}>
                <h4>{variant.name}</h4>
                <p>{variant.description}</p>
                {/* <p>{variant.source}</p> */}
              </div>
            ))}
          </section>



          <section id="thermal-specifications-section">
                        <StickyH2 id="functions-section">
            <h2>5. Thermal Specifications</h2>
            </StickyH2>
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

          <section id="history-section">
                        <StickyH2 id="functions-section">
            <h2>7. History</h2>
            </StickyH2>
            {electronicComponent.history.map((event) => (
              <div className='pb-4' key={event.event}>
                <p className='pb-1 font-bold'> {event.year}</p>
                <p className='pb-1 font-semibold'>  {event.event}</p>
                <p> {event.description}</p>
                {/* <p>Source: {event.source}</p> */}
              </div>
            ))}
          </section>

          <section id="standards-and-regulations-section">
                        <StickyH2 id="functions-section">
            <h2>Standards and Regulations</h2>
            </StickyH2>
            {electronicComponent.standardsAndRegulations.map((standard) => (
              <div className='mb-8' key={standard.name}>
                <p> <strong>{standard.name}</strong> </p>
                <p>  {standard.description}</p>
                <p><a href={standard.link}>{standard.link}</a></p>
              </div>
            ))}
          </section>

          <section id="footprint-section">
                        <StickyH2 id="functions-section">
            <h2>10. Footprint</h2>
            </StickyH2>
            {electronicComponent.footprint && (
              <div>
                <p> {electronicComponent.footprint.description}</p>
                {/* <p> {electronicComponent.footprint.source}</p> */}
              </div>
            )}
          </section>

          <section id="package-type-section">
                        <StickyH2 id="functions-section">
            <h2>Package Type</h2>
            </StickyH2>
            {electronicComponent.packageType && (
              <div>
                <p>Description: {electronicComponent.packageType.description}</p>
                <p>Source: {electronicComponent.packageType.source}</p>
              </div>
            )}
          </section>

          <section id="package-dimensions-section">
                        <StickyH2 id="package-dimensions-section">
            <h2>Package Dimensions</h2>
            </StickyH2>
            {electronicComponent.packageDimensions && (
              <div>
                <p> {electronicComponent.packageDimensions.description}</p>
                {/* <p>Source: {electronicComponent.packageDimensions.source}</p> */}
              </div>
            )}
          </section>

          <section id="mounting-type-section">
                        <StickyH2 id="mounting-type-section">
            <h2>Mounting Type</h2>
            </StickyH2>
            {electronicComponent.mountingType && (
              <div>
                <p>Description: {electronicComponent.mountingType.description}</p>
                <p>Source: {electronicComponent.mountingType.source}</p>
              </div>
            )}
          </section>

          <section id="mtbf-section">
                        <StickyH2 id="mtbf-section">
            <h2>MTBF</h2>
            </StickyH2>
            {electronicComponent.mtbf && (
              <div>
                <p>Description: {electronicComponent.mtbf.description}</p>
                <p>Source: {electronicComponent.mtbf.source}</p>
              </div>
            )}
          </section>

          <section id="failure-rate-section">
                                    <StickyH2 id="mtbf-section">
            <h2>Failure Rate</h2>
            </StickyH2>
            {electronicComponent.failureRate && (
              <div>
                <p>Description: {electronicComponent.failureRate.description}</p>
                <p>Source: {electronicComponent.failureRate.source}</p>
              </div>
            )}
          </section>

          <section id="rohs-compliant-section">
                                                <StickyH2 id="mtbf-section">
            <h2>RoHS Compliant</h2>
            </StickyH2>
            {electronicComponent.rohsCompliant && (
              <div>
                <p>Description: {electronicComponent.rohsCompliant.description}</p>
                <p>Source: {electronicComponent.rohsCompliant.source}</p>
              </div>
            )}
          </section>

          <section id="reach-compliant-section">
                                                <StickyH2 id="mtbf-section">
            <h2>REACH Compliant</h2>
            </StickyH2>
            {electronicComponent.reachCompliant && (
              <div>
                <p>Description: {electronicComponent.reachCompliant.description}</p>
                <p>Source: {electronicComponent.reachCompliant.source}</p>
              </div>
            )}
          </section>


        </div>



        <section id="life-span-section">

        </section>


        {/* <section id="availability-section">
          <h2>8. Availability</h2>
          {electronicComponent.availability && (
            <div>
              <p>Status: {electronicComponent.availability.status ? 'Available' : 'Not Available'}</p>
              <p>Description: {electronicComponent.availability.description}</p>
            </div>
          )}
        </section> */}



        {/* <section id="pin-count-section">
          <h2>Pin Count</h2>
          <p>{electronicComponent.pinCount}</p>
        </section> */}


        <section id="applications-section">
                                              <StickyH2 id="mtbf-section">
          <h2>4. Applications</h2>
            </StickyH2>
          <div   >
            {electronicComponent.applications.map((application) => (
              <div className='py-2' key={application.field}>
                <h3> {application.field}</h3>
                    {/* <h4>Examples</h4> */}
                    <ul>
                      {application.examples.map((example) => (
                        <li key={example}>{example}</li>
                      ))}
                    </ul>
                <div className='md:grid  grid-cols-2 gap-20' >
                  <div>
                    <h4 className='py-3'>Design Considerations</h4>
                    {application.designConsiderations.map((consideration) => (
                      <div className='mb-2' key={consideration.consideration}>
                        <p className='italic font-semibold pb-1'> {consideration.consideration}</p>
                        <p> {consideration.explanation}</p>
                      </div>
                    ))}

                  </div>
                  <div>
                    <h4 className='py-2'>Challenges</h4>
                    {application.challenges.map((challenge) => (
                      <div key={challenge.challenge}>
                        <p className='italic font-semibold pb-1'> {challenge.challenge}</p>
                        <p>{challenge.explanation}</p>
                      </div>
                    ))}
                    <p>Source: {application.source}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>




        <section id="datasheets-section">
          <h2>Datasheets</h2>
          {electronicComponent.datasheets.map((datasheet) => (
            <div key={datasheet.name}>
              <p className='pb-1 pt-8 font-semibold'> {datasheet.name}</p>
              <p>  {datasheet.description}</p>
              <p>  <a href={datasheet.url}>{datasheet.url}</a></p>
            </div>
          ))}
        </section>

          <section id="additional-resources-section">
            <h2>Additional Resources</h2>
            {electronicComponent.additionalResources.map((resource) => (
              <div key={resource.type}>
                <p className='pb-2 pt-8 font-semibold'> {resource.type}</p>
                <p> {resource.description}</p>
                {resource.link ? (
                    <p>
                  <Link href={resource.link}>
                      {resource.link}
                    </Link>
                    </p>
                ) : (
                                      <p>
                  <Link href="#">No link available</Link>
                    </p>
                )}
              </div>
            ))}
          </section>

        <ScrollTopButton />
      </main>
    </div>
  );
}

export default ElectronicComponentPage;
