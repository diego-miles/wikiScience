import NavBarContainer from "@/NavBarContainer";
// import Link from "next/link";

export default function Home() {
  return (
    <body>    
        <NavBarContainer title="Home" menuLink="/" profileLink="/"/>
      <main>
        <h1>Best books on Science</h1>
      </main>
    </body>
  )
}
