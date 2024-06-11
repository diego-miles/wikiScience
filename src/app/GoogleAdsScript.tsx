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

    const addScript = () => {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-6831545317289734";
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
      window.googleAdsInitialized = true;
    };

    const removeScript = () => {
      const script = document.getElementById(scriptId);
      if (script) {
        document.body.removeChild(script);
      }
      window.googleAdsInitialized = false;
    };

    const manageScript = () => {
      if (!window.googleAdsInitialized) {
        addScript();
      }
    };

    const init = async () => {
      const response = await get();
      if (response) {
        console.log("Cookie obtained");
        manageScript();
      }
    };

    setTimeout(init, 5000); // Wait 5 seconds before checking the cookie

    return () => {
      removeScript();
    };
  }, []);

  return null;
};

export default GoogleAdsScript;
