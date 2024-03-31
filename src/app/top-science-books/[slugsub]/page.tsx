import { PrismaClient } from '@prisma/client';
import NavBar from '@/components/NavbarContainer';
import ContextSpace from '@/components/books-components/ContextSpace';
import ArticleTitle from '@/components/books-components/ArticleTitle';
import LocalContextLinks from '@/components/books-components/LocalContextLinks';
import BookRecommendation from '@/components/books-components/BookRecommendation';
import { unstable_cache } from 'next/cache';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ScrollTopButton from '@/components/ScrollTopButton';
import { Book } from '@prisma/client'; // Import Ratings from Prisma schema


interface SubFieldPageProps {
    params: {
        slugsub: string;
    }
}

const prisma = new PrismaClient();

const getSubFieldRecommendation = unstable_cache(async (slugsub: string) => {
    const subFieldData = await prisma.subFieldRecommendation.findUnique({
        where: { slug: slugsub },
        include: {
            books: true
        }
    });

    if (!subFieldData) notFound();
    return subFieldData;
});


async function Page({ params: { slugsub } }: SubFieldPageProps) {
    const subFieldData = await getSubFieldRecommendation(slugsub);

    const bookLinks = subFieldData.books.map((book: { englishTitle: string; }) => ({
        text: book.englishTitle,
        id: book.englishTitle.replace(/\s+/g, '-').toLowerCase(),
    })) || [];

    const bookRecommendations = subFieldData.books.map((book, index) => (
        <BookRecommendation key={book.englishTitle} book={book} syllabus={book.syllabus || {}} priority={index === 0} />
    )) || [];

    return (
        <div>
            <NavBar title={subFieldData.field} title2={subFieldData.subField} domain="www.wiki-science.com/" menuPath='./NavigationMenu'/>
            <main>
                <ContextSpace />
                <ArticleTitle topic={subFieldData.subField || ''} />
                <LocalContextLinks links={bookLinks || []} />
                {bookRecommendations}
                <div className='globalSpace'></div>
                <div className='globalSpace'></div>
                <ScrollTopButton />
            </main>
        </div>
    );
}

export default Page;
