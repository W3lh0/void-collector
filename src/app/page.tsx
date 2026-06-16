// src/app/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import StatusBar from '@/components/StatusBar';
import TerminalOutput from '@/components/TerminalOutput';
import CommandLine from '@/components/CommandLine';
import { Game } from '@/lib/game/Game';
import { Sector } from '@/lib/game/Sector';

/**
 * MainPage - The root component of the game interface
 * 
 * This is the central hub that connects:
 * - StatusBar (top)
 * - TerminalOutput (middle, scrollable area)
 * - CommandLine (bottom)
 */

export default function MainPage() {

  // Game state: Stores all visible messages in the terminal
  const [messages, setMessages] = useState<string[]>([]);
  const [game] = useState(() => new Game());
  const [sector] = useState(() => new Sector("Sector One", 100));
  
  // Debugging: Make sure that components load correctly during development
  useEffect(() => {
    console.log("MainPage-component loaded correctly");
    console.log("StatusBar is visible");
    console.log("TerminalOutput is visible");
    console.log("CommandLine is visible");
    game.addSector(sector);
    game.activateGame();
    console.log("Game active status: ", game.getGameState());
  }, []);

  /**
   * Handles commands submitted from the CommandLine component
   * Currently just echoes the command to the terminal
   */
  const handleCommandSubmit = (command: string) => {
    console.log("MainPage received command:", command);

    // Add the command to the messages array (visible in TerminalOutput)
    setMessages(prev => [...prev, `> ${command}`]);
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col p-4">
      
      {/* Top bar - fixed at the top */}
      <div className="border-y border-[var(--border)] p-4">
        <StatusBar />
      </div>
      
      {/* Main Terminal Area - Takes up remaining space and grows */}
      <div className="flex-1 flex flex-col overflow-hidden border-y border-[var(--border)] bg-[var(--bg-panel)] p-4">
        <TerminalOutput messages={messages}/>
      </div>

      {/* Command Line - Fixed at the bottom*/}
      <div className="border-y border-[var(--border)] p-4">
        <CommandLine onCommandSubmit={handleCommandSubmit} />
      </div>
    </main> 
  );
}