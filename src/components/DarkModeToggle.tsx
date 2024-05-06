"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch" // Import your custom switch component

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const handleThemeChange = (theme: React.SetStateAction<string>) => {
    setTheme(theme)
  }

  const handleMenuItemClick = (theme: React.SetStateAction<string>) => {
    handleThemeChange(theme)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
          {/* Paosition the Switch based on the current theme */}

            <Switch
              className="bg-[#3c4a5a]"
              checked={theme === "dark"}
              onChange={() =>
                handleThemeChange(theme === "dark" ? "light" : "dark")
              }
            />
      </DropdownMenuTrigger>
      <Button variant="outline" size="icon">
        {theme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleMenuItemClick("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMenuItemClick("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleMenuItemClick("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
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
