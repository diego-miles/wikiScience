import type { Metadata } from 'next'
import { Crimson_Text, Montserrat, Nunito_Sans } from 'next/font/google'
import './globals.css'
import './Footer'
import Footer from './Footer'
// import Analytics from './analytics'
import { Suspense } from 'react'
import { Analytics as AnalyticsVercel } from '@vercel/analytics/react';
import Script from 'next/script'
import dynamic from 'next/dynamic'
// import NavBarContainer from '@/components/NavBarContainer'
import GoogleAdsScript from './GoogleAdsScript';

const crimson_text = Crimson_Text({
  weight: ['400', '600', '700'],
  // style: 'italic',
  subsets: ['latin']
})

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

const Analytics = dynamic(() => import('./analytics'), { suspense: true });



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
      <body className={`${crimson_text.className} ${montserrat.className}`}>
        <iframe 
            src="https://www.googletagmanager.com/ns.html?${GTM_ID}"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
        {/* <NavBarContainer title="" profileLink='' menuLink=''/> */}
        {children}
        <AnalyticsVercel />
        {/* <ScrollTopButton /> */}
        <Footer />
        <Suspense fallback={<div>Loading...</div>}>
          <Analytics />
        </Suspense>
          <GoogleAdsScript/>
      </body>
    </html>
  )
}
