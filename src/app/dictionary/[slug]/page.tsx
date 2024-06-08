import React from 'react';
import NavBar from '@/components/navigation/NavbarContainer';
import ScrollTopButton from '@/components/ScrollTopButton';
import { PrismaClient } from '@prisma/client';
import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Separator } from "@/components/ui/separator";
import { Metadata } from 'next';
import RightArrowRigth from '@/components/right-arrow';
import LocalSearchBar from '@/components/LocalSearch';
import Link from 'next/link';
import { generateSlug, generateAmazonImageURL } from '@/utils/slugGenerator';
import { Badge } from "@/components/ui/badge";
import { eq } from 'drizzle-orm';
// Import your existing schema file (replace with the actual path)
import { citations } from '@/db/schema/elements'; // Replace with the actual path to your schema
import {db} from '@/db/index';

// const prisma = new PrismaClient();

// Interface for your word data based on your schema
interface WordData {
  slug: string | null;
  word: string;
  etymology: string | null;
  pronunciation: string | null;
  definitions: { meaning: string; source: { sourceType: string; author: string; publicationYearDate: string; title: string } }[];
  synonyms: string[];
  antonyms: string[];
  examples: string[];
  images: string[];
  audio: string | null;
  language: string | null;
  tags: string[];
  relatedConcepts: [];
  applications:  [];
  measurementUnits: [];
  historicalSignificance: [];
  createdAt: string | null;
  updatedAt: string | null;
}

// Obtener datos del elemento
const getWordData = unstable_cache(async (slug: string) => {
  const wordData = await db.select().from(citations).where(eq(citations.slug, slug)).get() as WordData;
  if (!wordData) notFound();
  // No need to parse with JSON.parse! Drizzle-ORM does it for you
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
  };
}

export async function generateMetadata({
  params: { slug },
}: ProductPageProps): Promise<Metadata> {
  const wordData = await getWordData(slug);

  // Accessing the nested 'tags' array
  const keywords = wordData?.tags?.map((tag) => tag) || [];

  // Accessing the nested 'definitions' array
  const childrenCount = wordData.definitions?.length || 0; // Check if definitions exists before accessing its length

  const description = `Explore through comprehensive definitions, synonyms, and antonyms for ${wordData?.word} with cited (APA) sources. A compendium of scientific knowledge to enhance your understanding and research. Tracking for exploration. Citation before replication.`;

  return {
    title: `${wordData?.word} definitions`,
    description: description,
    keywords: keywords.join(', '), 
  };
}

