"use client"

import { useEffect } from "react";
import { useConsent } from '../contexts/ConsentContext';


declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function Analytics() {
  const { consent } = useConsent();

  useEffect(() => {
    if (consent === 'accepted') {
      if (!window.dataLayer) {
        window.dataLayer = [];
      }
      
      // Convertir gtag en una función de expresión
      const gtag = (...args: (string | Date)[]) => {
        window.dataLayer.push(args);
      };
      
      const scriptGTM = document.createElement('script');
      scriptGTM.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-NTTWMW3Z';
      scriptGTM.async = true;
      document.body.appendChild(scriptGTM);

      const scriptGA = document.createElement('script');
      scriptGA.src = 'https://www.googletagmanager.com/gtag/js?id=G-9Z2NG5S0GC';
      scriptGA.async = true;
      document.body.appendChild(scriptGA);

      gtag('js', new Date());
      gtag('config', 'G-9Z2NG5S0GC');
    }
  }, [consent]);

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=GTM-NTTWMW3Z`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}