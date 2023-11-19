import prisma from '@/lib/db/prisma'; 
import NavBar from './../components/navBar/NavBarContainer';
import ContextSpace from './components/ContextSpace';
import ArticleTitle from './components/ArticleTitle';
import LocalContextLinks from './components/LocalContextLinks';
import BookRecommendation from './components/BookRecommendation';
import { cache } from "react";
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import styles from './page.module.css'

interface SubFieldPageProps {
    params: {
        subfield: string;
    }
}




const getSubFieldRecommendation = cache(async (subfield: string) => {
    const subFieldData = await prisma.subFieldRecommendation.findUnique({
        where: { slug: subfield }
    });
    if (!subFieldData) notFound();
    return subFieldData;
});


// export async function generateMetadata(
//     {params:{subfield}}: SubFieldPageProps): Promise<Metadata>{
//         const subFieldData = await getSubFieldRecommendation(subfield);
//         return {
//             title: subFieldData?.slug,
//             // openGraph: {
//             //     images: [{url: subFieldData?.books[0].coverImage}]
//             // }
//         }
//     }

async function SubFieldRecommendationPage({params:{subfield}}: SubFieldPageProps) {
    const subFieldData = await getSubFieldRecommendation(subfield);

    const bookLinks = subFieldData?.books?.map(book => ({
        text: book.englishTitle,
        id: book.englishTitle.replace(/\s+/g, '-').toLowerCase()
    }));


    const bookRecommendations = subFieldData?.books?.map((book, index) => 
        <BookRecommendation key={book.englishTitle} book={book} priority={index === 0} />
    );

    return (
        <div className={styles.wrapper}>
            <NavBar title={subFieldData?.field} title2={subFieldData?.subField} domain="http://localhost:3000" />
            <main>
                <ContextSpace />
                <ArticleTitle topic={subFieldData?.subField} />
                <LocalContextLinks links={bookLinks || []} />
                {/* <div className='globalSpace'></div> */}
                {/* <Summary summary={subFieldData?.subFieldSummary} /> */}
                {bookRecommendations}
                <div className='globalSpace'></div>
                <div className='globalSpace'></div>
            </main>
        </div>
    );
}

export default SubFieldRecommendationPage;
