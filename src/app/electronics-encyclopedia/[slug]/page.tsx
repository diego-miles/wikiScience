import React from 'react';
import { PrismaClient } from '@prisma/client';
import { cache } from 'react';
import NavBar from '@/components/NavbarContainer';
import ScrollTopButton from '@/components/ScrollTopButton';

const prisma = new PrismaClient();

interface ProductPageProps {
  params: {
    slug: string;
  };
}

// // Generate the formatted name from the slug
// const formatSlugForName = (slug: string) => {
//   return slug
//     .split('-')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// };

// Cache function to get electronic component data
const getElectronicComponent = cache(async (slug: string) => {
  const electronicComponent = await prisma.electronicComponent.findUnique({
    where: { slug: slug },
    include: {
      variants: true,
      function: true,
      operation: true,
      applications: true,
      // technicalSpecs: true,
      // thermalSpecificat|ions: true,
      // datasheets: true,
      // additionalResources: true,
    },
  });

  if (!electronicComponent) throw new Error('Electronic component not found');

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
async function ElectronicComponentPage({ params: { slug } }: ProductPageProps) {
  // const formattedName = formatSlugForName(slug);
  console.log(slug)
  const electronicComponent = await getElectronicComponent(slug);

  if (!electronicComponent) {
    console.error('Electronic component not found');
    return <div>Error fetching electronic component</div>;
  }

  return (
    <div>
        <NavBar domain="www.wiki-science.com/" menuPath='./NavigationMenu' />      <main>
        {/* Display electronic component information */}
        <h1>{electronicComponent.name}</h1>
        <p>Description: {electronicComponent.description}</p>

        {/* Variants */}
        {electronicComponent.variants && (
          <div>
            <h2>Variants</h2>
            {electronicComponent.variants.map((variant) => (
              <p key={variant.id}>{variant.name}: {variant.description}</p>
            ))}
          </div>
        )}

        {/* Functions */}
        {Array.isArray(electronicComponent.function) && electronicComponent.function.length > 0 && (
          <div>
            <h2>Functions</h2>
            {electronicComponent.function.map((func) => (
              <p key={func.id}>{func.primaryFunction}: {func.physicalPrinciples}</p>
            ))}
          </div>
        )}

        {/* Operations */}
        {electronicComponent.operation && (
          <div>
            <h2>Operations</h2>
            {/* Add the necessary code to display operations */}
          </div>
        )}

        {/* Applications */}
        {electronicComponent.applications && (
          <div>
            <h2>Applications</h2>
            {/* Add the necessary code to display applications */}
          </div>
        )}

        {/* Repeat the pattern for other sections... */}

        <div className='globalSpace'></div>
        <ScrollTopButton />
      </main>
    </div>
  );
}

export default ElectronicComponentPage;
