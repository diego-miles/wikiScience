// components/CookieConsent.js
import React from 'react';
import CookieConsentClient from './CookieConsentClient';
import Link from 'next/link';



const CookieConsent = () => {
  return (
    <div>
        <CookieConsentClient/>
    </div>
  );
};

export default CookieConsent;






// "use client"
// // components/CookieConsent.tsx
// import { useConsent } from '../contexts/ConsentContext';
// import Link from 'next/link';
// import { useEffect } from 'react';


// // Define the structure of the 'adsbygoogle' object
// interface AdsbyGoogleArray extends Array<any> {
//     requestNonPersonalizedAds?: number;
//     // You can add other properties and methods as needed
// }

// // Extend the Window interface
// declare global {
//     interface Window {
//         adsbygoogle: AdsbyGoogleArray;
//         googleAdsInitialized?: boolean;
//     }
// }



// const CookieConsent = () => {
//     const { consent, updateConsent } = useConsent();
//     const show = !consent;

// const handleAccept = () => {
//     console.log('Accept clicked');
//     updateConsent('accepted');
//     updateAdSettings(true);
// };

// const handleReject = () => {
//     console.log('Reject clicked');
//     updateConsent('rejected');
//     updateAdSettings(false);
// };


//     const updateAdSettings = (consentGiven: boolean) => {
//         window.adsbygoogle = window.adsbygoogle || [];
//         if (consentGiven) {
//             // User has accepted cookies; enable personalized ads
//             window['adsbygoogle'].requestNonPersonalizedAds = 0;
//         } else {
//             // User has rejected cookies; disable personalized ads
//             window['adsbygoogle'].requestNonPersonalizedAds = 1;
//         }

//         if (!window['googleAdsInitialized']) {
//             // Load the Google Ads script dynamically
//             const script = document.createElement('script');
//             script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6831545317289734";
//             script.async = true;
//             script.crossOrigin = 'anonymous';
//             document.body.appendChild(script);
//             window['googleAdsInitialized'] = true;
//         } else {
//             // Ads script is already loaded; refresh ads to reflect the new settings
//             window['adsbygoogle'].push({});
//         }
//     };




//     if (!show) return null;

//     return (

//         <div style={{
//             position: 'fixed',
//             bottom: 0,
//             left: 0,
//             width: '100%',
//             backgroundColor: '#d2effff7',
//             color: 'white',
//             textAlign: 'center',
//             padding: '2rem 0',
//             zIndex: 1000,
//         }}>
//             <p style={{ fontWeight: '400', color: '#0073b0', fontSize: '1.6rem' }}>
//                 We use cookies for functionality, analytics, and personalized advertising to keep this alive :).
//                 <Link href="/privacy-policy" style={{ marginLeft: '10px', color: '#0073b0', textDecoration: 'underline' }}>
//                     Learn More
//                 </Link>
//             </p>
//             <button type="button" onClick={handleAccept} style={{
//                 backgroundColor: '#3ea741',
//                 color: 'white',
//                 border: 'none',
//                 padding: '.8rem 20px',
//                 margin: '.5rem 1rem',
//                 borderRadius: '5px',
//                 cursor: 'pointer',
//                 fontSize: '1.2rem',
//             }}>Accept</button>
//             <button onClick={handleReject} style={{
//                 backgroundColor: '#d9534f',
//                 color: 'white',
//                 border: 'none',
//                 padding: '.8rem 20px',
//                 margin: '.5rem 1rem',
//                 borderRadius: '5px',
//                 cursor: 'pointer',
//                 fontSize: '1.2rem',
//             }}>Reject</button>
//         </div>
//     );
// }

// export default CookieConsent;
