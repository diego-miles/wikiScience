// components/Ratings.tsx
import styles from './Ratings.module.css';

type Props = {
  amazon: number;
  goodreads: number;
  google: number;
};

const Ratings = ({ amazon, goodreads, google }: Props) => {
  return (
    <div className={styles.ratingsContainer}>
      <h4 className={styles.ratingsTitle}>Ratings</h4>
      <div className={styles.rating}>
        <div className={styles.ratingSource}>Amazon</div>
        <div className={styles.ratingValue}>{amazon}</div>
      </div>
      <div className={styles.rating}>
        <div className={styles.ratingSource}>Goodreads</div>
        <div className={styles.ratingValue}>{goodreads}</div>
      </div>
      <div className={styles.rating}>
        <div className={styles.ratingSource}>Google</div>
        <div className={styles.ratingValue}>{google}</div>
      </div>
    </div>
  );
};

export default Ratings;
