import React from 'react';
import NavBar from '@/components/navigation/NavbarContainer';
import ScrollTopButton from '@/components/ScrollTopButton';
import { PrismaClient } from '@prisma/client';
import { Metadata } from 'next';
import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

const getWordData = unstable_cache(async (slug: string) => {
  const wordData = await prisma.word.findUnique({
    where: { slug },
    include: {
      definitions: true,
      relatedConcepts: true,
      applications: true,
      measurementUnits: true,
      historicalSignificance: true,
    },
  });
  if (!wordData) notFound();
  return wordData;
});

interface WordPageProps {
  params: {
    slug: string;
  }
}

// const generateMetadata = async ({ params: { slug } }: WordPageProps): Promise<Metadata> => {
//   const wordData = await getWordData(slug);

//   // Adjust this part to generate metadata based on your word data
//   const title = `Metadata Title`;
//   const description = `Metadata Description`;
//   const keywords = `keyword1, keyword2`;
//   const images = [{ url: 'image_url.png' }];

//   return {
//     title,
//     description,
//     keywords,
//     openGraph: {
//       images,
//     },
//   };
// };

const WordPage: React.FC<WordPageProps> = ({ params: { slug } }) => {
  const wordData = getWordData(slug);

  if (!wordData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <main className="container mx-auto mt-12">
        <h1>{wordData.word}</h1>
        <p>Pronunciation: {wordData.pronunciation}</p>
        <p>Slug: {wordData.slug}</p>
        <p>Etymology: {wordData.etymology}</p>
        <p>Language: {wordData.language}</p>
        <p>Tags: {wordData.tags.join(', ')}</p>
        <p>Synonyms: {wordData.synonyms.join(', ')}</p>
        <p>Antonyms: {wordData.antonyms.join(', ')}</p>
        <p>Examples:</p>
        <ul>
          {wordData.examples.map((example, index) => (
            <li key={index}>{example}</li>
          ))}
        </ul>
        <p>Images:</p>
        <ul>
          {wordData.images.map((image, index) => (
            <li key={index}><img src={image} alt={`Image ${index}`} /></li>
          ))}
        </ul>
        <p>Audio: {wordData.audio}</p>
        {/* Render other related data similarly */}
      </main>
      <ScrollTopButton />
    </>
  );
};

export { generateMetadata };
export default WordPage;
