"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate]);

const renderWords = () => {
  return (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => {
        return (
          <motion.span
            key={word + idx}
            className="dark:text-white text-[#19252f] opacity-0 relative"
            // style={{
            //   // WebkitTextStroke: '2px #0064fa', // Grosor y color del contorno del texto
            //   textShadow: '-2px 2px 0px rgb(135, 225, 244)', // Sombra en el lado izquierdo para simular efecto de profundidad
            // }}
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </motion.div>
  );
};




  return (
    <div className={cn("font-normal", className)}>
      <div className="mt-2  ">
        <div className=" mx-auto py-0 max-w-5xl   dark:text-white font-extrabold text-5xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
