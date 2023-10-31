// components/ArticleTitle.tsx
import styles from './ArticleTitle.module.css';

type Props = {
  subfieldTitle: string;
};

const ArticleTitle = ({ subfieldTitle }: Props) => {
  return (
    <h1 className={styles.articleTitle}>
      <span>Mejores libros de </span>
      {subfieldTitle}
    </h1>
  );
};

export default ArticleTitle;
