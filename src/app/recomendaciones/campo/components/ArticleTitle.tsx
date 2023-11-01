// components/ArticleTitle.tsx
type ArticleTitleProps = {
  topic: string;
};

const ArticleTitle: React.FC<ArticleTitleProps> = ({ topic }) => (
  <h1>
    <span>Mejores libros de </span>
    {topic}
  </h1>
);

export default ArticleTitle;