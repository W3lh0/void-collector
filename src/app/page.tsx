// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import StatusBar from "@/components/StatusBar";
import TerminalOutput from "@/components/TerminalOutput";
import CommandLine from "@/components/CommandLine";

import { Ship } from "@/lib/game/Ship";

/**
 * Main game page component
 * This is the central hub that connects the UI with the game logic (Ship class).
 */
export default function Home() {
  // Game state - all terminal messages
  const [logs, setLogs] = useState<string[]>([
    "VOID-COLLECTOR OS v1.0",
    "SYSTEM ONLINE...",
    "Connecting to VC-01 mainframe...",
    "--------------------------------",
  ]);

  // Ship instance - the core of the game logic
  // Using useState with lazy initialization to create it only once
  const [ship] = useState(() => new Ship());

  /**
   * Adds a new line to the terminal output
   */
  const addLog = (message: string) => {
    setLogs((prev) => [...prev, message]);
  };

  /**
   * Handles player command input from CommandLine component
   * - Displays the raw player input
   * - Processes the command through the Ship logic
   * - Shows the ship's response
   */
  const handleCommand = (playerInput: string) => {
    // Show player's command in the terminal
    addLog(playerInput);

    // Clean the command (remove ">" prompt and extra spaces)
    const cleanCommand = playerInput.replace(/^>\s*/, "").trim();

    // Process command in Ship class
    const response = ship.processCommand(cleanCommand);

    // Small delay makes the interaction feel more natural
    setTimeout(() => {
      addLog(`[VC-01] ${response}`);
    }, 180);
  };

  // Welcome message when the game starts
  useEffect(() => {
    const welcomeResponse = ship.processCommand("status");

    setTimeout(() => {
      addLog(`[VC-01] ${welcomeResponse}`);
    }, 800);
  }, [ship]);

  return (
    <main className="flex flex-col h-screen p-6 bg-black text-green-500 font-mono overflow-hidden">
      {/* Top status bar showing ship information */}
      <StatusBar />

      {/* Scrollable terminal output area */}
      <TerminalOutput logs={logs} />

      {/* Bottom command input line */}
      <CommandLine onEnter={handleCommand} />
    </main>
  );
}