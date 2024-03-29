import { PrismaClient } from '@prisma/client';
import NavBar from '@/components/NavbarContainer';
import ContextSpace from './components/ContextSpace';
import ArticleTitle from './components/ArticleTitle';
import LocalContextLinks from './components/LocalContextLinks';
import BookRecommendation from './components/BookRecommendation';
import styles from './page.module.css'
import ScrollTopButton from '@/components/ScrollTopButton'

interface SubFieldPageProps {
    params: {
        sub: string;
    }
}

const prisma = new PrismaClient();

const formatTitleForURL = (title: string) => {
    return title
        .replace(/&/g, "%26") // Replace '&' with '%26'
        .replace(/[^a-zA-Z0-9 ,'&-]/g, "") // Remove characters except alphanumerics, space, comma, single quote, and hyphen
        .replace(/ /g, "+"); // Replace spaces with '%20'
};

const getSubFieldRecommendation = async (sub: string) => {
    const subFieldData = await prisma.subFieldRecommendation.findUnique({
        where: { slug: sub },
        include: {
            books: {

            }
        }
    });

    if (!subFieldData) throw new Error('SubField data not found');
    return subFieldData;
};

async function SubFieldRecommendationPage({ params: { sub } }: SubFieldPageProps) {
    let subFieldData;
    try {
        subFieldData = await getSubFieldRecommendation(sub);
    } catch (error) {
        // Handle the error (e.g., display a message or redirect)
        console.error(error);
        return <div>Error loading subfield data</div>;
    }

    const bookLinks = subFieldData.books.map(book => ({
        text: book.englishTitle,
        id: book.englishTitle.replace(/\s+/g, '-').toLowerCase()
    }));

    const bookRecommendations = subFieldData.books.map((book, index) =>
        <BookRecommendation key={book.englishTitle} book={book} priority={index === 0} syllabus={book.syllabus} />
    );

    return (
        <div className={styles.wrapper}>
            <NavBar title={subFieldData.field} title2={subFieldData.subField} domain="www.wiki-science.com/" active={true} menuPath='./NavigationMenu'/>
            <main>
                <ContextSpace />
                <ArticleTitle topic={subFieldData.subField} />
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
