import prisma from '@/lib/db/prisma'; 
import NavBar from '../../components/navBar/NavBarContainer';
import ContextSpace from '../components/ContextSpace';
import ArticleTitle from '../components/ArticleTitle';
import LocalContextLinks from '../components/LocalContextLinks';
import BookRecommendation from '../components/BookRecommendation';
import styles from './page.module.css';
import { cache } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ScrollTopButton from '@/ScrollTopButton'


interface ProductPageProps {
    params: {
        slug: string;
    }
}

const formatTitleForURL = (title: string) => {
  return title.replace(/[^a-zA-Z0-9 '-]/g, "").replace(/ /g, "%20");
};

// const getRecommendation = cache(async (slug: string) => {
//     const recommendations = await prisma.recommendation.findUnique({
//         where: { slug: slug }
//     });
//     if (!recommendations) notFound();
//     return recommendations;
// })


// export async function generateMetadata(
//     {params:{slug}}: ProductPageProps): Promise<Metadata>{
//         const recommendations = await getRecommendation(slug);
//         const images = recommendations.books.map(book => ({
//             url: formatTitleForURL(book.englishTitle)
//         }));
//         return {
//             title: recommendations?.slug,
//             description: recommendations?.slug,
//             openGraph: {
//                 images: images
//             }
//         }
//     }

async function RecommendationPage(
    {params:{slug}}: ProductPageProps,
) {
    // const recommendations = await getRecommendation(slug);

    const recommendations = await prisma.recommendation.findUnique({
        where : { slug : slug}
    })
    // const recommendations = await getRecommendation(slug);
   

    const bookLinks = recommendations?.books?.map(book => ({
        text: book.englishTitle,
        id: book.englishTitle.replace(/\s+/g, '-').toLowerCase()
    }));

    const bookRecommendations = recommendations?.books?.map((book, index) => 
        <BookRecommendation key={book.englishTitle} book={book} priority={index === 0} />
 );

    return (
        <div className={styles.scroll}>
            <NavBar title={recommendations?.field} title2={recommendations?.subField} title3={recommendations?.topic} domain="www.wiki-science.com/" />
            <main>
                <ContextSpace />
                <ArticleTitle topic={recommendations?.topic} />
                <LocalContextLinks links={bookLinks || []} />
                {/* <div className='globalSpace'></div> */}
                {/* <Summary summary={recommendations?.topicSummary} /> */}
                {/* <div className='globalSpace'></div> */}
                {bookRecommendations}
                <div className='globalSpace'></div>
                <div className='globalSpace'></div>
                <ScrollTopButton/>
            </main>
        </div>
    );
}

export default RecommendationPage;
