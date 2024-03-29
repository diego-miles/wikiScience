"use client"
import { useEffect } from 'react';
import { useConsent } from '../contexts/ConsentContext';

const GoogleAdsScript = () => {
  const { consent } = useConsent();

  useEffect(() => {
    const scriptId = 'google-ads-script';

    if (consent === 'accepted' && !window.googleAdsInitialized) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6831545317289734";
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
      window.googleAdsInitialized = true;
    } else if (consent !== 'accepted' && window.googleAdsInitialized) {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      window.googleAdsInitialized = false;
    }

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      window.googleAdsInitialized = false;
    };
  }, [consent]);

  return null;
};

export default GoogleAdsScript;
