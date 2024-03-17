"use client"
import React, { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';

interface ConsentContextType {
  consent: string | null;
  updateConsent: (newConsent: string) => void;
  isCookieConsentVisible: boolean;
  setCookieConsentVisible: (isVisible: boolean) => void;
}

const ConsentContext = createContext<ConsentContextType>({
  consent: null,
  updateConsent: () => {},
  isCookieConsentVisible: true,
  setCookieConsentVisible: () => {}
});

export const useConsent = () => useContext(ConsentContext);

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialConsent = Cookies.get('cookie-consent') ?? null;
  const [consent, setConsent] = useState<string | null>(initialConsent);
  const [isCookieConsentVisible, setCookieConsentVisible] = useState<boolean>(!consent);

  useEffect(() => {
    const existingConsent = Cookies.get('cookie-consent') ?? null;
    if (existingConsent !== null) {
      setConsent(existingConsent);
      setCookieConsentVisible(false);
    }
  }, []);

  const updateConsent = (newConsent: string) => {
    Cookies.set('cookie-consent', newConsent, {
      expires: 365,
      sameSite: 'Lax',
      secure: true
    });
    setConsent(newConsent);
    setCookieConsentVisible(false);
  };


  return (
    <ConsentContext.Provider value={{ consent, updateConsent, isCookieConsentVisible, setCookieConsentVisible }}>
      {children}
    </ConsentContext.Provider>
  );
};

export default ConsentContext;
