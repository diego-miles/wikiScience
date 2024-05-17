import { PrismaClient } from '@prisma/client';
import NavBar from '@/components/navigation/NavbarContainer';
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
        slugsub: string;
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
    params: { slugsub },
}: ProductPageProps): Promise<Metadata> {
    const recommendations = await getSubFieldRecommendation(slugsub);

    const images = (recommendations?.books?.map((book) => ({
        url: `${formatTitleForAmazonImageURL(book.englishTitle)}.png` || '' 
    })) || []).filter(image => image.url !== null) as OGImage[];

    const keywords = recommendations?.books?.flatMap((book) => book.keywords || []) || [];
    const uniqueKeywords = Array.from(new Set(keywords));
    const description = `Explore our expertly curated and constantly updated list of the top science books on ${recommendations?.subField} for 2024. Discover groundbreaking works that delve into the universe's mysteries and the most significant scientific discoveries. These essential reads offer in-depth knowledge, insightful analysis, and innovative perspectives for both enthusiasts and scholars alike.`;

    return {
        title: `Best ${recommendations?.subField} books of all time (2024)` ,
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
        <BookRecommendation key={book.englishTitle} book={book}  priority={index === 0} />

    )) || [];

    return (
        <div>
            {/* <NavBar title={subFieldData.field} title2={subFieldData.subField} domain="www.wiki-science.com/" menuPath='./NavigationMenu'/> */}
            <main>
                <ContextSpace />
                <ArticleTitle topic={subFieldData.subField || ''} />
                <LocalContextLinks links={bookLinks || []} />
                <div className=''>
                    <div className=' mt-20 max-w-[75rem] mx-auto    w-full   rounded-2xl pt-4  '>
                        {bookRecommendations}
                    </div>
                </div>
                <div className='globalSpace'></div>
                <div className='globalSpace'></div>
                <ScrollTopButton />
            </main>
        </div>
    );
}

export default Page;
