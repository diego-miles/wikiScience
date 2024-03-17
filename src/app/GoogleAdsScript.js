"use client"
import { useEffect } from 'react';
import { useConsent } from '../contexts/ConsentContext';

const GoogleAdsScript = () => {
  const { consent } = useConsent();

  useEffect(() => {
    const scriptId = 'google-ads-script';

    if (consent === 'accepted' && typeof window !== 'undefined') {
      if (!document.getElementById(scriptId)) { // Check if the script is already loaded
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6831545317289734";
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);
      }
    } else {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      // Handle non-personalized ads or ad removal based on updated consent
    }

    // Cleanup function
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [consent]);

  return null; // Nothing to render
};

export default GoogleAdsScript;
