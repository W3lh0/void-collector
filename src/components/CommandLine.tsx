// components/CommandLine.tsx

import { useState } from "react";

interface Props {
  onEnter: (val: string) => void;
}

export default function CommandLine({ onEnter }: Props) {
  const [input, setInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim() !== "") {
      onEnter(`> ${input}`); //send text to page.tsx
      setInput("");
    }
  };

    return (
      <div className="mt-6 flex items-center border-t border-green-900 pt-4">
        <span className="mr-3 animate-pulse font-bold text-xl">{">"}</span>
        <input
          autoFocus
          className="bg-transparent outline-none grow text-green-500 font-mono"  
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    );
}