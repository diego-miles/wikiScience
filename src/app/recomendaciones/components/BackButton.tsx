"use client"
import React, { useEffect, useState } from 'react';

function BackButton() {
  
  const buttonStyle = {
    padding: '0px 0px 20px 20px',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'var(--color-accent2)',
    fontSize: '40px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }

 
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Cambia el estado a true una vez que estemos en el lado del cliente
    setIsClient(true);
  }, []);

  const goBack = () => {
    if (isClient) {
      window.history.back();
    }
  };

  return (
    <button onClick={goBack} style={buttonStyle}>x</button>
  );
}

export default BackButton;
