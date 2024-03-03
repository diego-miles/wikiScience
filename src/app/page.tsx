import NavBar from './top-science-books/components/navBar/NavBarContainer';// import Link from "next/link";
import styles from './page.module.css'
import Head from 'next/head';
import data from '@/data';
import { ScienceFieldsMenu } from './top-science-books/ScienceFieldsMenu';




export default function Home() {
  return (
    <>
    <Head>
          <meta name="google-site-verification" content="WKav3lHrz5lYXdW6XkvigG4CQArrzKtObiBAdGOzNj0" />
      </Head>    
      <NavBar />
      <main className={styles.home}>
          <h1>Top Science Books</h1>
          <p>Delve into our community-curated anthology of science literature. From foundational principles to cutting-edge theories, embark on a journey to master complex scientific concepts.</p>
          <ScienceFieldsMenu data={data}/>
      </main>
    </>
  )
}
