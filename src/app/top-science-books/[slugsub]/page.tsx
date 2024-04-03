import { PrismaClient } from '@prisma/client';
import NavBar from '@/components/NavbarContainer';
import ContextSpace from '@/components/books-components/ContextSpace';
import ArticleTitle from '@/components/books-components/ArticleTitle';
import LocalContextLinks from '@/components/books-components/LocalContextLinks';
import BookRecommendation from '@/components/books-components/BookRecommendation';
// import { unstable_cache } from 'next/cache';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ScrollTopButton from '@/components/ScrollTopButton';
import { Book } from '@prisma/client'; // Import Ratings from Prisma schema
import { unstable_cache } from 'next/cache';

interface SubFieldPageProps {
    params: {
        slugsub: string;
    }
}


interface ProductPageProps {
    params: {
        slug: string;
    }
}

type OGImage = {
    url: string;
};



const prisma = new PrismaClient();





const getSubFieldRecommendation = unstable_cache(async (slugsub: string) => {
    const subFieldData = await prisma.subFieldRecommendation.findUnique({
        where: { slug : slugsub },
        include: {
            books: true
        }
    });

    if (!subFieldData) notFound();
    return subFieldData;
});



const formatTitleForAmazonImageURL = (title: string) => {
  return title
    .replace(/[^a-zA-Z0-9 ,'&-]/g, "")
    .replace(/&/g, "%26")
    .replace(/ /g, "+");
};



export async function generateMetadata({
    params: { slug },
}: ProductPageProps): Promise<Metadata> {
    const recommendations = await getSubFieldRecommendation(slug);




    const images = (recommendations?.books?.map((book) => ({
        url: `${formatTitleForAmazonImageURL(book.englishTitle)}.png` || '' 
    })) || []).filter(image => image.url !== null) as OGImage[];

    const keywords = recommendations?.books?.flatMap((book) => book.keywords || []) || [];
    const uniqueKeywords = Array.from(new Set(keywords));
    const description = `Dive into the internet curate, often updated, list of the top science books on ${recommendations?.subField}. From groundbreaking discoveries to the fundamentals of the universe, explore books that have shaped our understanding of science`;

    return {
        title: `Explore our expertly curated and constantly updated list of the top science books on ${recommendations?.subField} for 2024. Discover groundbreaking works that delve into the universe's mysteries and the most significant scientific discoveries. These essential reads offer in-depth knowledge, insightful analysis, and innovative perspectives for both enthusiasts and scholars alike.`,
        description: description,
        openGraph: {
            images: images,
        },
        keywords: uniqueKeywords.join(', '),
    };
}






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
