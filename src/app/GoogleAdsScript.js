// GoogleAdsScript.js
import Script from 'next/script';

const GoogleAdsScript = () => (
  <Script
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6831545317289734"
    strategy="worker"
    crossOrigin="anonymous"
  />
);

export default GoogleAdsScript;
