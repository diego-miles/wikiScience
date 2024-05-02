
import React from 'react';
import Image from 'next/image';
import NavBar from '@/components/NavbarContainer';
import data from '@/data/data';
import ScrollTopButton from '@/components/ScrollTopButton';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
// import TextGenerateEffectDemo from './HeroHomeText'
import dynamic from 'next/dynamic';
import Accordion from '@/AccordionHome'
import logoSvg from '/head-background.svg';
import { CardWithForm } from '@/components/ChemistryCards';
import ChemestrCards from './CarrouselElements'


const TextHeroHome = dynamic(() => import('./TextHeroHome'), { ssr: false })


const toSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '_');
};

const HomePage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between mx-auto mt-12 text-center"> 

        <header className=" h-[30rem]">
          <figure className='mx-auto w-fit'>
            <Image width={55} height={50} alt='Wiki-logo' src={'wikilogo-blue.svg'} unoptimized  ></Image>
          </figure>
          <h1 className="mt-1 text-5xl font-bold text-[#44a6cd]">Wiki Science</h1> {/* Using Tailwind's text color and font weight utilities */}
          {/* <p className="text-3xl font-extrabold text-[#2d373d] mt-4 px-2">A next-generation educational platform. <span className="text-[#376ba2]">Powered by AI.</span></p>  */}
          <div className=" absolute top-[26rem] left-0 right-0">
            <TextHeroHome></TextHeroHome>
          </div>
        </header>


        <section className="">
          <div className='relative '>
            <div
              className=" overflow-hidden bg-cover w-[34rem] h-28 mx-auto absolute top-2 left-0 right-0 bottom-0 flex items-center justify-center"
              style={{
                backgroundImage: `url('/background-head.svg')`,
              }}
            >
            </div>
          </div>
          <h2 className=" text-[2.1rem] font-bold text-center mb-20 ">Chemichal Elemets</h2>
          {/* <p className="text-lg text-center mt-4 font-normal">  Explore a community-curated collection of top science books </p> */}
          {/* <CardWithForm></CardWithForm> */}

          <div className='mt-16'>

          </div>

        </section>
          <ChemestrCards></ChemestrCards>





        <section className="pt-28">
          <div className='relative '>
            <div
              className=" overflow-hidden bg-cover w-[34rem] h-28 mx-auto absolute top-2 left-0 right-0 bottom-0 flex items-center justify-center"
              style={{
                backgroundImage: `url('/background-head.svg')`,
              }}
            >
            </div>
          </div>
          <h2 className=" text-[2.1rem] font-bold text-center mb-20 ">Top Science Books</h2>
          {/* <p className="text-lg text-center mt-4 font-normal">  Explore a community-curated collection of top science books </p> */}

          <div className='max-w-2xl  mx-auto bg-background1 border-[4px] rounded-3xl border-[#98bdd3] shadow-sm'>
            <ul className="list-none mt-6 px-4">
              {[
                "Community-curated collection of top science books ",
                "Get in-depth insights with expert summaries.",
                "Discover each book's impact on science.",
                "Visualize the journey with stunning cover images.",
                "Explore detailed outlines for rich content.",
                "Read reviews from platforms like Amazon and Goodreads.",
                "Gain insights from personal reading experiences."
              ].map((item, index) => (
                <li key={index} className="flex items-start mb-4">
                  <div className="w-2 h-2 p-1 rounded-full bg-[#1f71ca] mr-4 mt-4"></div>
                  <p className="text-sm font-bold py-1">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-16'>

          <Accordion></Accordion>
          </div>

        </section>

        <ScrollTopButton />
      </main>

      <footer className="bg-gray-100 py-4 mt-16 text-center">
      </footer>
    </div>
  );
};

export default HomePage;


