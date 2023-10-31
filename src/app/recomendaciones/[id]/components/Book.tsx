// components/Book.tsx
import styles from './Book.module.css';

type Props = {
  title: string;
  authors: string[];
  coverImage: string;
  summary: string;
  ratings: {
    amazon: number;
    goodreads: number;
    google: number;
  };
};

const Book = ({ title, authors, coverImage, summary, ratings }: Props) => {
  return (
    <div className={styles.bookContainer}>
      <h2 className={styles.bookTitle}>
        <span>{title}</span> {authors.join(', ')}
      </h2>
      {/* Temario and cover image component */}
      {/* Ratings component */}
      <p className={styles.bookSummary}>
        {summary}
      </p>
    </div>
  );
};

export default Book;
