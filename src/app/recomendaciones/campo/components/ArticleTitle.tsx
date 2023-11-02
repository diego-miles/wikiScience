// components/ArticleTitle.tsx
type ArticleTitleProps = {
  topic: string;
};

const ArticleTitle: React.FC<ArticleTitleProps> = ({ topic }) => (
  <h1>
    <span>Best books on</span><br/>
    {topic}
  </h1>
);

export default ArticleTitle;