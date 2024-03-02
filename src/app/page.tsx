import NavBar from './top-science-books/components/navBar/NavBarContainer';// import Link from "next/link";
import styles from './page.module.css'
import Head from 'next/head';



export default function Home() {
  return (
    <>
    <Head>
          <meta name="google-site-verification" content="WKav3lHrz5lYXdW6XkvigG4CQArrzKtObiBAdGOzNj0" />
      </Head>    
      <NavBar />
      <main className={styles.home}>
      </main>
    </>
  )
}
