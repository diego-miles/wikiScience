import React from 'react';
import styles from './NavigationMenu.module.css';
import Link from 'next/link';
// import Accordion from '@/components/books-components/AccordionFields'
import data from '@/data/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from 'next/image';


import chemicalElements from '@/data/elementsData.json'; // Importa la lista de elementos químicos



interface NavigationMenuProps {
  className?: string;
  style?: React.CSSProperties;
}


let slug = data



const toSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '_');
};

const NavigationMenu: React.FC<NavigationMenuProps> = ({ className, style }) => {

  return (
    <div tabIndex={0} className=" dark:bg-background1dark fixed top-0 bottom-0 w-full z-30 pt-36 overflow-y-auto overflow-x-hidden bg-background1"  style={style}>

      <div className={styles.menuMain}>
        <Link href={'/'}>
          <figure className='text-center w-fit mx-auto mt-6 mb-6'>
            <Image src={'/blue-home.svg'}  alt='Icon-home-blue' width={20} height={20} unoptimized></Image>
          </figure>
          {/* <h2 className='font-semibold text-base'>Home</h2> */}
        </Link>
        <Accordion type="single" collapsible className="w-full" >
          <AccordionItem value="item-1"  >
            {/* <AccordionTrigger> */}
              <div className='py-10 mb-0 text-center text-base w-full  '>
                <Link href={'/periodic-table'} className='text-h1  font-extrabold'>Periodic Table</Link></div>

            {/* </AccordionTrigger> */}
            {/* <AccordionContent>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-1 px-12 ">
                {chemicalElements.map((element) => (
                  <div key={element.symbol}>
                    <Link href={`/periodic-table/${element.name.toLowerCase()}`}>
                      <h3 className='font-normal text-black text-xs '>
                        {element.name} {' '}
                        <span className='text-[#6084b6]'>
                          ({element.symbol})
                        </span>
                      </h3>
                    </Link>
                  </div>
                ))}
              </div>
            </AccordionContent> */}
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h2 className='text-center py-6 mb-3 w-full text-base font-extrabold pb-4 text-h1'>Top Science Books</h2>

            </AccordionTrigger>
            <AccordionContent>



<section>
  {/* <div className="text-center text-xl font-medium text-gray-400 rounded-md mx-auto max-w-xs p-2 mb-4">~ Top Science Books ~</div> */}

  <div className="container text-left mx-auto px-3 grid grid-cols-1 md:grid-cols-2 gap-4">
    {data.map((field, idx) => (
      <div key={idx} className=" rounded-lg p-6">
        <h2 className="text-center text-lg font-bold text-teal-700 pb-8 pt-12">{field.title}</h2>
        <div className="grid grid-cols-2 gap-4">
          {field.subFields.map((subField, sIdx) => (
            <ul key={sIdx}>
              <li className=" dark:text-h1 pb-2">
                <Link href={`/top-science-books/${toSlug(subField.title)}`} className="font-semibold">
                  <strong>
                  {subField.title}
                  </strong>
                </Link>
              </li>
              {subField.topics.map((topic, tIdx) => (
                <li key={tIdx} className="pl-4  border-l-4 border-gray-300 pb-2">
                  <Link href={`/top-science-books/${toSlug(subField.title)}/${toSlug(topic)}`} className="text-gray-700 dark:text-pdark hover:underline">
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
</section>




            </AccordionContent>
          </AccordionItem>
        </Accordion>


        <h2 className='font-semibold text-base text-slate-300 pt-20 dark:text-slate-500 '>Biographies</h2>
        <h2 className='font-semibold text-base text-slate-300 dark:text-slate-500 '>Concepts</h2>
        <h2 className='font-semibold text-base text-slate-300 dark:text-slate-500'>Biological organisms</h2>
        <h2 className='font-semibold text-base text-slate-300 dark:text-slate-500'>Electronics Encyclopedia</h2>
        {/* <div className={styles.header}>~ Top Science Books ~</div> */}
        <section className='text-center'>
        </section>


        <section className={'pt-9 text-center'}>
          {/* <Accordion></Accordion> */}
          <div className="container mx-auto">

          </div>
        </section>
      </div>
    </div>
  );
}

export default NavigationMenu;
