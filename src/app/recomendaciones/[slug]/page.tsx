import prisma from '@/lib/db/prisma'; 
import NavBar from '../components/navBar/NavBarContainer';
import ContextSpace from './components/ContextSpace';
import ArticleTitle from './components/ArticleTitle';
import LocalContextLinks from './components/LocalContextLinks';
import Summary from './components/Summary';
import BookRecommendation from './components/BookRecommendation';
import styles from './page.module.css';
import {cache} from "react";
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface ProductPageProps {
    params: {
        slug: string;
    }
}

const getRecommendation = cache(async (slug: string) => {
    const recommendations = await prisma.recommendation.findFirst({ // Usar findFirst en lugar de findUnique
        where: { slug: slug }
    });
    if (!recommendations) notFound();
    return recommendations;
})


export async function generateMetadata(
    {params:{slug}}: ProductPageProps): Promise<Metadata>{
        const recommendations = await getRecommendation(slug);
        return {
            title: recommendations?.slug,
            description: recommendations?.slug,
            openGraph: {
                images: [{url: recommendations?.books[0].coverImage}]
            }
        }
    }

export default async function RecommendationPage(
    {params:{slug}}: ProductPageProps,
) {
    const recommendations = await getRecommendation(slug);
    return (
        <div>
            <NavBar title={recommendations?.field} title2={recommendations?.topic} />
            <ContextSpace />
            <ArticleTitle topic={recommendations?.topic} />
            <LocalContextLinks links={["link1", "link2"]} />
            <div className={styles.globalDivSpace} />
            <div className='globalDivSpace'></div>
            <Summary summary={recommendations.books[1].summary} />
            <BookRecommendation key={recommendations.slug} book={recommendations.books[0]} />
            <div className='globalDivSpace'></div>
        </div>
    );
}

