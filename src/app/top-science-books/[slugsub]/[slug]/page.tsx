import { PrismaClient } from '@prisma/client';
import NavBar from '@/components/NavbarContainer';
import ContextSpace from '@/components/books-components/ContextSpace';
import ArticleTitle from '@/components/books-components/ArticleTitle';
import LocalContextLinks from '@/components/books-components/LocalContextLinks';
import BookRecommendation from '@/components/books-components/BookRecommendation';
import styles from './page.module.css';
// import { cache } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ScrollTopButton from '@/components/ScrollTopButton';
import { unstable_cache } from 'next/cache';




type OGImage = {
    url: string;
};

const prisma = new PrismaClient();

interface ProductPageProps {
    params: {
        slug: string;
    };
}

const formatTitleForAmazonImageURL = (title: string) => {
  return title
    .replace(/[^a-zA-Z0-9 ,'&-]/g, "")
    .replace(/&/g, "%26")
    .replace(/ /g, "+");
};


const getRecommendation = unstable_cache(async (slug: string) => {
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
        url: `${formatTitleForAmazonImageURL(book.englishTitle)}.png` || '' 
    })) || []).filter(image => image.url !== null) as OGImage[];

    const keywords = recommendations?.books?.flatMap((book) => book.keywords || []) || [];
    const uniqueKeywords = Array.from(new Set(keywords));
    const description = `Explore our expertly curated and constantly updated list of the top science books on ${recommendations?.topic} for 2024. Discover groundbreaking works that delve into the universe's mysteries and the most significant scientific discoveries. These essential reads offer in-depth knowledge, insightful analysis, and innovative perspectives for both enthusiasts and scholars alike.`;

    return {
        title: `Best ${formatTitleForAmazonImageURL(recommendations?.topic)} books of all time (2024)` ,
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
                <LocalContextLinks  links={bookLinks || []}/>
                {bookRecommendations}
                <div className='globalSpace'></div>
                <div className='globalSpace'></div>
                <ScrollTopButton />
            </main>
        </div>
    );
}

export default RecommendationPage;
