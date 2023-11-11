import React from 'react';
import styles from './BookRecommendation.module.css'; // Cambio a CamelCase para seguir convenciones

type BookProps = {
  englishTitle: string;
  authors: string[];
  coverImage?: string;
  lastEdition?: string;
  publicationDate?: string;
  originCountry?: string;
  ratings?: {
    amazon: number;
    goodreads: number;
    google: number;
  };
  summary?: string;
};

type BookRecommendationProps = {
  book: BookProps;
};

const BookRecommendation: React.FC<BookRecommendationProps> = ({ book }) => {
  const { 
    englishTitle, 
    authors, 
    coverImage, 
    lastEdition, 
    publicationDate, 
    originCountry, 
    ratings, 
    summary 
  } = book; // Desestructuración para un código más limpio

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {englishTitle} - {authors.join(" & ")}
      </h2>

      <div className={styles.cover}>
        {coverImage && <img src={coverImage} alt={englishTitle} />}
        <div className={styles.overlay}>Ver temario</div>
      </div>

      <div className={styles.details}>
        {lastEdition && (
          <div className={styles.detailItem}>
            <h4 className={styles.detailTitle}>Last Edition</h4>
            <p>{lastEdition}</p>
          </div>
        )}
        {publicationDate && (
          <div className={styles.detailItem}>
            <h4 className={styles.detailTitle}>Publication Date</h4>
            <p>{publicationDate}</p>
          </div>
        )}
        {originCountry && (
          <div className={styles.detailItem}>
            <h4 className={styles.detailTitle}>Origin Country</h4>
            <p>{originCountry}</p>
          </div>
        )}
      </div>

      {ratings && (
        <div className={styles.ratings}>
          {Object.entries(ratings).map(([source, value]) => (
            <div className={styles.rating} key={source}>
              <h4 className={styles.active}>{source}</h4>
              <p>{value}</p>
            </div>
          ))}
        </div>
      )}

      {summary && <p className={styles.summary}>{summary}</p>}
    </div>
  );
};

export default BookRecommendation;
