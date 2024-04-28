"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `A next-generation educational platform. Powered by AI.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words}  />;
}
