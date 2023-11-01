// components/BookRecommendation.tsx
import styles from './ArticlePage.module.css';

type Book = {
  title: string;
  authors: string[];
  coverImage: string;
  ratings: {
    amazon: number;
    goodreads: number;
    google: number;
  };
  summary: string;
};

type BookRecommendationProps = {
  book: Book;
};

const BookRecommendation: React.FC<BookRecommendationProps> = ({ book }) => (
  <div className={styles.bookRecommendation}>
    {/* Subcomponente para el título y los autores */}
    {/* Subcomponente para la portada del libro y "Ver temario" */}
    {/* Subcomponente para los ratings */}
    {/* Subcomponente para el resumen del libro */}
  </div>
);

export default BookRecommendation;