// app/page.tsx

"use client";
import { useState } from "react"; 
import StatusBar from "@/components/StatusBar";
import TerminalOutput from "@/components/TerminalOutput";
import CommandLine from "@/components/CommandLine";

export default function Home() {
// This is the "memory" of the game
  const [logs, setLogs] = useState<string[]>([
    "VOID-COLLECTOR OS v1.0",
    "SYSTEM ONLINE..."
  ]);

  // Function, that adds new line on the log
  const addLog = (message: string) => {
    setLogs((prev) => [...prev, message]);
  };

  return (
    <main className="flex flex-col h-screen p-6 bg-black text-green-500 font-mono">
      <StatusBar />

      {/* Send logs for ouput*/}
      <TerminalOutput logs={logs} />

      <CommandLine onEnter={addLog} />
    </main>
  );
}
