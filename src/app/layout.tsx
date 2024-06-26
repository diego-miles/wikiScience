import type { Metadata } from 'next'
import { Noto_Sans_Georgian, Noto_Serif_Georgian, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Footer from './Footer'
import { Analytics } from '@vercel/analytics/react';
// import { ConsentProvider } from '../contexts/ConsentContext';
// import ConsentProvider  from '../contexts/ClientSideWrapper';
// import Analytics from './GoogleAnalytics'
import dynamic from 'next/dynamic';
import GoogleAdsScript from './GoogleAdsScript'
// import React, { Suspense } from 'react';

import { cn } from "../lib/utils"
import { ThemeProvider } from "./ThemProvider"
import { GridBackgroundDemo } from './GridBackground'
// import NavBar from '@/components/navigation/NavbarContainer';
import Head from 'next/head';
import Script from 'next/script'
import { CSPostHogProvider } from './_analytics/provider';
import { PHProvider } from './providers'



const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})


const noto_sans_georgian = Noto_Sans_Georgian({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-noto-sans-georgian',
  display: 'swap'
})


const noto_serif_georgian = Noto_Serif_Georgian({
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-noto-serif-georgian',
  subsets: ['latin'],
  display: 'swap'
})

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  display: 'swap'
})





export const metadata: Metadata = {
  // metadataBase: new URL('https://storage.cloud.google.com/bestbooks/covers/'),
  title: 'Wiki Science',
  description: 'A compendium of scientific human knowladge',
}

const GTM_ID = process.env.GTM_ID;
const GTM_ID_ANA = process.env.GTM_ID_ANA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const GoogleAdsScript = dynamic(() => import('./GoogleAdsScript'), { ssr: false });
  // const CookieConsent = dynamic(() => import('./CookieConsent'), { ssr: false });
  const NavBar = dynamic(() => import('@/components/navigation/NavbarContainer'), { ssr: false });

  
  return (
<PHProvider>
  
        <html lang="en">
        {/* <head >
      <meta name="google-adsense-account" content="ca-pub-6831545317289734"></meta>

        </head> */}
   

    {/* <Script   async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6831545317289734" crossOrigin='anonymous' strategy="afterInteractive"></Script>
 */}


      <body
        className={cn(
          "min-h-lvh font-sans antialiased bg-grid-[#eaeef4] dark:bg-none ",
          noto_sans_georgian.variable,
          noto_serif_georgian.variable,
          ibm_plex_mono.variable,
        )}
      >



  <Script src="https://alwingulla.com/88/tag.min.js" crossOrigin='anonymous' data-zone="72210" async data-cfasync="false"></Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <GridBackgroundDemo />


        {/* <CookieConsent /> */}
        {/* <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript> */}
          <NavBar></NavBar>
          {children}
        <Analytics />;
        {/* <ScrollTopButton /> */}
        <Footer />
        {/* <Analytics /> */}
        {/* <GoogleAdsScript /> */}

        {/* <Script
            id="gtm-script"
            strategy="worker"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          /> */}
        {/* <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID_ANA}`}
            strategy="afterInteractive"
            async
          /> */}
        {/* <Script
            id="google-analytics-script"
            strategy="afterInteractive"
          >
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTM_ID_ANA}');
            `}
          </Script> */}

        </ThemeProvider>
      </body>
    </html>
</PHProvider>


  )
}