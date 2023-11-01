// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import prisma from '@/lib/db/prisma'; // Importa una única instancia de Prisma
// import NavBar from '../components/NavBarContainer';
// import ContextSpace from './components/ContextSpace';
// import ArticleTitle from './components/ArticleTitle';
// import LocalContextLinks from './components/LocalContextLinks';
// import Summary from './components/Summary';
// import BookRecommendation from './components/BookRecommendation';
// import styles from './page.module.css';


// export default async function Recommendations() {
//     const topics = await prisma.topic.findMany({
//         orderBy: {} 
//     });
// }


// const ArticlePage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [topicData, setTopicData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (id) {
//         const topic = await prisma.topic.findUnique({
//           where: { id: id.toString() },
//           include: { books: true },
//         });
//         setTopicData(topic);
//       }
//     };
    
//     fetchData();
    
//     return () => {
//       prisma.$disconnect(); // Cierra la conexión al desmontar
//     };
//   }, [id]);

//   if (!topicData) return <div>Loading...</div>;

//   return (
//     <>
//       <NavBar title="subfield-topic"/>
//       <ContextSpace />
//       <ArticleTitle topic={topicData.name} />
//       <LocalContextLinks links={["link1", "link2"]} />
//       <div className={styles.globalDivSpace} />
//       <Summary summary={topicData.summary} />
//       {topicData.books.map((book) => (
//         <BookRecommendation key={book.title} book={book} />
//       ))}
//     </>
//   );
// };

