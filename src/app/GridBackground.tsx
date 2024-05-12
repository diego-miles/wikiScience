import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="-z-10 h-full w-full dark:bg-background1dark  bg-background1  dark:bg-grid-[#1b2e3f] bg-grid-black/[0.04] absolute flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="h-full absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background1dark bg-background1 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p> */}
    </div>
  );
}
