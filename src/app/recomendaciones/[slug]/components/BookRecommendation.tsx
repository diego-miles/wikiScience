import React from 'react';
import styles from './BookRecommendation.module.css';
import { Book } from '@prisma/client'; // Adjust the import path based on your setup

type BookRecommendationProps = {
  book: Book;
};

const BookRecommendation: React.FC<BookRecommendationProps> = ({ book }) => {
  // Extract the properties used in the component
  const {
    englishTitle,
    authors,
    coverImage,
    pages,
    lastEdition,
    publicationDate,
    originCountry,
    ratings,
    summary,
    spanishTitle,
    keywords,
    syllabusImages,
    lastEditionDate,
    spanishEdition,
    amazonLink,
  } = book;

  // Format the authors array into a string
  const authorsFormatted = authors.join(', ');

  // Component's rendering logic
  return (
    <div className={styles.bookRecommendation}>
      <h2 className={styles.title}>{englishTitle} by {authorsFormatted}</h2>
      {coverImage && (
        <div className={styles.coverImage}>
          <img src={coverImage} alt={`Cover of the book ${englishTitle}`} />
        </div>
      )}
      {/* Additional details like lastEdition, publicationDate, etc., can be rendered here */}
      {/* ... */}
      {summary && <p className={styles.summary}>{summary}</p>}
      {/* Render the ratings if available */}
      {ratings && (
        <div className={styles.ratings}>
          {/* Example of how you might render the ratings */}
          {ratings.amazon && <div>Amazon Rating: {ratings.amazon.average} ({ratings.amazon.number} reviews)</div>}
          {ratings.goodreads && <div>Goodreads Rating: {ratings.goodreads.average} ({ratings.goodreads.number} reviews)</div>}
          {ratings.google && <div>Google Rating: {ratings.google.average} ({ratings.google.number} reviews)</div>}
        </div>
      )}
      {/* Additional elements like links and images */}
      {amazonLink && <a href={amazonLink} target="_blank" rel="noopener noreferrer">Buy on Amazon</a>}
      {/* ... */}
    </div>
  );
};

export default BookRecommendation;
