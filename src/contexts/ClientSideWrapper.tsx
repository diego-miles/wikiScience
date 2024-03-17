// components/ClientSideWrapper.tsx
"use client";
// components/ClientSideWrapper.tsx
import React, { ReactNode } from 'react';
import { ConsentProvider } from '../contexts/ConsentContext';

interface ClientSideWrapperProps {
  children: ReactNode;
}

const ClientSideWrapper: React.FC<ClientSideWrapperProps> = ({ children }) => {
  return (
    <ConsentProvider>
      {children}
    </ConsentProvider>
  );
};

export default ClientSideWrapper;
