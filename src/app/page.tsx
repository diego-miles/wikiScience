import LocalSearchBar from '@/components/LocalSearch';
import React from 'react';
import Image from 'next/image';
import NavBar from '@/components/navigation/NavbarContainer';
import data from '@/data/data';
import ScrollTopButton from '@/components/ScrollTopButton';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Accordion from '@/AccordionHome'
import CarouselSpacing from './CarrouselElements'
import { Suspense } from 'react';
import LoadingPage from './loading';
import { useTheme } from 'next-themes';


const TextHeroHome = dynamic(() => import('./TextHeroHome'), { ssr: false })


const toSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '_');
};




const HomePage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between mx-auto my-32 text-center
      
      "> 

        <header className=" h-[44rem] w-full">
          <figure className='mx-auto w-fit h-24'>
  <Image width={60} height={60} alt="Wiki-logo" src="wiki-blue.svg" className="dark:invisible" unoptimized />
        <Image width={60} height={60} alt="Wiki-logo-dark" src="wiki-yellow.svg" className="dark:visible invisible absolute top-72" unoptimized />
          </figure>
          <h1 className="mt-[1rem] text-[3.2rem] tracking-wider font-black text-[#32a1cd] dark:text-[#f4f2eb]">Wiki Science</h1> {/* Using Tailwind's text color and font weight utilities */}
          {/* <p className="text-3xl font-extrabold text-[#2d373d] mt-4 px-2">A next-generation educational platform. <span className="text-[#376ba2]">Powered by AI.</span></p>  */}
          <div className=" absolute top-[33rem] left-0 right-0">
            <TextHeroHome></TextHeroHome>
          </div>
            <div className='mt-60 w-full px-8'>
        <LocalSearchBar></LocalSearchBar>
            </div>
        </header>


        <section className="">
          <div className='relative '>
            <div
              className=" overflow-hidden bg-cover w-[34rem] h-28 mx-auto absolute top-2 left-0 right-0 bottom-0 flex items-center justify-center dark:opacity-[2%]"
              style={{
                backgroundImage: `url('/background-head.svg')`,
              }}
            >
            </div>
          </div>
<h2 className="text-[2.3rem] font-bold text-center mb-20 text-h1 
          bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text dark:text-transparent 
          dark:text-gradient tracking-wide dark:from-[#c6f1ff] dark:to-[#acffff]">
    Chemical Elements
</h2>
          {/* <p className="text-lg text-center mt-4 font-normal">  Explore a community-curated collection of top science books </p> */}
          {/* <CardWithForm></CardWithForm> */}

          <div className='mt-16'>

          </div>

        </section>
          {/* <p className=" text-[1.6rem] font-medium  text-center mb-0 text-accent2 dark:text-[#ffcfe5]">Watch Periodic Table   </p> */}

{/* <Suspense fallback={<p>Loading feed...</p>}> */}
          <CarouselSpacing></CarouselSpacing>



<Link className='z-30' href={'/periodic-table'}>
        <button className=" relative top-[11rem] lg:top-[20rem] inline-flex animate-shimmer items-center justify-center rounded-3xl border border-slate-800 bg-[linear-gradient(110deg,#3498db,45%,#ffbcf0,55%,#3498db)] bg-[length:200%_100%] px-8 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-xl py-4  shadow-xl">
          Watch Periodic Table
        </button>
</Link>



          <figure className='mx-auto w-fit h-24'>
            <Image width={600} height={200} alt='Wiki-logo' src={'periodic-table.png'} unoptimized  ></Image>
          </figure>




        <section className="pt-[20rem] sm:pt-[35rem]">
          <div className='relative '>
            <div
              className=" overflow-hidden bg-cover w-[34rem] h-28 mx-auto absolute top-2 left-0 right-0 bottom-0 flex items-center justify-center dark:opacity-[2%]"
              style={{
                backgroundImage: `url('/background-head.svg')`,
              }}
            >
            </div>
          </div>
<h2 className="text-[2.3rem] font-bold text-center mb-20 text-h1 
          bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text dark:text-transparent 
          dark:text-gradient tracking-wide dark:from-[#c6f1ff] dark:to-[#acffff]">
            Top Science Books</h2>
          {/* <p className="text-lg text-center mt-4 font-normal">  Explore a community-curated collection of top science books </p> */}

          <div className='max-w-2xl  mx-auto bg-background1 dark:bg-background1dark border-[4px] mb-28 rounded-3xl border-[#98bdd3] shadow-sm'>
            <ul className="list-none mt-6 px-4 ">
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
                  <p className="text-sm font-semibold py-1 text-left">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <Accordion></Accordion>
          <div className='mt-20'>


          </div>

        </section>

{/* </Suspense> */}


        <ScrollTopButton />
      </main>
    </div>
  );
};

export default HomePage;


