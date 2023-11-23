import React from 'react';
import styles from './BookRecomm.module.css';
import { Book } from '@prisma/client';
import Syllabus from './Syllabus';

type BookRecommendationProps = {
  book: Book;
  priority: boolean;
};

const BookRecommendation: React.FC<BookRecommendationProps> = ({ book, priority }) => {
  const {
    englishTitle,
    authors,
    pages,
    lastEditionYear,
    publicationDate,
    ratings,
    summary,
    keywords, // Ensure keywords are included in your Book type
  } = book;

  const authorsFormatted = authors.join(', ');

  // Function to highlight keywords in summary
const highlightKeywords = (text: string) => {
  // First, create a regex pattern from keywords to identify phrases in the text
  const regexPattern = keywords.map(kw => kw.replace(/([\s,.;])/g, '\\$1')).join('|');
  const regex = new RegExp(`\\b(${regexPattern})\\b`, 'gi');

  // Split the text by the regex and keep the separators (keywords)
  const splitText = text.split(regex);

  return splitText.map((segment, index) => {
    // Check if the segment is a keyword
    if (keywords.some(kw => kw.toLowerCase() === segment.toLowerCase())) {
      return <span key={index} className={styles.keyword}>{segment}</span>;
    }
    // If not a keyword, return the segment as is
    return segment;
  });
};


  return (
    <div className={styles.bookRecommendation}>

      <h2 id={book.englishTitle.replace(/\s+/g, '-').toLowerCase()} className={styles.title} >
        {'"' + englishTitle + '"'} <span>by {authorsFormatted}</span>
      </h2>
      <div className={styles.contentGrid}>
        <div className={styles.leftColumn}>
          <Syllabus title={englishTitle} priority={priority}/>
          <div className={styles.infoGrid}>
            {publicationDate && <div> <h5>Publication</h5> <p>{publicationDate}</p></div>}
            {pages && <div><h5>Pages</h5> <p>{pages}</p></div>}
            {lastEditionYear && <div> <h5>Last Edition</h5> <p>{lastEditionYear}</p></div>}
          </div>

          <p className={styles.ratingsTitle}>Ratings:</p>
          <div className={styles.ratingsGrid}>
            {ratings?.amazon && 
              <div>
                <h5>Amazon</h5>
                <p className='active-color'>{ratings.amazon.average}</p>
              </div>
            }
            {ratings?.goodreads && 
              <div>
                <h5>Goodreads</h5>
                <p className='active-color'>{ratings.goodreads.average}</p>
              </div>
            }
            {ratings?.google && 
              <div>
                <h5>Google</h5>
                <p className='active-color'>{ratings.google.average}</p>
              </div>
            }
          </div>
        </div>

        <div className={styles.rightColumn}>
        {summary.map((paragraph, index) => (
          <p key={index} className={styles.summaryParagraph}>
            {highlightKeywords(paragraph)}
          </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookRecommendation;
