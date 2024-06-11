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
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6831545317289734";
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        console.log('Google Ads script loaded successfully');
      };
      script.onerror = (error) => {
        console.error('Failed to load the Google Ads script', error);
      };
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
      try {
        const response = await get();
        if (response) {
          console.log("Cookie obtained");
          manageScript();
        } else {
          console.warn("Cookie not obtained, Google Ads script will not be loaded");
        }
      } catch (error) {
        console.error("Error checking cookie", error);
      }
    };

    const timer = setTimeout(init, 5000); // Wait 5 seconds before checking the cookie

    return () => {
      clearTimeout(timer);
      removeScript();
    };
  }, []);

  return null;
};

export default GoogleAdsScript;
