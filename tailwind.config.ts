import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")

const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 



const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans-georgian)", ...fontFamily.sans],
        serif: ["var(--font-noto-serif-georgian)", ...fontFamily.serif],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

      },
      colors: {
        h1: 'var(--color-h1)',
        h2: 'var(--color-h2)',
        h3: 'var(--color-h3)',
        h4: 'var(--color-h4)',
        h5: 'var(--color-h5)',
        p: 'var(--color-p)',
        strong: 'var(--color-strong)',
        a: 'var(--color-a)',
        a2: 'var(--color-a2)',
        accent1: 'var(--color-accent1)',
        accent2: 'var(--color-accent2)',
        
        accent3: 'var(--color-accent3)',
        gold: 'var(--color-gold)',
        background1: 'var(--color-background1)',
        background1dark: 'var(--color-background1-dark)',

        background2: 'var(--color-background2)',
        background3: 'var(--color-background3)',
        border: 'var(--color-border)',
        button: 'var(--color-button)',
        menu: 'var(--color-menu)',
        span: 'var(--color-span)',
        dark: 'var(--color-dark)',
        light: 'var(--color-light)',
        active: 'var(--color-active)',
        'soft-blue': 'var(--color-soft-blue)',
        'soft-green': 'var(--color-soft-green)',
        'green-text': 'var(--color-green-text)',
        'darkgreen-text': 'var(--color-darkgreen-text)',
      },
      fontSize: {
        '2xs': '1.05rem', // Tamaño de fuente extra pequeño
        'xs': '1.3rem', // Tamaño de fuente extra pequeño
        'sm': '1.4rem', // Tamaño de fuente pequeño
        'base': '1.5rem', // Tamaño de fuente base
        'lg': '1.6rem', // Tamaño de fuente grande
        'xl': '1.8rem', // Tamaño de fuente extra grande
        '2xl': '2rem', // Tamaño de fuente 2x grande
        '3xl': '2.3rem', // Tamaño de fuente 3x grande
        '4xl': '2.6rem', // Tamaño de fuente 4x grande
        '5xl': '2.9rem', // Tamaño de fuente 5x grande
        '6xl': '3rem', // Tamaño de fuente 6x grande
      },
      
            lineHeight: {
        'tight': "1.25", // Puedes ajustar estos valores según tus necesidades
        'normal': "1.5",
        'relaxed': "1.75",
        'loose': "2",
      },
      screens: {
        'sm': '480px',      
        'md': '768px',      
        'lg': '768px',     
        'xl': '768px',     
        '2xl': '768px',   
        '3xl': '768px',   
        '4xl': '768px',   
      },
      
    container: {
      center: true,
      padding: '2rem',
      screens: {
        "sm": '600px',
        "md": '728px',
        "lg": '984px',
        "xl": '1000px',
        '2xl': '1240px',
      }
    }

    }
  },
  plugins: [require("tailwindcss-animate"  ),
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config

export default config