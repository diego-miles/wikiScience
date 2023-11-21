import NavBarContainer from "@/app/recommendations/components/navBar/NavBarContainer";
// import Link from "next/link";
import styles from './page.module.css'

export default function Home() {
  return (
    <>    
      <NavBarContainer />
      <main className={styles.home}>
      </main>
    </>
  )
}
