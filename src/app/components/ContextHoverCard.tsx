"use client"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useState, useEffect } from 'react';
import QuestionMark from '@/components/QuestionMark';
import { generateSlug } from '@/utils/slugGenerator';
import {ContextDefinition} from '@prisma/client'


interface ContextHoverCardProps {
  buttonText: string;
  children: React.ReactNode;
  questionMarkColor?: string;
}

export default function ContextHoverCard({ buttonText, children, questionMarkColor }: ContextHoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [contextData, setContextData] = useState<ContextDefinition | null>(null);
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
    <div className="cursor-pointer">
      <HoverCard>
        <HoverCardTrigger
          asChild
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative w-fit mr-4 h-fit">
            {children}
            <div className="absolute -top-[.1rem] -right-[.8rem]">
              <QuestionMark color={questionMarkColor} />
            </div>
          </div>
        </HoverCardTrigger>
        {isHovered &&   (
          <HoverCardContent className="w-[36rem] lg:min-w-[50rem] bg-background1 dark:bg-background1dark px-10 rounded-3xl border-4">
            <div className="scroll-auto">
              <div className="space-y-1">
                <h4>{buttonText}</h4>
                <div>
                  {contextData?.definition.map((parag, index) => (
                    <p key={index}>{parag}</p>
                  ))}
                  {/* <span className="text-xs text-muted-foreground">
                    Joined Date: {contextData.formula}
                  </span> */}
                </div>
              </div>
            </div>
          </HoverCardContent>
        )}
      </HoverCard>
    </div>
  );
}
