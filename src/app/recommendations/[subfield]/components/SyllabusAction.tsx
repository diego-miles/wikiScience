// "use server"
// import prisma from "@/lib/db/prisma"
// import BookRecommendation from "./BookRecommendation"
// import Image from "next/image"



// export default async function SyllabusAction(topic: string) {
//     const recommendations = await prisma.recommendation.findUnique({
//         where : { slug : topic}
//     })
//     const bookRecommendations = recommendations?.books?.map((book) => 
//         <BookRecommendation key={book.englishTitle} book={book} />)
//     const cleanTitle = (titl: string) => {
//         return titl.replace(/[^a-zA-Z0-9 ]/g, "").replace(/ /g, "%20");
//     };

//     return(
//         <div>
//             <figure>
//                 <Image
//                 src={cleanTitle(topic)}
//                 alt={`temario ${bookRecommendations}`}
//                 fill
//                 style={{ objectFit: 'contain' }}
//                 priority={false}
//                 quality={50}
//                 onError={(e) => console.error(`Error al cargar imagen: ${(e.target as HTMLImageElement).src}`)}
//                 />
//             </figure>
//         </div>
//     );
// };






// function setLoadedImages(arg0: (prevLoaded: any) => any) {
//     throw new Error("Function not implemented.");
// }

