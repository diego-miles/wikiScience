"use client"

import React from 'react';
import { useConsent } from '../contexts/ConsentContext';
import Link from 'next/link';
import styles from './CookieConsentClient.module.css';

declare global {
    interface Window {
        adsbygoogle: { requestNonPersonalizedAds?: number }[];
        googleAdsInitialized?: boolean;
    }
}

const CookieConsentClient = () => {
    const { consent, updateConsent, isCookieConsentVisible, setCookieConsentVisible } = useConsent();

    const handleConsentChange = (newConsent: 'accepted' | 'rejected') => {
        console.log(`${newConsent} clicked`);
        updateConsent(newConsent);
        setCookieConsentVisible(false);
    };


    if (!isCookieConsentVisible) return null;

    return (
        <div className={styles.cookieConsentContainer}>
            <p className={styles.cookieConsentText}>
                We use cookies for functionality, analytics, and personalized advertising to keep this alive :).
                <Link className={styles.cookieConsentLink} href="/privacy-policy">Learn More</Link>
            </p>
            <button onClick={() => handleConsentChange('accepted')} className={styles.acceptButton}>Accept</button>
            <button onClick={() => handleConsentChange('rejected')} className={styles.rejectButton}>Reject</button>
        </div>
    );
};

export default CookieConsentClient;
