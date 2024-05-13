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
        delay: stagger(0.3),
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
            className=" text-[#19252f] opacity-0 relative dark:text-white"
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

        <p className="font-mono mx-auto py-0 max-w-5xl tracking-wider  font-thin text-[3rem] leading-snug px-5">
          {renderWords()}
        </p>
    </div>
  );
};
