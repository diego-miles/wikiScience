import React from 'react';
import styles from './BookRecomm.module.css';
import SyllabusComponet from './syllabus/Syllabus';
import dynamic from 'next/dynamic';
// import { JsonValue } from '@prisma/client/runtime/library';
import { Book, Syllabus, Section, Subsection } from '@prisma/client';


type BookRecommendationProps = {
  book: Book; // Type assertion to include ratings property
  priority: boolean;
};



const BookRecommendation: React.FC<BookRecommendationProps> = ({ book, priority,}) => {
  const {
    englishTitle,
    authors,
    pages,
    lastEditionYear,
    publicationDate,
    ratings,
    summary,
    syllabus
    // span,
  } = book;

  const authorsFormatted = authors.join(', ');


return (
  <>
    <section className="text-center ">
      <h2 id={book.englishTitle?.replace(/\s+/g, '-').toLowerCase()} className="">
        {"\"" + englishTitle + "\""} <span className="font-semibold">by {authorsFormatted}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
          <SyllabusComponet title={englishTitle} priority={priority} syllabusData={syllabus}/>
          <div className="grid grid-cols-3 gap-4 text-center pb-4">
            {publicationDate && (
              <div>
                <p className="text-sm font-bold">Pub. Year</p>
                <p className="">{publicationDate}</p>
              </div>
            )}
            {lastEditionYear && (
              <div>
                <p className="text-sm font-bold">Last Ed.</p>
                <p className="">{lastEditionYear}</p>
              </div>
            )}
            {pages && (
              <div>
                <p className="text-sm font-bold">Pages</p>
                <p className="">{pages}</p>
              </div>
            )}
          </div>

          <p className="text-lg font-semibold ">Ratings:</p>
          <div className="grid grid-cols-2 text-center py-2 px-8 max-w-screen-md mx-auto">
            {ratings?.amazon && (
              <div>
                <a className='text-gold-500' href={ratings.amazon?.link} target="_blank" rel="noopener noreferrer">Amazon</a>
                <a href={ratings.amazon?.link} target="_blank" rel="noopener noreferrer" className='text-blue-500 font-bold'>
                  {ratings.amazon?.average}
                </a>
                <p className="text-sm">({ratings.amazon?.number} ratings)</p>
              </div>
            )}
            {ratings?.goodreads && (
              <div>
                <a className='text-gold-500' href={ratings.goodreads?.link} target="_blank" rel="noopener noreferrer">Goodreads</a>
                <a className='text-blue-500 font-bold' href={ratings.goodreads?.link} target="_blank" rel="noopener noreferrer">
                  {ratings?.goodreads.average}
                </a>
                <p className="text-sm">({ratings.goodreads?.number} ratings)</p>
              </div>
            )}
          </div>
        </div>

        <div className="pt-9">
          {summary?.map((paragraph, index) => (
            <p key={index} className="">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  </>
);

};

export default BookRecommendation;
