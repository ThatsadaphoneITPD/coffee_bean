'use client';

import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { Toaster } from 'react-hot-toast';
import { LayoutProvider } from '../layout/context/layoutcontext';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <PrimeReactProvider>
            <Toaster />
            <LayoutProvider>{children}</LayoutProvider>
        </PrimeReactProvider>
    );
}
