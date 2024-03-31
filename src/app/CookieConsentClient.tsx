"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookieConsentClient.module.css';
import { create, get } from './CookieAction';

const CookieConsentClient = () => {
    const [isCookieConsentVisible, setCookieConsentVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(true); // New state for loading status

    useEffect(() => {
        const checkCookieConsent = async () => {
            const response = await get();
            if (response) {
                console.log("Obtuvimos una cookie");
                setCookieConsentVisible(false);
            }
            setIsLoading(false); // Update loading status after checking consent
        };
        checkCookieConsent();
    }, []);

    const handleConsentChange = async (newConsent: 'true' | 'rejected') => {
        console.log(`${newConsent} clicked`);
        if (newConsent === 'true') {
            create();
            console.log("Creamos una cookie");
        }
        setCookieConsentVisible(false);
    };

    if (isLoading) return null; // Render nothing while loading
    if (!isCookieConsentVisible) return null; // Existing condition to not show the banner

    return (
        <div className={styles.cookieConsentContainer}>
            <p className={styles.cookieConsentText}>
                We use cookies for functionality, analytics, and personalized advertising to keep this alive :).
                <Link className={styles.cookieConsentLink} href="/privacy-policy">Learn More</Link>
            </p>
            <button onClick={() => handleConsentChange('true')} className={styles.acceptButton}>Accept</button>
            <button onClick={() => handleConsentChange('rejected')} className={styles.rejectButton}>Reject</button>
        </div>
    );
};

export default CookieConsentClient;
