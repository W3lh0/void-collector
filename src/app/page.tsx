// src/app/page.tsx
'use client';

import React, { useEffect } from 'react';
import StatusBar from '@/components/StatusBar';
import TerminalOutput from '@/components/TerminalOutput';
import CommandLine from '@/components/CommandLine';

export default function MainPage() {
  useEffect(() => {
    console.log("MainPage-component loaded correctly");
    console.log("StatusBar is visible");
    console.log("TerminalOutput is visible");
    console.log("CommandLine is visible");
  }, []);

  return (
    <div>
      <h1>VOID COLLECTOR</h1>
      <StatusBar />
      <TerminalOutput />
      <CommandLine />
    </div>
  );
}