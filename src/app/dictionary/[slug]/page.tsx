import React from 'react';
import NavBar from '@/components/navigation/NavbarContainer';
import ScrollTopButton from '@/components/ScrollTopButton';
import { PrismaClient } from '@prisma/client';
import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Separator } from "@/components/ui/separator"
import { Metadata } from 'next';


const prisma = new PrismaClient();

const getWordData = unstable_cache(async (slug: string) => {
  const wordData = await prisma.word.findUnique({
    where: { slug },
  });
  if (!wordData) notFound();
  return wordData;
});

interface WordPageProps {
  params: {
    slug: string;
  };
}


interface ProductPageProps {
    params: {
        slug: string;
    }
}


// export async function generateMetadata({
//     params: { slug },
// }: ProductPageProps): Promise<Metadata> {
//     const wordData = await getWordData(slug);

//     // const images = (wordData?.books?.map((book) => ({
//     //     url: `${formatTitleForAmazonImageURL(book.englishTitle)}.png` || '' 
//     // })) || []).filter(image => image.url !== null) as OGImage[];

//     const keywords = wordData?.tags?.flatMap((tag) => tag.keywords || []) || [];
//     const uniqueKeywords = Array.from(new Set(keywords));
//     const description = `Definitions of ${wordData?.subField}  .`;

//     return {
//         title: `Best ${wordData?.subField} books of all time (2024)` ,
//         description: description,
//         openGraph: {
//             images: images,
//         },
//         keywords: uniqueKeywords.join(', '),
//     };
// }







const WordPage: React.FC<WordPageProps> = async ({ params: { slug } }) => {
  const wordData = await getWordData(slug);
  if (!wordData) {
    return <div className="flex justify-center">Loading...</div>;
  }

  return (
    <div className="">
      <NavBar />
      <main className="mt-4 pb-24">
        <header>
        {wordData.pronunciation && (
          <p className="pt-4">Pronunciation: <span>{wordData.pronunciation}</span></p>
        )}
        <h1 className="pb-4">{wordData.word}</h1>
        {wordData.language && (
          <p className="absolute top-32  left-0 right-0 text-center font-extralight text-sm text-span wider">
            {wordData.language}
          </p>
        )}
        {/* <p className=" ">Slug: {wordData.slug}</p> */}
        {wordData.etymology && (
          <p className="font-serif italic">{wordData.etymology}</p>
        )}
        {wordData.tags.length > 0 && (
          <p className=" my-4 ">{wordData.tags.join(', ')}</p>
        )}
        </header>

        <section >

        {wordData.definitions && (
          <>
            {/* <h2 className="">Definitions</h2> */}
            {wordData.definitions.map((definition, index) => (
              <div key={index} className='relative border-[.1rem] bg-[#ffffffa2] dark:bg-[#113153] dark:shadow-xl border-[#d4dde8] rounded-3xl py-4 px-12   max-w-[40rem] mx-auto mb-8'>
                    <Separator className="my-4" />
                {definition.partOfSpeech && (
                  <p className="text-sm  font-extralight"> Part of Speech: {definition.partOfSpeech}</p>
                )}
                
                {definition.meaning && (
                  <h2 className="font-semibold pt-2 text-xl  "> {definition.meaning}</h2>
                )}


                {definition.source && (
                  <p className=" serif italic font-extralight  text-sm px-4 py-3  ">
                    {definition.source.sourceType}: <span className='text-[#545454] dark:text-[#c9f2fe]'>{definition.source.author}</span>, {definition.source.publicationYearDate},{' '} <span className='text-[#0c3240] dark:text-[#c6d7c6] font-medium'>
                    {definition.source.title}.
                    </span>
                  </p>
                )}
                {definition.example && (
                  <p className="py-6 pb-8 px-4  text-sm   "> Example: {definition.example}</p>
                )}

              </div>
            ))}
          </>
        )}
        </section>

<section className='mt-[5rem]'>
        {wordData.synonyms.length > 0 && (
          <p className="text-xl font-serif "><span className='font-serif italic '>Synonyms:</span> {wordData.synonyms.join(', ')}</p>
        )}
        {wordData.antonyms.length > 0 && (
          <p className="text-xl font-serif"> <span>Antonyms:</span>  {wordData.antonyms.join(', ')}</p>
        )}
</section>

        {wordData.examples.length > 0 && (
          <>
            <h3>Examples:</h3>
            <ul className="">
              {wordData.examples.map((example, index) => (
                <li className='' key={index}>{example}</li>
              ))}
            </ul>
          </>
        )}
        {wordData.measurementUnits.length > 0 && (
          <>
            <h3>Measurement Units</h3>
            <ul className="list-disc pl-4">
              {wordData.measurementUnits.map((unit, index) => (
                <li key={index}>{unit.unit}</li>
              ))}
            </ul>
          </>
        )}
        {/* {wordData.audio && (
          <p className=" ">Audio: {wordData.audio}</p>
        )} */}
        {wordData.relatedConcepts.length > 0 && (
          <>
            <h3>Related Concepts</h3>
            <ul className="">
              {wordData.relatedConcepts.map((concept, index) => (
                <li key={index}>{concept.concept}</li>
              ))}
            </ul>
          </>
        )}
        {wordData.applications.length > 0 && (
          <>
            <h3>Applications</h3>
            <ul className="list-disc pl-4">
              {wordData.applications.map((application, index) => (
                <li key={index}>{application.application}</li>
              ))}
            </ul>
          </>
        )}

        {wordData.historicalSignificance.length > 0 && (
          <>
            <h3 >Historical Significance</h3>
            <ul className="list-disc pl-4">
              {wordData.historicalSignificance.map((event, index) => (
                <li key={index}>{event.event}</li>
              ))}
            </ul>
          </>
        )}
        {wordData.images.length > 0 && (
          <>
            {/* <h2>Images</h2> */}
            {/* {wordData.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Image ${index}`}
                className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
                width={50}
                height={50}
              />
            ))} */}
          </>
        )}
      </main>
      <ScrollTopButton />
    </div>
  );
};

export default WordPage;