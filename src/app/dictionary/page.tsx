"use client"
import React from 'react';
import Image from 'next/image';
import NavBar from '@/components/navigation/NavbarContainer';
import data from '@/data/data';
import ScrollTopButton from '@/components/ScrollTopButton';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';


const toSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '_');
};

const HomePage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto mt-12"> {/* Using Tailwind's container class for centering and padding */}
      {/* <div className="relative mt-16">
        <div className="absolute inset-0 flex items-center justify-center mt-28">

            <Image 
              src="/texture.jpg" 
              alt="Image" 
              width={200} 
              height={50} 
              className="rounded-md object-cover w-auto blur-md" 
              unoptimized 
            />

        </div>
      </div> */}


        <div className="flex justify-center"> {/* Centering the logo */}
          {/* <div className="w-20 h-20 bg-no-repeat bg-center bg-contain z-30" style={{ backgroundImage: 'url(/wikilogo-blue.svg)' }}></div>  */}
          <figure>
            <Image width={55} height={50} alt='Wiki-logo' src={'wikilogo-blue.svg'} unoptimized  ></Image>
          </figure>
        </div>

        <header className="text-center mt-4">
          <h1 className="text-5xl font-bold text-[#44a6cd]">Wiki Science</h1> {/* Using Tailwind's text color and font weight utilities */}
          {/* <p className="text-3xl font-extrabold text-[#2d373d] mt-4 px-2">A next-generation educational platform. <span className="text-[#376ba2]">Powered by AI.</span></p>  */}
        </header>



        <ScrollTopButton />
      </main>

      {/* Footer section */}
      <footer className="bg-gray-100 py-4 mt-16 text-center"> 
        {/* Footer content here */} 
      </footer> 
    </div>
  );
};

export default HomePage;