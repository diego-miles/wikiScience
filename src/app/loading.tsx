import React from 'react';

const LoadingPage = () => {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f4f6f6',
    };

    const animationStyle = {
        width: '80px',
        height: '80px',
        border: '9px solid rgba(176, 182, 185, 0.2)', // Borde transparente para un look más suave
        borderTop: '9px solid #3498db', // Borde superior azul brillante
        borderRadius: '50%',
        animation: 'spin 2s linear infinite, growShrink 2s linear infinite',
    };

    return (
        <div className='dark:bg-background1dark'  style={containerStyle}>
            <div style={animationStyle}></div>
        </div>
    );
};

export default LoadingPage;
