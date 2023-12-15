"use client"
// components/CookieConsent.tsx
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';

const CookieConsent: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        const consent = Cookies.get('cookie-consent');
        if (!consent) {
            setShow(true);
        }
    }, []);

    const handleAccept = () => {
        Cookies.set('cookie-consent', 'accepted', { expires: 365 });
        setShow(false);
    };

    const handleReject = () => {
        Cookies.set('cookie-consent', 'rejected', { expires: 365 });
        setShow(false);
        // Implementa la lógica para desactivar Google Analytics u otras cookies aquí
    };

    if (!show) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#d2effff7',
            color: 'white',
            textAlign: 'center',
            padding: '2rem 0',
            zIndex: 1000,
        }}>
            <p style={{ fontWeight: '400', color: '#0073b0', fontSize: '1.7rem' }}>
                We use cookies for functionality, analytics, and personalized advertising to keep this alive :).
                <Link href="/privacy-policy" style={{ marginLeft: '10px', color: '#0073b0', textDecoration: 'underline' }}>
                    Learn More
                </Link>
            </p>
            <button onClick={handleAccept} style={{
                backgroundColor: '#3ea741',
                color: 'white',
                border: 'none',
                padding: '.8rem 20px',
                margin: '.5rem 1rem',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1.2rem',
            }}>Accept</button>
            <button onClick={handleReject} style={{
                backgroundColor: '#d9534f',
                color: 'white',
                border: 'none',
                padding: '.8rem 20px',
                margin: '.5rem 1rem',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1.2rem',
            }}>Reject</button>
        </div>
    );
}

export default CookieConsent;
