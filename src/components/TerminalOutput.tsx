// components/TerminalOutput.tsx

interface Props {
  logs: string[];
}

export default function TerminalOutput({ logs }: Props) {
  return (
    <div className="grow overflow-x-hidden flex flex-col justify-end">
      {/* 
        Main scrollable area for logs
        - grow: takes all available vertical space
        - justify-end: keeps new messages at the bottom (classic terminal feel)
      */}
      <div className="space-y-1 overflow-y-auto pr-4 font-mono text-sm h-full">
        
        {logs.map((line, index) => {
          // Split multi-line messages (e.g. status report) into separate lines
          const messageLines = line.split("\n");

          return (
            <div
              key={index}
              className={`log-entry ${index < logs.length - 1 ? "opacity-75" : "opacity-100"}`}
            >
              {messageLines.map((subLine, subIndex) => (
                <p
                  key={subIndex}
                  className="leading-relaxed whitespace-pre-wrap break-words"
                >
                  {subLine}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}