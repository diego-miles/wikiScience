"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch" 

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex">
      <Switch
        checked={theme === 'dark'} 
        onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
        disabled={false} 
        aria-readonly={true} 
      />

        <Moon className="h-[1.9rem] w-[1.9rem] ml-2 pb-1 rotate-90 scale-100 transition-all dark:rotate-0 dark:scale-100 text-[#90b4dd]" />

    </div>
  )
}



//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" size="icon">
//           <Moon className="h-[2.5rem] w-[2.5rem] p-[.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           {/* <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
