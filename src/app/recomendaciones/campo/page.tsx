import prisma from '@/lib/db/prisma'; 
import NavBar from '../components/navBar/NavBarContainer';
import ContextSpace from './components/ContextSpace';
import ArticleTitle from './components/ArticleTitle';
import LocalContextLinks from './components/LocalContextLinks';
import Summary from './components/Summary';
import BookRecommendation from './components/BookRecommendation';
import styles from './page.module.css';

export default async function RecommendationPage() {
    "use server"
    const topics = await prisma.recommendation.findUnique({
        where: { topic: 'Biochemistry' }
    });
    if (!topics) {
        return <div>Loading...</div>;
    }

    return (
        <div>  
            <NavBar title='Biology' />
            <ContextSpace />
            <ArticleTitle topic={topics.topic} />
            <LocalContextLinks links={["link1", "link2"]} />
            <div className={styles.globalDivSpace} />
            <div className='globalDivSpace'></div>
            <Summary summary={topics.books[1].summary} />
            <BookRecommendation key={topics.topic} book={topics.books[0]} />
            <div className='globalDivSpace'></div>
        </div>
    );
}



