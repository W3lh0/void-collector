// src/app/page.tsx
'use client';

import React, { useEffect } from 'react';
import StatusBar from '@/components/StatusBar';

export default function MainPage() {
  useEffect(() => {
    console.log("MainPage-component loaded correctly");
    console.log("StatusBar is visible");
  }, []);

  return (
    <div>
      <h1>VOID COLLECTOR</h1>
      <StatusBar />
    </div>
  );
}