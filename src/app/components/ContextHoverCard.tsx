
// "use client"
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
// import { Suspense, useState, useEffect } from 'react';
import { Suspense } from 'react';
import { generateSlug } from "@/utils/slugGenerator";
import {getContext} from './ContextGetData';
import QuestionMark from '@/components/QuestionMark'

interface ContextData {
  description: string;
  joinedDate: string;
}

interface ContextHoverCardProps {
  buttonText: string;
}

export default async function ContextHoverCard({ buttonText }: ContextHoverCardProps) {
  const contextData = await getContext(generateSlug(buttonText))


  return (
    <div>


    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">{buttonText}         <QuestionMark color='#ffffff' ></QuestionMark>
</Button>
      </HoverCardTrigger>
      <Suspense fallback={<p>Loading feed...</p>}>
        <HoverCardContent className="lg:min-w-[50rem] bg-background1 dark:bg-background1dark px-10 rounded-3xl border-4">

            <div className="scroll-auto">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">{buttonText}</h4>
                <div className="">
                  {contextData?.definition.map((parag) => (<p key={parag}>{parag}</p>) ) }
                <p className="text-sm"></p>
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    {/* Joined {contextData.joinedDate} */}
                  </span>
                </div>
              </div>
            </div>
        </HoverCardContent>
      </Suspense>
    </HoverCard>
        </div>

  );
}







// import React, { useState, useEffect } from 'react';
// import { CalendarDays } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from '@/components/ui/hover-card';
// import { PrismaClient } from '@prisma/client';
// import { ContextDefinition } from '@prisma/client';

// interface HoverCardDemoProps {
//   slug: string;
// }
// const prisma = new PrismaClient();

// export function ContextHoverCard({ slug }: HoverCardDemoProps) {
//   const [context, setContext] = useState<ContextDefinition | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await prisma.contextDefinition.findUnique({
//           where: { slug },
//         });
//         setContext(result);
//       } catch (error) {
//         console.error('Error fetching context definition:', error);
//       }
//     };

//     fetchData();
//   }, [slug]);

//   if (!context) return null; // Or some loading indicator

//   return (
//     <HoverCard>
//       <HoverCardTrigger asChild>
//         <Button variant="link">{context.concept}</Button>
//       </HoverCardTrigger>
//       <HoverCardContent className="w-80 bg-background1 dark:bg-background1dark">
//         <div className="flex flex-col space-y-4">
//           <div className="space-y-1">
//             <h4 className="text-sm font-semibold">{context.concept}</h4>
//             {context.formula && (
//               <p className="text-sm">
//                 <strong>Formula: </strong>{context.formula}
//               </p>
//             )}
//             <div>
//               {context.definition.map((def, index) => (
//                 <p key={index} className="text-sm">{def}</p>
//               ))}
//             </div>
//             <div className="space-y-2">
//               {context.types.map((type, index) => (
//                 <div key={index} className="text-sm">
//                   {type.type && <strong>Type: </strong>}{type.type}<br />
//                   {type.description && <strong>Description: </strong>}{type.description}<br />
//                   {type.formula && <strong>Formula: </strong>}{type.formula}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="flex items-center pt-2">
//             <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
//             <span className="text-xs">
//               Joined December 2021
//             </span>
//           </div>
//         </div>
//       </HoverCardContent>
//     </HoverCard>
//   );
// }
