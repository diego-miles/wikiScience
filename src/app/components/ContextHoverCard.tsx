import { CalendarDays } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Suspense } from 'react';
import { generateSlug } from "@/utils/slugGenerator";
import { getContext } from './ContextGetData';
import QuestionMark from '@/components/QuestionMark';

interface ContextData {
  description: string;
  joinedDate: string;
}

interface ContextHoverCardProps {
  buttonText?: string;
  children: React.ReactNode;
  questionMarkColor?: string;
}

export default async function ContextHoverCard({ buttonText, children, questionMarkColor }: ContextHoverCardProps) {
  const contextData = await getContext(generateSlug(buttonText || ""));

  return (
    <div>
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="relative  ">
            {children}
            <div className="absolute -top-1 -right-[.1rem]">
            {  <QuestionMark  color={questionMarkColor} />}
            </div>
          </div>
        </HoverCardTrigger>
        <Suspense fallback={<p>Loading feed...</p>}>
          <HoverCardContent className="w-[36rem] lg:min-w-[50rem] bg-background1 dark:bg-background1dark px-10 rounded-3xl border-4 ">
            <div className="scroll-auto">
              <div className="space-y-1">
                <h4 className="">{buttonText}</h4>
                <div className="">
                  {contextData?.definition.map((parag) => (<p key={parag}>{parag}</p>))}
                  {/* <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "} */}
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
