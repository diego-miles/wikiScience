import { PrismaClient } from '@prisma/client';
import NavBar from '@/components/NavbarContainer';
import ContextSpace from './components/ContextSpace';
import ArticleTitle from './components/ArticleTitle';
import LocalContextLinks from './components/LocalContextLinks';
import BookRecommendation from './components/BookRecommendation';
import styles from './page.module.css'
import ScrollTopButton from '@/components/ScrollTopButton'
import { notFound } from 'next/navigation';
import { cache } from 'react';


interface SubFieldPageProps {
    params: {
        sub: string;
    }
}

const prisma = new PrismaClient();


const getSubFieldRecommendation = cache(async (sub: string) => {
    const recommendations = await prisma.subFieldRecommendation.findUnique({
        where: { slug: sub },
        include: {
            books: {

            } 
        },
    });

    if (!recommendations) notFound();

    return recommendations;
});


// const getSubFieldRecommendation = async (sub: string) => {
//     const subFieldData = await prisma.subFieldRecommendation.findUnique({
//         where: { slug: sub },
//         include: {
//             books: true
//         }
//     });

//     if (!subFieldData) notFound();
//     return subFieldData;
// };


// const ScrollTopButton = dynamic(() => import('@/components/ScrollTopButton'), { ssr: false });
// const NavBar = dynamic(() => import('@/components/NavbarContainer'), { ssr: false });
// const LocalContextLinks = dynamic(() => import('./components/LocalContextLinks'), { ssr: false });


async function SubFieldRecommendationPage({ params: { sub } }: SubFieldPageProps) {

    const subFieldData = await getSubFieldRecommendation(sub);


    const bookLinks = subFieldData?.books?.map((book) => ({
        text: book.englishTitle,
        id: book.englishTitle.replace(/\s+/g, '-').toLowerCase(),
    })) || [];

    const bookRecommendations = subFieldData?.books?.map((book, index) => (
        <BookRecommendation key={book.englishTitle} book={book} syllabus={book.syllabus || {}} priority={index === 0} />
    )) || [];

    return (
        <div className={styles.wrapper}>
            <NavBar title={subFieldData?.field} title2={subFieldData?.subField} domain="www.wiki-science.com/" active={true} menuPath='./NavigationMenu'/>
            <main>
                <ContextSpace />
                <ArticleTitle topic={subFieldData?.subField} />
                <LocalContextLinks links={bookLinks} />
                {bookRecommendations}
                <div className='globalSpace'></div>
                <div className='globalSpace'></div>
                <ScrollTopButton />
            </main>
        </div>
    );
}

export default SubFieldRecommendationPage;
