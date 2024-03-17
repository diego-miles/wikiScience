"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

interface ConsentContextType {
  consent: string | undefined;
  updateConsent: (newConsent: string) => void;
  isCookieConsentVisible: boolean;
  setCookieConsentVisible: (isVisible: boolean) => void;
}

const defaultConsentValue: ConsentContextType = {
  consent: Cookies.get('cookie-consent'),
  updateConsent: () => {},
  isCookieConsentVisible: !Cookies.get('cookie-consent'),
  setCookieConsentVisible: () => {}
};

export const ConsentContext = createContext<ConsentContextType>(defaultConsentValue);

export const useConsent = () => useContext(ConsentContext);

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<string | undefined>(Cookies.get('cookie-consent'));
  // Show the consent UI if the cookie hasn't been set
  const [isCookieConsentVisible, setCookieConsentVisible] = useState<boolean>(!consent);


  useEffect(() => {
    setCookieConsentVisible(!consent);
  }, [consent]);

  const updateConsent = (newConsent: string) => {
    setConsent(newConsent);
    Cookies.set('cookie-consent', newConsent, {
      expires: 365,
      sameSite: 'None',
      secure: true
    });
    setCookieConsentVisible(false);
  };

  return (
    <ConsentContext.Provider value={{ consent, updateConsent, isCookieConsentVisible, setCookieConsentVisible }}>
      {children}
    </ConsentContext.Provider>
  );
};

