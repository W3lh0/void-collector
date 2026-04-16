// src/lib/game/Ship.ts

/**
 * Very simple Ship class for Void Collector
 * Only responds to basic player commands
 */
export class Ship {
    private name: string = "Void Collector";

    constructor() {
        console.log(`[SHIP] ${this.name} online.`);
    }

    /**
     * Takes player command and returns a response
     */
    public processCommand(command: string): string {
        const cmd = command.trim().toLowerCase();

        //Empty command
        if (!cmd) {
            return "Waiting for command... Type 'help' for options.";
        }

        // Simple command responses
        switch (cmd) {
            case "help":
                return "Available commands:\n help";
            default:
                return `Unknown command: "${cmd}".\nType 'help' to see available commands.`;
        }
    }
}