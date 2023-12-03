import type { Metadata } from 'next'
import { Crimson_Text, Montserrat, Nunito_Sans } from 'next/font/google'
import './globals.css'
import './Footer'
import Footer from './Footer'
import Analytics from './analytics'
import { Suspense } from 'react'
import { Analytics as AnalyticsVercel } from '@vercel/analytics/react';
import Script from 'next/script'
// import NavBarContainer from '@/components/NavBarContainer'


const crimson_text = Crimson_Text({
  weight: ['400', '600', '700'],
  // style: 'italic',
  subsets: ['latin']
})

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})





export { crimson_text, montserrat }
export const metadata: Metadata = {
  metadataBase: new URL('https://storage.cloud.google.com/bestbooks/covers/'),
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
      <Script 
         async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6831545317289734" crossOrigin="anonymous"
      />
      <body className={`${crimson_text.className} ${montserrat.className}`}>
      {/* <NavBarContainer title="" profileLink='' menuLink=''/> */}
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
