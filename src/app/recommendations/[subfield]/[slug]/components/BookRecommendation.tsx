import React from 'react';
import styles from './BookRecommendation.module.css';
import { Book } from '@prisma/client'; // Ajusta la ruta de importación según tu configuración

type BookRecommendationProps = {
  book: Book;
};

const BookRecommendation: React.FC<BookRecommendationProps> = ({ book }) => {
  const {
    englishTitle,
    authors,
    coverImage,
    pages,
    lastEditionDate,
    publicationDate,
    ratings,
    summary,
  } = book;

  const authorsFormatted = authors.join(', ');

  // Opcional: Formatear fechas a un formato más legible
  const formattedLastEditionDate = lastEditionDate ? new Date(lastEditionDate).toLocaleDateString() : '';
  const formattedPublicationDate = publicationDate ? new Date(publicationDate).toLocaleDateString() : '';

  return (
    <div className={styles.bookRecommendation}>
      <div className='globalSpace'></div>
      <h2 id={book.englishTitle.replace(/\s+/g, '-').toLowerCase()} className={styles.title}> {'"' + englishTitle + '"'} <span>by {authorsFormatted}</span></h2>
      {/* {coverImage && (
        <figure className={styles.coverImg}>
          <img width="130px" src={coverImage} alt={`Cover of the book ${englishTitle}`} />
        </figure>
      )} */}

      {/* Grid para páginas y fechas */}
      <div className={styles.infoGrid}>
        {publicationDate && <div> <h5>Publication</h5> <p>{publicationDate}</p></div>}
        {pages && <div><h5>Pages</h5> <p>{pages}</p></div>}
        {lastEditionDate && <div> <h5>Last Edition</h5> <p>{lastEditionDate}</p></div>}
      </div>

      <p className={styles.ratingsTitle}>Ratings:</p>
      {/* Grid para calificaciones */}
      <div className={styles.ratingsGrid}>
        {ratings?.amazon && 
          <div>
            <h5>Amazon</h5>
            <h5 className='active-color'>{ratings.amazon.number} reviews</h5>
            <p>{ratings.amazon.average}</p>
          </div>
        }
        {ratings?.goodreads && 
          <div>
            <h5>Goodreads</h5>
            <h5 className='active-color'>{ratings.goodreads.number} reviews</h5>
            <p>{ratings.goodreads.average}</p>
          </div>
        }
        {ratings?.google && 
          <div>
            <h5>Google</h5>
            <h5 className='active-color'>{ratings.google.number} reviews</h5>
            <p>{ratings.google.average}</p>
          </div>
        }
      </div>

      {summary && <p className={styles.summary}>{summary}</p>}

      <div className='globalSpace'></div>
    </div>
  );
};

export default BookRecommendation;
