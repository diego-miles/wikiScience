// components/ArticleTitle.tsx
type ArticleTitleProps = {
  topic: string;
};

const ArticleTitle: React.FC<ArticleTitleProps> = ({ topic }) => (
  <h1>
    <span>Best</span><br/> {topic}<span> <br/>books of all time<br/>(2024)</span>
    
  </h1>
  
);

export default ArticleTitle;

