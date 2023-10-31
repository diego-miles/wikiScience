// pages/ArticlePage.tsx
import NavBar from '@/NavBarContainer';
import ContextSpace from './components/ContextSpace';
import ArticleTitle from './components/ArticleTitle';
import LocalContextLinks from './components/LocalContextLinks';
import Paragraph from './components/Paragraph';
import Book from './components/Book';
import Temario from './components/Temario';
import Ratings from './components/Ratings';
import NavBarContainer from '@/NavBarContainer';

const ArticlePage = () => {
  // Fetch data here
  // ...

  return (
    <div>
      <NavBarContainer title='./' profileLink={''} menuLink='http://localhost:3000/recomendaciones/menu'/>
      <ContextSpace svg="some-svg-path" />
      <ArticleTitle subfieldTitle="Physics" />
      <LocalContextLinks links={['Link1', 'Link2']} />
      <div className="globalDivSpace"></div>
      <Paragraph text="Why physics is important..." />
      {/* Map through books data to render Book components */}
    </div>
  );
};

export default ArticlePage;
