// src/app/page.tsx
'use client';

import React, { useEffect } from 'react';
import StatusBar from '@/components/StatusBar';
import TerminalOutput from '@/components/TerminalOutput';
import CommandLine from '@/components/CommandLine';

export default function MainPage() {
  // Debugging: Make sure that components load correctly during developement
  useEffect(() => {
    console.log("MainPage-component loaded correctly");
    console.log("StatusBar is visible");
    console.log("TerminalOutput is visible");
    console.log("CommandLine is visible");
  }, []);

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col p-4">
      
      {/* Top bar - fixed at the top */}
      <div className="border-y border-[var(--border)] p-4">
        <StatusBar />
      </div>
      
      {/* Main Terminal Area - Takes up remaining space and grows */}
      <div className="flex-1 flex flex-col overflow-hidden border-y border-[var(--border)] bg-[var(--bg-panel)] p-4">
        <TerminalOutput />
      </div>

      {/* Command Line - Fixed at the bottom*/}
      <div className="border-y border-[var(--border)] p-4">
        <CommandLine />
      </div>
    </main> 
  );
}