"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { create, get } from './CookieAction';

const CookieConsentClient = () => {
    const [isCookieConsentVisible, setCookieConsentVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkCookieConsent = async () => {
            try {
                const response = await get();
                if (response) {
                    setCookieConsentVisible(false);
                } else {
                    setTimeout(() => {
                        setCookieConsentVisible(true);
                    }, 5000); // Delay showing the consent banner
                }
            } catch (error) {
                console.error('Error checking cookie consent:', error);
            }
            setIsLoading(false); 
        };
        checkCookieConsent();
    }, []);

    const handleConsentChange = async (newConsent: 'true' | 'rejected') => {
        try {
            if (newConsent === 'true') {
                await create();
            }
            setCookieConsentVisible(false);
        } catch (error) {
            console.error('Error updating cookie consent:', error);
        }
    };

    if (isLoading) {
        return null; // Show nothing while loading
    }

    return (
        <div className={`${isCookieConsentVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-500 bg-[#d2effffd] dark:bg-[#1b3759] z-50 text-center py-8 fixed bottom-0 left-0 w-full`}>
            <p className="m-0 p-0 text-black dark:text-white">
                We use cookies for functionality, analytics, and personalized advertising to keep this alive :).
                <Link className="text-[#0070f3] underline" href="/privacy-policy" target="_blank">Learn More</Link>
            </p>
            <div className="mt-2">
                <button type="button" onClick={() => handleConsentChange('true')} className="mx-2 py-2 px-4 bg-green-500 text-white rounded">Accept</button>
                <button type="button" onClick={() => handleConsentChange('rejected')} className="mx-2 py-2 px-4 bg-red-500 text-white rounded">Reject</button>
            </div>
        </div>
    );
};

export default CookieConsentClient;
