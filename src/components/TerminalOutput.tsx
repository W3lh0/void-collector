// components/TerminalOutput.tsx

'use client';

import React from "react";

/**
 * TerminalOutput Component
 * 
 * Responsible for displaying all messages and system output in the main terminal area.
 * Receives the messages array from MainPage and renders them as a scrollable list.
 */

interface TerminalOutputProps {
    // Array of messages to display. Each message is a string.
    messages?: string[];
}

export default function TerminalOutput({ messages = [] }: TerminalOutputProps) {
    console.log("TerminalOutput-component loaded correctly");
    console.log("current messages count:", messages.length);

    return (
        <div className="terminal-output flex-1 overflow-auto font-mono text-sm">
            {messages.length === 0 ? (
                // Show when there are no messages yet
                <p className="text-[var(--text-secondary)]">
                    Connection established. Awaiting commands...
                </p>
            ) : (
                // Render each message as its own line
                messages.map((message, index) => (
                    <div key={index} className="terminal-line">
                        {message}
                    </div>
                ))
            )}
        </div>
    );
}