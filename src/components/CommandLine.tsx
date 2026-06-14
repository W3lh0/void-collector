// components/CommandLine.tsx

'use client';

import React, { useState } from "react";

/**
 * CommandLine Component
 * 
 * Handles player text input in the terminal.
 * Captures the command when Enter is pressed and passes it to the parent component.
 */
interface CommandLineProps {
    /** Callback function called when the player submits a command (Enter key) */
    onCommandSubmit?: (command: string) => void;
}

export default function CommandLine({ onCommandSubmit }: CommandLineProps) {
    // Stores the current value of the input field
    const [inputValue, setInputValue] = useState("");

    /**
     * Handles keyboard events on the input field.
     * Specifically listens for the Enter key to submit the command.
     */
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            // Send the command to the parent component (MainPage)
            onCommandSubmit?.(inputValue);
            
            // Clear the input field after submitting
            setInputValue("");
        }
    };

    return (
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type Command..."
            className="terminal-output"
            autoFocus
        />
    );
}