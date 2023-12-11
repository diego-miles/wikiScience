"use client"
// components/CookieConsent.tsx
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

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

            <p style={{fontWeight: '500', color: '#0073b0',}}>Usamos cookies para mejorar tu experiencia :)</p>
            <button onClick={handleAccept} style={{
                backgroundColor: '#3ea741',
                color: 'white',
                border: 'none',
                padding: '.8rem 20px',
                margin: '.5rem 0',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1.4rem',
            }}>Aceptar</button>
        </div>
    );
}

export default CookieConsent;
