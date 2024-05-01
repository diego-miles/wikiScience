import React from 'react';
import styles from './NavigationMenu.module.css';
import Link from 'next/link';
// import Accordion from '@/components/books-components/AccordionFields'
import data from '@/components/data';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger, 
} from "@/components/ui/accordion";


import chemicalElements from '@/components/elementsData.json'; // Importa la lista de elementos químicos



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
        <div tabIndex={0} className={`${styles.menuWrapper} ${className}`} style={style}>

            <div className={styles.menuMain}> 
<Link href={'/'}>

                <h2 className='font-semibold text-base'>Home</h2>
</Link>
    <Accordion type="single" collapsible className="w-full" >
      <AccordionItem value="item-1">
        <AccordionTrigger>
                                <h2 className='text-center text-base w-full font-semibold'>Chemical Elements</h2>

        </AccordionTrigger>
        <AccordionContent>
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-1 ">
                    {chemicalElements.map((element) => (
                        <div key={element.symbol}>
                    <Link href={`periodic-table/${element.name.toLowerCase()}`}>
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
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
                                <h2 className='py-6 text-center w-full text-base font-semibold'>Top Science Books</h2>

        </AccordionTrigger>
        <AccordionContent>
      {/* <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mt-9">
        {data.map((field, idx) => (
          <Accordion key={idx} type="single" collapsible className="mb-4">
              <h3 className="text-base font-semibold text-left">{field.title}</h3>
            {field.subFields.map((subField, sIdx) => (
              <AccordionItem key={sIdx} value={`item-${idx}-${sIdx}`}>
                <AccordionTrigger>
                    <p className='p-0 text-sm'>
                  {subField.title}
                    </p>
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    <li className=""> 
                      <Link className='text-xs text-left' href={`/top-science-books/${toSlug(subField.title)}`}>
                        {subField.title} 
                      </Link> 
                    </li>
                    {subField.topics.map((topic, tIdx) => (
                      <li key={tIdx}>
                        <Link className=" py-2 text-xs text-left" href={`/top-science-books/${toSlug(subField.title)}/${toSlug(topic)}`}>
                            {topic}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div> */}



            <section className={"-mt-12 "}> 
                {/* <div className={styles.header}>~ Top Science Books ~</div> */}

                
                <div className={styles.navContainer}>
                    {data.map((field, idx) => (
                        <div className={styles.branchContainer} key={idx}>
                            <div>
                                <li className={styles.titleField}>{field.title}</li>
                            </div>
                            <div className={styles.gridLayout}>
                                {field.subFields.map((subField, sIdx) => (
                                    <ul key={sIdx}>
                                        <li className={styles.subField}>
                                            {/* Use toSlug to convert subField.title into a slug */}
                                            <Link href={`/top-science-books/${toSlug(subField.title)}`} className='menu-link'>
                                                {subField.title}
                                            </Link>
                                        </li>
                                        {subField.topics.map((topic, tIdx) => (
                                            <li className={styles.subTopic} key={tIdx}>
                                                {/* Use toSlug for both subField.title and topic to create a nested slug */}
                                                <Link href={`/top-science-books/${toSlug(subField.title)}/${toSlug(topic)}`} >
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


                <h2 className='font-semibold text-base text-slate-300'>Electronics Encyclopedia</h2>
                <h2 className='font-semibold text-base text-slate-300'>Concepts</h2>
                <h2 className='font-semibold text-base text-slate-300'>Biographies</h2>
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
