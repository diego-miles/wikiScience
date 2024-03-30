import { PrismaClient } from '@prisma/client';
import NavBar from '@/components/NavbarContainer';
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


// const formatTitleForURL = (title: string) => {
//     return title
//         .replace(/&/g, "%26")
//         .replace(/[^a-zA-Z0-9 ,'&-]/g, "")
//         .replace(/ /g, "+");
// };

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

// export async function generateMetadata({ params: { subfield } }: SubFieldPageProps): Promise<Metadata> {
//     const subFieldData = await getSubFieldRecommendation(subfield);

//     // const images = subFieldData.books.map(book => ({
//     //     url: `${formatTitleForURL(book.englishTitle)}.png`
//     // }));

//     const keywords = subFieldData?.books?.flatMap(book => book.keywords || []);
//     const uniqueKeywords = Array.from(new Set(keywords));
//     const description = `Dive into the internet curated, often updated, list of the top science books on ${subFieldData?.subField}. From groundbreaking discoveries to the fundamentals of the universe, explore books that have shaped our understanding of science`;

//     return {
//         title: subFieldData?.subField,
//         description: description,
//         // openGraph: {
//         //     // images: images
//         // },
//         keywords: uniqueKeywords.join(', ')
//     };
// }

async function SubFieldRecommendationPage({ params: { slugSubfield } }: SubFieldPageProps) {
    const subFieldData = await getSubFieldRecommendation(slugSubfield);

    const bookLinks = subFieldData?.books?.map(book => ({
        text: book.englishTitle,
        id: book.englishTitle.replace(/\s+/g, '-').toLowerCase(),
    })) || [];

    const bookRecommendations = subFieldData?.books?.map((book, index) => (
        <BookRecommendation key={book.englishTitle} book={book} syllabus={book.syllabus || {}} priority={index === 0} />
    )) || [];

    return (
        <div>
            
            <NavBar title={subFieldData?.field} title2={subFieldData?.subField} domain="www.wiki-science.com/" active={true} menuPath='./NavigationMenu'/>
            <main>
                <ContextSpace />
                <ArticleTitle topic={subFieldData?.subField} />
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
