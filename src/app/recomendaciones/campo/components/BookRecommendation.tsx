// components/BookRecommendation.tsx
import styles from '../page.module.css';
import { Books } from '@prisma/client';

type BookRecommendationProps = {
  book: Books;
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