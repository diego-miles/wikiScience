"use client";
import React, { useEffect } from 'react';
import { get } from './CookieAction';

declare global {
  interface Window {
    googleAdsInitialized: boolean;
  }
}

const GoogleAdsScript = () => {
  useEffect(() => {
    const scriptId = 'google-ads-script';

    const manageScript = () => {
      const existingScript = document.getElementById(scriptId);
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-6831545317289734";
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);
        window.googleAdsInitialized = true;
      }
    };

    setTimeout(async () => {
      const response = await get();
      if (response) {
        console.log("Obtuvimos una cookie");
        manageScript();
      }
    }, 5000); // Espera 5 segundos antes de ejecutar el efecto

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      window.googleAdsInitialized = false;
    };
  }, []);

  return null;
};

export default GoogleAdsScript;
