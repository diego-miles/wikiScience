import prisma from '@/lib/db/prisma'; 
// import { Recommendation } from '@prisma/client'; 
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
            <NavBar title='' />
            <ContextSpace />
            <ArticleTitle topic={topics.topic} />
            <LocalContextLinks links={["link1", "link2"]} />
            <div className={styles.globalDivSpace} />
            <Summary summary={topics.books[0].summary} />
            <BookRecommendation key={topics.topic} book={topics.books[0]} />
        </div>
    );
}




// const ArticlePage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [recommendationData, setRecommendationData] = useState<Recommendation | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (id) {
//         const recommendation = await prisma.recommendation.findUnique({
//           where: { id: id.toString() },
//           include: { books: true },
//         });
//         setRecommendationData(recommendation);
//       }
//     };

//     fetchData();

//     return () => {
//       prisma.$disconnect(); // Cierra la conexión al desmontar
//     };
//   }, [id]);

//   if (!recommendationData) return <div>Loading...</div>;

//   return (
//     <>
//       <NavBar title={recommendationData.SubField}/>
//       <ContextSpace />
//       <ArticleTitle topic={recommendationData.topic} />
//       <LocalContextLinks links={["link1", "link2"]} />
//       <div className={styles.globalDivSpace} />
//       <Summary summary={recommendationData.topic} />
//       {/* {recommendationData.books.map((book) => (
//         <BookRecommendation key={book.englishTitle} book={book} />
//       ))} */}
//     </>
//   );
// };

// export default ArticlePage;
