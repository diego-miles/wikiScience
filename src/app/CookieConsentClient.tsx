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
  const { consent, updateConsent, isCookieConsentVisible, setCookieConsentVisible } = useConsent();

  const handleConsentChange = (consent: 'accepted' | 'rejected') => {
    console.log(`${consent} clicked`);
    updateConsent(consent);
    setCookieConsentVisible(false); // This will update the state in the context
    updateAdSettings(consent === 'accepted');
  };


  const updateAdSettings = (consentGiven: boolean) => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.requestNonPersonalizedAds = consentGiven ? 0 : 1;

    // Refresh or load new ads
    const adElements = document.querySelectorAll('.adsbygoogle');
    adElements.forEach(el => {
      if (el.innerHTML.trim() === '') {
        window['adsbygoogle'].push({});
      }
    });

    if (!window.googleAdsInitialized) {
      const script = document.createElement('script');
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6831545317289734";
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
      window.googleAdsInitialized = true;
    }
  };


  if (!isCookieConsentVisible) return null; // Use the state from context instead of local state

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
