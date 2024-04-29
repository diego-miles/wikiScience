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

//   // Function to highlight keywords in summary
// const highlightKeywords = (text: string) => {
//   // First, create a regex pattern from keywords to identify phrases in the text
//   const regexPattern = span.map(kw => kw.replace(/([\s,.;])/g, '\\$1')).join('|');
//   const regex = new RegExp(`\\b(${regexPattern})\\b`, 'gi');

//   // Split the text by the regex and keep the separators (keywords)
//   const splitText = text.split(regex);

//   return splitText.map((segment, index) => {
//     // Check if the segment is a keyword
//     if (span.some(kw => kw.toLowerCase() === segment.toLowerCase())) {
//       return <span key={index} className={styles.keyword}>{segment}</span>;
//     }
//     // If not a keyword, return the segment as is
//     return segment;
//   });
// };


  return (
    <>
    <section className={styles.bookRecommendation} >

      <h2 id={book.englishTitle?.replace(/\s+/g, '-').toLowerCase()} className={styles.title} >
        {'"' + englishTitle + '"'} <span>by {authorsFormatted}</span>
      </h2>
      <div className={styles.contentGrid}>
        <div className={styles.leftColumn}>
        <SyllabusComponet title={englishTitle} priority={priority} syllabusData={syllabus}/>
          <div className={styles.infoGrid}>
            {publicationDate && <div> <p className={"smallText"}>Pub. Year</p> <p className='p2'>{publicationDate}</p></div>}
            {lastEditionYear && <div> <p className={"smallText"}>Last Ed.</p> <p className='p2'>{lastEditionYear}</p></div>}
            {pages && <div><p className={"smallText"}>Pages</p> <p className='p2'> {pages}</p></div>}
          </div>

          <p className={styles.ratingsTitle}>Ratings:</p>
      <div className={styles.ratingsGrid}>
        {ratings?.amazon && (
          <div>
            <a className='active-gold2' href={ratings.amazon?.link} target="_blank" rel="noopener noreferrer">Amazon</a>
              <a href={ratings.amazon?.link} target="_blank" rel="noopener noreferrer" className='active'>
                {ratings.amazon?.average}
              </a>
              <p className={"smallText2"}>({ratings.amazon?.number} ratings)</p>
          </div>
        )}
        {ratings?.goodreads && (
          <div>
            <a className='active-gold2' href={ratings.goodreads?.link} target="_blank" rel="noopener noreferrer">Goodreads</a>
              <a className='active' href={ratings.goodreads?.link} target="_blank" rel="noopener noreferrer">
                {ratings?.goodreads.average}
              </a>
              <p className={"smallText2"}>({ratings.goodreads?.number} ratings)</p> 
          </div>
        )}
        {/* {ratings?.google && (
          <div>
            <a className='active-gold2'>Google</a>
            <a className='active-gold'>
                {ratings.google.average}
            </a>
          </div>
        )} */}
      </div>
        </div>

        <div className={styles.rightColumn}>
        {summary?.map((paragraph, index) => (
          <p key={index} className={styles.summaryParagraph} >
            {/* {highlightKeywords(paragraph)} */}
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
