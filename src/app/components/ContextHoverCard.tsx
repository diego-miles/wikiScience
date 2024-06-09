"use client"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useState } from 'react';
import QuestionMark from '@/components/QuestionMark';
import { generateSlug } from '@/utils/slugGenerator';

interface ContextHoverCardProps {
  buttonText: string;
  children: React.ReactNode;
  questionMarkColor?: string;
}

export default function ContextHoverCard({ buttonText, children, questionMarkColor }: ContextHoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [contextData, setContextData] = useState<any>(null);
  const slug = generateSlug(buttonText);

const fetchData = async () => {
    const endpoint = `/api/${slug}`;
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseText = await response.text();
        console.log('Raw response:', responseText);
        const data = JSON.parse(responseText);
        console.log('Context data fetched:', data);
        setContextData(data);
    } catch (error) {
        console.error('Error fetching context:', error);
    }
};

const handleMouseEnter = (event: { preventDefault: () => void; }) => {
  event.preventDefault(); // This will now work correctly
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
          onMouseLeave={handleMouseLeave} // Added handleMouseLeave to reset hover state
        >
          <div className="relative w-fit mr-4 h-fit">
            {children}
            <div className="absolute -top-[.1rem] -right-[.8rem]">
              <QuestionMark color={questionMarkColor} />
            </div>
          </div>
        </HoverCardTrigger>
        {isHovered && (
          <HoverCardContent className="min-w-[38rem] max-w-40 lg:min-w-[70rem] bg-background1 dark:bg-background1dark px-10 rounded-3xl border-4">
            <div className="max-h-[28rem] overflow-y-auto">
              <div className="space-y-1">
                <h4>{buttonText}</h4>
                <div>
                  {contextData?.definition ? (
                    Array.isArray(contextData.definition) ? (
                      contextData.definition.map((parag: any, index: any) => (
                        <p key={index}>{parag}</p>
                      ))
                    ) : (
                      <p>{contextData.definition}</p>
                    )
                  ) : (
                    <p>No context available.</p>
                  )}
                </div>
              </div>
            </div>
          </HoverCardContent>
        )}
      </HoverCard>
    </div>
  );
}
