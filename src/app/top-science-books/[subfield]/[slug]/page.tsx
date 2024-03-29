import { PrismaClient } from '@prisma/client';
import NavBar from '@/components/NavbarContainer';
import ContextSpace from '../components/ContextSpace';
import ArticleTitle from '../components/ArticleTitle';
import LocalContextLinks from '../components/LocalContextLinks';
import BookRecommendation from '../components/BookRecommendation';
import styles from './page.module.css';
import { cache } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ScrollTopButton from '@/components/ScrollTopButton';


type OGImage = {
    url: string;
};

const prisma = new PrismaClient();

interface ProductPageProps {
    params: {
        slug: string;
    };
}

const formatTitleForURL = (title: string) => {
    return title
        .replace(/[^a-zA-Z0-9 ,'&-]/g, '')
        .replace(/ /g, '%20')
        .replace(/&/g, '%26');
};

const getRecommendation = cache(async (slug: string) => {
    const recommendations = await prisma.topicRecommendation.findUnique({
        where: { slug: slug },
        include: {
            books: true
        },
    });

    if (!recommendations) notFound();

    return recommendations;
});


export async function generateMetadata({
    params: { slug },
}: ProductPageProps): Promise<Metadata> {
    const recommendations = await getRecommendation(slug);

    const images = (recommendations?.books?.map((book) => ({
        url: formatTitleForURL(book.englishTitle) || '' 
    })) || []).filter(image => image.url !== null) as OGImage[];

    const keywords = recommendations?.books?.flatMap((book) => book.keywords || []) || [];
    const uniqueKeywords = Array.from(new Set(keywords));
    const description = `Dive into the internet curate, often updated, list of the top science books on ${recommendations?.subField}. From groundbreaking discoveries to the fundamentals of the universe, explore books that have shaped our understanding of science`;

    return {
        title: recommendations?.topic,
        description: description,
        openGraph: {
            images: images,
        },
        keywords: uniqueKeywords.join(', '),
    };
}


async function RecommendationPage({
    params: { slug },
}: ProductPageProps) {
    const recommendations = await getRecommendation(slug);

    const bookLinks = recommendations?.books?.map((book) => ({
        text: book.englishTitle,
        id: book.englishTitle.replace(/\s+/g, '-').toLowerCase(),
    })) || [];

    const bookRecommendations = recommendations?.books?.map((book, index) => (
        <BookRecommendation key={book.englishTitle} book={book} syllabus={book.syllabus || {}} priority={index === 0} />
    )) || [];

    return (
        <div className={styles.scroll}>
            <NavBar title={recommendations?.field} title2={recommendations?.subField} title3={recommendations?.topic} domain="www.wiki-science.com/" menuPath='./NavigationMenu' />
            <main>
                <ContextSpace />
                <ArticleTitle topic={recommendations?.topic} />
                <LocalContextLinks links={bookLinks} />
                {bookRecommendations}
                <div className='globalSpace'></div>
                <div className='globalSpace'></div>
                <ScrollTopButton />
            </main>
        </div>
    );
}

export default RecommendationPage;
