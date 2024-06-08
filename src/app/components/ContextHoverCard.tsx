"use client"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useState, useEffect, ReactNode } from 'react';
import QuestionMark from '@/components/QuestionMark';
import { generateSlug } from '@/utils/slugGenerator';
import { contextDefinition } from '@/db/schema/elements';




// interface contextData {
//   definition: string[];

// }

interface ContextHoverCardProps {
  buttonText: string;
  children: React.ReactNode;
  questionMarkColor?: string;
}

export default function ContextHoverCard({ buttonText, children, questionMarkColor }: ContextHoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [contextData, setContextData] = useState<typeof contextDefinition | null>(null);
  const slug = generateSlug(buttonText);

  useEffect(():void => {
    
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/context/${slug}`);
    
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Context data fetched:', data);
      setContextData(data);
    } catch (error) {
      console.error('Error fetching context:', error);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    fetchData();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="cursor-pointer w-fit">
      <HoverCard>
        <HoverCardTrigger
          asChild
          onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          <div className="relative w-fit mr-4 h-fit">
            {children}
            <div className="absolute -top-[.1rem] -right-[.8rem]">
              <QuestionMark color={questionMarkColor} />
            </div>
          </div>
        </HoverCardTrigger>
        {isHovered &&   (
<HoverCardContent className="min-w-[38rem] max-w-40 lg:min-w-[70rem] bg-background1 dark:bg-background1dark px-10 rounded-3xl border-4">
  <div className="max-h-[28rem] overflow-y-auto">
    <div className="space-y-1">
      <h4>{buttonText}</h4>
      <h4>x</h4>
      <div>

          {Array.isArray(contextData?.definition) && contextData.definition.length > 0 && (
            <p className="text-2xl font-normal font-serif">
               {contextData.definition.join(', ')}
            </p>
          )}

<p>
        {contextData?.definition as ReactNode }
</p>
        {/* {contextData?.definition.map((parag, index) => (
          <p key={index}>{parag}</p>
        ))} */}
      </div>
    </div>
  </div>
</HoverCardContent>

        )}
      </HoverCard>
    </div>
  );
}
