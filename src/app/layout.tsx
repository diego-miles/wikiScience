
import type { Metadata } from 'next'
import { Noto_Sans_Georgian, Noto_Serif_Georgian } from 'next/font/google'
import './globals.css'
import Footer from './Footer'
import { Analytics as AnalyticsVercel } from '@vercel/analytics/react';
import Script from 'next/script'
// import { ConsentProvider } from '../contexts/ConsentContext';
// import ConsentProvider  from '../contexts/ClientSideWrapper';
// import Analytics from './GoogleAnalytics'
import dynamic from 'next/dynamic';
// import GoogleAdsScript from './GoogleAdsScript.js'
// import React, { Suspense } from 'react';



const noto_sans_georgian = Noto_Sans_Georgian({
  // weight: ['400','500', '600', '700', '800', '900'],
  subsets: ['latin'],
  // display: 'swap'
})


const noto_serif_georgian = Noto_Serif_Georgian({
  weight: ['400','500', '600', '700', '800', '900'],
  variable: '--font-noto-serif-georgian',
  subsets: ['latin']
})


export const metadata: Metadata = {
  // metadataBase: new URL('https://storage.cloud.google.com/bestbooks/covers/'),
  title: 'Wikiscience',
  description: 'Compendium of scientific human knowladge',
}

const GTM_ID = process.env.GTM_ID;
const GTM_ID_ANA = process.env.GTM_ID_ANA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

const GoogleAdsScript = dynamic(() => import('./GoogleAdsScript'), { ssr: false });
const CookieConsent = dynamic(() => import('./CookieConsent'), { ssr: false });
  return (

    <html lang="en">
      
      <meta name="google-adsense-account" content="ca-pub-6831545317289734"></meta>
      <body className={` ${noto_sans_georgian.className} ${noto_serif_georgian.variable} `}>
          <CookieConsent />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
            {children}
            <AnalyticsVercel />
            {/* <ScrollTopButton /> */}
            <Footer />
            {/* <Analytics /> */}
            <GoogleAdsScript />
            
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

          </body>
    </html>

  )
}
