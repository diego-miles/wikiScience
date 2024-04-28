"use client"
import React from 'react';
import Image from 'next/image';
import NavBar from '@/components/NavbarContainer';
import data from '@/components/data';
import ScrollTopButton from '@/components/ScrollTopButton';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {TextGenerateEffectDemo} from './HeroHomeText'


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
          <TextGenerateEffectDemo></TextGenerateEffectDemo>
        </header>

<section className="mt-16">
  <h2 className="text-2xl font-bold text-center text-[#477780]">Top Science Books</h2>
  <p className="text-lg text-center mt-4 font-normal">Explore a curated collection of top science books:</p>
  <ul className="list-none mt-5 px-4">
    {[
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
</section>


        {/* Menu section using Tailwind's grid and flexbox utilities */}
        <div className="mt-16">
          <div className="max-w-6xl mx-auto">
            {/* <div className="text-center text-[#a3c4e0] rounded-md py-2 mb-4 text-lg font-medium">Top Science Books</div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.map((field, idx) => (
                <div key={idx} className="p-4">
                  <h3 className="text-2xl font-bold text-[#71a5a2] text-center pb-4 pt-12">{field.title}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {field.subFields.map((subField, sIdx) => (
                      <ul key={sIdx}>
                        <li className="pb-2">
                          <Link href={`/top-science-books/${toSlug(subField.title)}`} className="text-lg font-medium text-[#00659A] hover:text-[#3498db]">
                            {subField.title}
                          </Link>
                        </li>
                        {subField.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="pl-4 border-l-2 border-[#e1ebef] pb-2"> 
                            <Link 
                              href={`/top-science-books/${toSlug(subField.title)}/${toSlug(topic)}`} 
                              className="text-base text-[#021e2f] hover:underline hover:text-[#3498db]"
                            >
                              {topic}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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