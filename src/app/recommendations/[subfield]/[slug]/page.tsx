import prisma from '@/lib/db/prisma'; 
import NavBar from '../../components/navBar/NavBarContainer';
import ContextSpace from './components/ContextSpace';
import ArticleTitle from './components/ArticleTitle';
import LocalContextLinks from './components/LocalContextLinks';
import Summary from './components/Summary';
import BookRecommendation from './components/BookRecommendation';
// import styles from './page.module.css';
import {cache} from "react";
// import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface ProductPageProps {
    params: {
        slug: string;
    }
}

const getRecommendation = cache(async (slug: string) => {
    const recommendations = await prisma.recommendation.findUnique({ // Usar findFirst en lugar de findUnique
        where: { slug: slug }
    });
    if (!recommendations) notFound();
    return recommendations;
})


// export async function generateMetadata(
//     {params:{slug}}: ProductPageProps): Promise<Metadata>{
//         const recommendations = await getRecommendation(slug);
//         return {
//             title: recommendations?.slug,
//             description: recommendations?.slug,
//             // openGraph: {
//             //     images: [{url: recommendations?.books[0].coverImage}]
//             // }
//         }
//     }

async function RecommendationPage(
    {params:{slug}}: ProductPageProps,
) {
    const recommendations = await getRecommendation(slug);

    const bookLinks = recommendations?.books?.map(book => ({
        text: book.englishTitle,
        id: book.englishTitle.replace(/\s+/g, '-').toLowerCase()
    }));

    const bookRecommendations = recommendations?.books?.map((book) => 
        <BookRecommendation key={book.englishTitle} book={book} />
 );

    return (
        <div>
            <NavBar title={recommendations?.field} title2={recommendations?.subField} title3={recommendations?.topic} domain="http://localhost:3000/" />
            <main>
                <ContextSpace />
                <ArticleTitle topic={recommendations?.topic} />
                <LocalContextLinks links={bookLinks || []} />
                <div className='globalSpace'></div>
                <Summary summary={recommendations?.topicSummary} />
                {/* <div className='globalSpace'></div> */}
                {bookRecommendations}
                <div className='globalSpace'></div>
                <div className='globalSpace'></div>
            </main>
        </div>
    );
}

export default RecommendationPage;
