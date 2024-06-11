"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `A compendium of scientific human knowledge.`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words}  className="text-base dark:text-white" />;
}
