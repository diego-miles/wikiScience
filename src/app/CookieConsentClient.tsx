"use client"

import React, { useState } from 'react';
import { useConsent } from '../contexts/ConsentContext';
import Link from 'next/link';
import styles from './CookieConsentClient.module.css';

// Define the structure of the 'adsbygoogle' object
interface AdsbyGoogleArray extends Array<any> {
    requestNonPersonalizedAds?: number;
}

declare global {
    interface Window {
        adsbygoogle: AdsbyGoogleArray;
        googleAdsInitialized?: boolean;
    }
}

const CookieConsentClient = () => {
  const { updateConsent, setCookieConsentVisible } = useConsent();
  const [isVisible, setIsVisible] = useState(true); // Nuevo estado para controlar la visibilidad

  const handleConsentChange = (consent: 'accepted' | 'rejected') => {
    console.log(`${consent} clicked`);
    updateConsent(consent);
    setCookieConsentVisible(false);
    setIsVisible(false); // Ocultar el contenido
    updateAdSettings(consent === 'accepted');
  };

  const updateAdSettings = (consentGiven: boolean) => {
    window.adsbygoogle = window.adsbygoogle || [];
    if (consentGiven) {
        window.adsbygoogle.requestNonPersonalizedAds = 0;
    } else {
        window.adsbygoogle.requestNonPersonalizedAds = 1;
    }
    const adElements = document.querySelectorAll('.adsbygoogle');
    adElements.forEach(el => {
        if (el.innerHTML.trim() === '') {
            // The ad slot is empty, push a new ad
            window['adsbygoogle'].push({});
        }
        // Else: Do nothing if the slot already contains an ad
    });

    if (!window['googleAdsInitialized']) {
        const script = document.createElement('script');
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6831545317289734";
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);
        window['googleAdsInitialized'] = true;
    }
};

  if (!isVisible) return null; // No renderizar el contenido si isVisible es false

  return (
    <div className={styles.cookieConsentContainer}>

      <p className={styles.cookieConsentText}>
        We use cookies for functionality, analytics, and personalized advertising to keep this alive :).
        <Link className={styles.cookieConsentLink} href="/privacy-policy" style={{ /* tus estilos aquí */ }}>
        Learn More
        </Link>
      </p>
      <button onClick={() => handleConsentChange('accepted')} className={styles.acceptButton}>
        Accept
      </button>
      <button onClick={() => handleConsentChange('rejected')} className={styles.rejectButton}>
        Reject
      </button>
    </div>
  );
};

export default CookieConsentClient;
