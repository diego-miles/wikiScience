// IconToggle.tsx

import React from "react";
import { Moon, Sun } from "lucide-react";

interface IconToggleProps {
  isDark: boolean;
}

const IconToggle: React.FC<IconToggleProps> = ({ isDark }) => {
  return (
    <>
      {isDark ? (
        <Moon className="h-[1.5rem] w-[1.5rem] rotate-90 scale-100 transition-all dark:rotate-0 dark:scale-100 text-white" />
      ) : (
        <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100 text-black" />
      )}
    </>
  );
}

export default IconToggle;
