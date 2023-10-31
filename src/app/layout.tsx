import type { Metadata } from 'next'
import { Crimson_Text, Montserrat } from 'next/font/google'
import './globals.css'

const crimson_text = Crimson_Text({
  weight: ['400', '600', '700'],
  style: 'italic',
  subsets: ['latin']
})

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800','900'],
  subsets: ['latin']
})

export { crimson_text, montserrat }
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${crimson_text.className} ${montserrat.className}`}>
        {children}
      </body>
    </html>
  )
}
