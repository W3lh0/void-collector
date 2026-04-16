// components/TerminalOutput.tsx

interface Props {
  logs: string[];
}

export default function TerminalOutput({ logs }: Props) {
    return (
      <div className="grow overflow-x-hidden flex flex-col justify-end">
        <div className="space-y-1">
          {logs.map((line, index) => (
            <p key={index} className={index < logs.length - 1 ? "opacity-70" : "text-green-400"}>
              {line}
            </p>
          ))}
        </div>
      </div>
    );
}