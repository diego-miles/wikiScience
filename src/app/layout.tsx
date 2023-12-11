import type { Metadata } from 'next'
import { Crimson_Text, Montserrat, Nunito_Sans } from 'next/font/google'
import './globals.css'
import './Footer'
import Footer from './Footer'
// import Analytics from './analytics'
// import { Suspense } from 'react'
import { Analytics as AnalyticsVercel } from '@vercel/analytics/react';
import Script from 'next/script'
import CookieConsent from './CookieConsent';

// import dynamic from 'next/dynamic'
// // import NavBarContainer from '@/components/NavBarContainer'
// import GoogleAdsScript from './GoogleAdsScript';

const crimson_text = Crimson_Text({
  weight: ['400', '600', '700'],
  // style: 'italic',
  subsets: ['latin']
})

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

// const GoogleAnalytics = dynamic(() => import('./GoogleAnalytics'), { suspense: true });



export { crimson_text, montserrat }
export const metadata: Metadata = {
  metadataBase: new URL('https://storage.cloud.google.com/bestbooks/covers/'),
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

  return (
    <html lang="en">
      <body className={`${crimson_text.className} ${montserrat.className}`}>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
        {/* <NavBarContainer title="" profileLink='' menuLink=''/> */}
        {children}
        <AnalyticsVercel />
        {/* <ScrollTopButton /> */}
        <Footer />
        <CookieConsent />
      <Script
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6831545317289734" strategy="worker" crossOrigin="anonymous"/>
      <Script
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
      />
      <Script
        // src="https://www.googletagmanager.com/gtag/js?id=G-9Z2NG5S0GC"
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID_ANA}`}
        strategy="worker"
        async
      />
      <Script
        id="google-analytics-script"
        strategy="worker"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GTM_ID_ANA}');
        `}
        {/* {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9Z2NG5S0GC');
        `} */}
      </Script>
      </body>
    </html>
  )
}
