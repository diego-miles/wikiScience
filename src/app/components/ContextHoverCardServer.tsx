// import { getContext } from './ContextGetData';
// import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

// import { generateSlug } from "@/utils/slugGenerator";




// export default async function ContextHoverCardServer({ buttonText }: { buttonText: string }) {
//   const contextData = await getContext(generateSlug(buttonText));

//   return (
//     <HoverCardContent className="w-[36rem] lg:min-w-[50rem] bg-background1 dark:bg-background1dark px-10 rounded-3xl border-4 ">
//       <div className="scroll-auto">
//         <div className="space-y-1">
//           <h4 className="">{buttonText}</h4>
//           <div className="">
//             {contextData?.definition.map((parag) => (<p key={parag}>{parag}</p>))}
//             <span className="text-xs text-muted-foreground"></span>
//           </div>
//         </div>
//       </div>
//     </HoverCardContent>
//   );
// }