const WordPage: React.FC<WordPageProps> = async ({ params: { slug } }) => {
  const wordData = await getWordData(slug);

  if (!wordData) {
    return <div className="flex justify-center">Loading...</div>;
  }

  // Accessing the nested 'definitions' array
  const childrenCount = wordData.definitions?.length || 0; // Check if definitions exists before accessing its length

  return (
    <div className="">
      {/* <NavBar /> */}
      <main className=" pb-24">
        <div className='-mt-4'>
          <LocalSearchBar></LocalSearchBar>
        </div>
        <header className='relative pt-20 pb-4 '>
          {wordData.pronunciation && (
            <p className="pt-4" >Pronunciation: <span>{wordData.pronunciation}</span></p>
          )}
          <h1 className="pb-4">{wordData.word}</h1>
          {wordData.language && (
            <p className="absolute top-10 font-serif left-0 right-0 text-center font-semibold text-xs   wider text-[#1f7670]">
              {wordData.language}
            </p>
          )}
          {/* <p className=" ">Slug: {wordData.slug}</p> */}
          {wordData.etymology && (
            <p className="font-serif font-bold   pt-4 pb-6 max-w-[50rem] mx-auto">{wordData.etymology}</p>
          )}
          {wordData.tags?.length > 0 && (
            <div>
              {wordData.tags?.map((tag, index) => (
                <div key={index} className='inline-block' >
                  <Badge className='m-1' variant="outline">
                    <p className=" p-1  text-sm tracking-wide">{tag}</p>
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </header>
        <section >
          {wordData.definitions && (
            <div className='text-center' >
              <h2 className="pb-4 pt-4">Definitions</h2>
              <div className={`w-fit mx-auto ${childrenCount > 1 ? 'lg:grid lg: grid-cols-2 gap-16' : 'flex justify-center'}`}>
                {wordData.definitions.map((definition, index) => (
                  <div key={index} className='relative  dark:bg-background1dark dark:shadow-xl rounded-2xl py-4 pt-10 px-8 shadow-sm max-w-[45rem] mx-auto mb-8 border-[.1rem] border-b-8 border-[#afb7be]  bg-background1 lg:mb-0 '>
                    <figure >
                      <Image className='mx-auto pb-4' src={'/booksContext.svg'} unoptimized alt='' width={35} height={27}></Image>
                    </figure>
                    {/* {definition.partOfSpeech && (
                      <p className="text-xs text-center"> Part of Speech: {definition.partOfSpeech}</p>
                    )} */}
                    {definition.meaning && (
                      <h2 className="font-semibold pt-0 text-[1.9rem] ">
                        <strong className='px-2 text-[1.6rem] lg:text-[1.7rem] font-bold '>{'"'}{definition.meaning}{'"'}</strong>
                        <span className='font-serif text-black'></span>
                      </h2>
                    )}
                    {definition.source && (
                      <p className=" serif px-4 pb-3 ">
                        <span className=' text-black font-medium dark:text-[#ffabe3]'>
                          {definition.source.sourceType }{": "}
                        </span>
                        <span className='text-black font-bol dark:text-[#c9f2fe] '>{definition.source.author}{' '}</span>
                        <span className='text-black tracking-tighter font-bold'>
                          {definition.source.publicationYearDate}
                        </span>,{' '}
                        <span className='text-[#1a614d] font-medium '>
                          {definition.source.title}.
                        </span>
                      </p>
                    )}
                    {/* <Separator className="my-2 mt-4" /> */}
                    {/* {definition.example && (
                      <p className="py-6 pb-8 px-4 text-center "> Example: {definition.example}</p>
                    )} */}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
        <section className='mt-[6rem] px-4 text-center'>
          {Array.isArray(wordData.synonyms) && wordData.synonyms.length > 0 && (
            <p className="text-2xl font-normal font-serif">
              <span className='font-serif font-bold text-h1 dark:text-accent4'>Synonyms:</span> {wordData.synonyms.join(', ')}
            </p>
          )}
          {Array.isArray(wordData.antonyms) && wordData.antonyms.length > 0 && (
            <p className="text-2xl mt-4 font-serif">
              <span className='font-serif font-bold text-h1 dark:text-accent4'>Antonyms:</span> {wordData.antonyms.join(', ')}
            </p>
          )}
        </section>
        <section className='text-left grid lg:grid-cols-2 gap-y-12 gap-x-20  lg:pl-12 mx-auto max-w-[80rem] pt-16 '>
          <div className='bg-background1 rounded-bl-sm  rounded-[2.8rem] rounded-br-[3rem] border border-black/30 dark:border-white/80 pb-[3.5rem] dark:bg-background1dark px-10 pt-2'>
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
          </div>
          <div className='bg-background1 rounded-bl-sm  rounded-[2.8rem] rounded-br-[3rem] border border-black/30 dark:border-white/80 pb-[3.5rem] dark:bg-background1dark px-10 pt-2'>
            {wordData.applications.length > 0 && (
              <>
                <h3>Applications</h3>
                <ul className="list-disc">
                  {wordData.applications.map((application, index) => (
                    <li key={index}>{application}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className='bg-background1 rounded-bl-sm  rounded-[2.8rem] rounded-br-[3rem] border border-black/30 dark:border-white/80 pb-[3.5rem] dark:bg-background1dark px-10 pt-2'>
            {wordData.historicalSignificance.length > 0 && (
              <>
                <h3>Historical Significance</h3>
                <ul className="">
                  {wordData.historicalSignificance.map((event, index) => (
                    <li className=' font-semibold' key={index}>{event}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className='bg-background1 rounded-bl-sm  rounded-[2.8rem] rounded-br-[3rem] border border-black/30 dark:border-white/80 pb-[3.5rem] dark:bg-background1dark px-10 pt-2'>
            {wordData.measurementUnits.length > 0 && (
              <>
                <h3>Measurement Units</h3>
                <ul className="font-semibold">
                  {wordData.measurementUnits.map((unit, index) => (
                    <li key={index}>{unit}</li>
                  ))}
                </ul>
              </>
            )}
            {/* {wordData.audio && (
              <p className=" ">Audio: {wordData.audio}</p>
            )} */}
          </div>
  <div className='pl-8'>
    {wordData.relatedConcepts.length > 0 && (
      <>
        <h3>Related Concepts</h3>
        <ul className="pt-1">
          {wordData.relatedConcepts.map((concept, index) => (
            <li className='flex py-5 font-semibold text-[#bb3d76]' key={index}>
              <Link className='inline-block underline w-fit' href={`/dictionary/` + generateSlug(concept || '')}>
                {concept}
              </Link>
              <span className='w-fit pl-2  '>
                <RightArrowRigth color='#ff74ca' />
              </span>
            </li>
          ))}
        </ul>
      </>
    )}
  </div>

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
        </section>
      </main>
      <ScrollTopButton />
    </div>
  );
};

export default WordPage;