// "use client";

// import * as React from "react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { type ThemeProviderProps } from "next-themes/dist/types";

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   React.useEffect(() => {
//     if (process.env.NODE_ENV !== 'production') {
//       const root = document.getElementById('__next');
//       if (root && root.hasAttribute('data-reactroot')) {
//         console.warn('Hydration warning detected.');
//       }
//     }
//   }, []);

//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
// }
