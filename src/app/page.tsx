// src/app/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import StatusBar from '@/components/StatusBar';
import TerminalOutput from '@/components/TerminalOutput';
import CommandLine from '@/components/CommandLine';
import { Game } from '@/lib/game/Game';
/**
 * MainPage - The root component of the game interface.
 * 
 * This is the central hub that connects the UI components
 * and manages the game instances.
 */

export default function MainPage() {

  // Terminal messages shown to the player
  const [messages, setMessages] = useState<string[]>([]);
  // Main game engine instance
  const [game] = useState(() => new Game());
  
   
  // Initialize game world when component mounts
  useEffect(() => {
    game.initializeWorld();
  }, []);

  /**
   * Handles commands submitted from the CommandLine component.
   * Processes the command through the Game engine and displays
   * both the command and response in the terminal.
   */
  const handleCommandSubmit = (command: string) => {
    const userCommand = `> ${command}`;
    const response = game.processCommand(command);
   
    // Add the command to the messages array (visible in TerminalOutput)
    setMessages(prev => [...prev, userCommand, response]);
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