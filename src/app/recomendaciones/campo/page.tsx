// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import prisma from '@prisma/client'; // Importa una única instancia de Prisma
// import NavBar from '@/NavBarContainer';
// import ContextSpace from './components/ContextSpace';
// import ArticleTitle from './components/ArticleTitle';
// import LocalContextLinks from './components/LocalContextLinks';
// import Summary from './components/Summary';
// import BookRecommendation from './components/BookRecommendation';
// import styles from './page.module.css';

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
//       <NavBar />
//       <ContextSpace />
//       <ArticleTitle topic={topicData.name} />
//       <LocalContextLinks links={/* H2 titles from books */} />
//       <div className={styles.globalDivSpace} />
//       <Summary summary={topicData.summary} />
//       {topicData.books.map((book) => (
//         <BookRecommendation key={book.title} book={book} />
//       ))}
//     </>
//   );
// };

// export default ArticlePage;
