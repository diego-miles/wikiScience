"use client"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useState, useEffect } from 'react';
import QuestionMark from '@/components/QuestionMark';
import { generateSlug } from '@/utils/slugGenerator';

interface ContextData {
  slug: string;
  concept: string;
  formula?: string; 
  pronunciation?: string;
  definition: string | string[]; 
  references: { [key: string]: any };
  types: { [key: string]: any };
  createdAt: string;
  updatedAt: string;
}

interface ContextHoverCardProps {
  buttonText: string;
  children: React.ReactNode;
  questionMarkColor?: string;
}

export default function ContextHoverCard({ buttonText, children, questionMarkColor }: ContextHoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [contextData, setContextData] = useState<ContextData | null>(null);
  const slug = generateSlug(buttonText);
  const [error, setError] = useState<string | null>(null); // Add an error state

const fetchData = async () => {
  try {
    const response = await fetch(`/api/context/${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Context data fetched:", data);
    setContextData(data);
  } catch (error) {
    console.error("Error fetching context:", error);
    // Handle the error gracefully (e.g., display a message to the user)
  }
};

  const handleMouseEnter = () => {
    setIsHovered(true);
    fetchData();
  };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

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
        {isHovered && (
          <HoverCardContent className="min-w-[38rem] max-w-40 lg:min-w-[70rem] bg-background1 dark:bg-background1dark px-10 rounded-3xl border-4">
            <div className="max-h-[28rem] overflow-y-auto">
              <div className="space-y-1">
                <h4>{buttonText}</h4>
                {error ? (
                  <p>Error fetching context: {error}</p>
                ) : (
                  <div>
                    {contextData?.definition ? (
                      typeof contextData.definition === 'string' ? (
                        <p>{contextData.definition}</p>
                      ) : (
                        Array.isArray(contextData.definition) ? (
                          contextData.definition.map((parag, index) => (
                            <p key={index}>{parag}</p>
                          ))
                        ) : (
                          <p>Definition format not recognized</p>
                        )
                      )
                    ) : (
                      <p>No context available.</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </HoverCardContent>
        )}
      </HoverCard>
    </div>
  );
} 