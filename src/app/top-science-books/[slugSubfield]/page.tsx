import { PrismaClient } from '@prisma/client';
// import NavBar from '@/components/NavbarContainer';
import ContextSpace from './components/ContextSpace';
import ArticleTitle from './components/ArticleTitle';
import LocalContextLinks from './components/LocalContextLinks';
import BookRecommendation from './components/BookRecommendation';
import { cache } from "react";
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ScrollTopButton from '@/components/ScrollTopButton';

interface SubFieldPageProps {
    params: {
        slugSubfield: string;
    }
}

const prisma = new PrismaClient();

const getSubFieldRecommendation = cache(async (slugSubfield: string) => {
    const subFieldData = await prisma.subFieldRecommendation.findUnique({
        where: { slug: slugSubfield },
        include: {
            books: true
        }
    });

    if (!subFieldData) notFound();
    return subFieldData;
});


async function SubFieldRecommendationPage({ params: { slugSubfield } }: SubFieldPageProps) {
    const subFieldData = await getSubFieldRecommendation(slugSubfield);

    const bookLinks = subFieldData.books.map(book => ({
        text: book.englishTitle,
        id: book.englishTitle.replace(/\s+/g, '-').toLowerCase(),
    })) || [];

    const bookRecommendations = subFieldData.books.map((book, index) => (
        <BookRecommendation key={book.englishTitle} book={book} syllabus={book.syllabus || {}} priority={index === 0} />
    )) || [];

    return (
        <div>
            {/* <NavBar title={subFieldData.field} title2={subFieldData.subField} domain="www.wiki-science.com/" menuPath='./NavigationMenu'/> */}
            <main>
                <ContextSpace />
                <ArticleTitle topic={subFieldData.subField} />
                <LocalContextLinks links={bookLinks || []} />
                {bookRecommendations}
                <div className='globalSpace'></div>
                <div className='globalSpace'></div>
                <ScrollTopButton />
            </main>
        </div>
    );
}

export default SubFieldRecommendationPage;
