import React from 'react';
import { PrismaClient } from '@prisma/client';
import { cache } from 'react';
import NavBar from '@/components/NavbarContainer';
import ScrollTopButton from '@/components/ScrollTopButton';
import { notFound } from 'next/navigation';
import LocalContextLinks from '@/components/LocalContextLinks';


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
    include: {
      variants: true,
      function: true,
      // operation: true,
      // applications: true,
      // technicalSpecs: true,
      // thermalSpecificat|ions: true,
      // datasheets: true,
      // additionalResources: true,
    },
  });

    if (!electronicComponent) notFound();

  return electronicComponent;
});

// Generate metadata for the electronic component
export async function generateMetadata({
  params: { slug },
}: ProductPageProps) {
  // const formattedName = formatSlugForName(slug);
  const electronicComponent = await getElectronicComponent(slug);

  // Logic to generate metadata
  // ...

  return {
    title: electronicComponent?.name,
    // Other metadata...
  };
}

// Display electronic component details on the page
const ElectronicComponentPage: React.FC<ProductPageProps> = async ({ params: { slug } }) => {
  const electronicComponent = await getElectronicComponent(slug);

  // Define the links for smooth scrolling
  const contextLinks = [
    { text: 'Variants', id: 'variants-section' },
    { text: 'Functions', id: 'functions-section' },
    // Add other sections as needed
  ];

  if (!electronicComponent) {
    console.error('Electronic component not found');
    return <div>Error fetching electronic component</div>;
  }

  return (
    <div>
      <NavBar domain="www.wiki-science.com/" menuPath='./NavigationMenu' />

      <main>
        <h1>{electronicComponent.name}</h1>
        <LocalContextLinks links={contextLinks} />
        <p>Description: {electronicComponent.description}</p>

        <div id="variants-section">
          <h2>Variants</h2>
          {electronicComponent.variants && electronicComponent.variants.map((variant) => (
            <p key={variant.id}>{variant.name}: {variant.description}</p>
          ))}
        </div>

        <div id="functions-section">
          <h2>Functions</h2>
          {Array.isArray(electronicComponent.function) && electronicComponent.function.map((func) => (
            <p key={func.id}>{func.primaryFunction}: {func.physicalPrinciples}</p>
          ))}
        </div>

        {/* Repeat the pattern for other sections... */}

        <ScrollTopButton />
      </main>
    </div>
  );
}

export default ElectronicComponentPage;