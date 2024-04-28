import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")


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
        'xs': '.75rem', // Tamaño de fuente extra pequeño
        'sm': '1.4rem', // Tamaño de fuente pequeño
        'base': '1.5rem', // Tamaño de fuente base
        'lg': '1.6rem', // Tamaño de fuente grande
        'xl': '1.8rem', // Tamaño de fuente extra grande
        '2xl': '2rem', // Tamaño de fuente 2x grande
        '3xl': '2.3rem', // Tamaño de fuente 3x grande
        '4xl': '2.4rem', // Tamaño de fuente 4x grande
        '5xl': '2.7rem', // Tamaño de fuente 5x grande
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config