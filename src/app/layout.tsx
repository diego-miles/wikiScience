import type { Metadata } from 'next'
import { Crimson_Text, Montserrat } from 'next/font/google'
import './globals.css'
import './Footer'
import Footer from './Footer'
import Analytics from './analytics'
import { Suspense } from 'react'
import { AnalyticsVercel } from '@vercel/analytics/react';


const crimson_text = Crimson_Text({
  weight: ['400', '600', '700'],
  style: 'italic',
  subsets: ['latin']
})

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']


})

export { crimson_text, montserrat }
export const metadata: Metadata = {
  title: 'Wikiscience',
  description: 'Compendium of scientific human knowladge',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${crimson_text.className} ${montserrat.className}`}>
        <Suspense>
            <Analytics />
        </Suspense>
        {children}
        <AnalyticsVercel/>
        {/* <ScrollTopButton /> */}
        <Footer />
      </body>
    </html>
  )
}
