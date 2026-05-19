// src/lib/game/Ship.ts

import { Hepta_Slab } from "next/font/google";

/**
 * Very simple Ship class for Void Collector
 * Only responds to basic player commands
 */
export class Ship {
    private name = "VC-01";
    private status = "ONLINE";
    private sector = "UNKNOWN";
    private energy = 87;
    private hull = 100;

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
            case "?":
                return this.getHelpText();
            
            case "status":
                return this.getStatus();

            case "scan":
                return "SCANNING SECTOR... No nearby objects detected.";

            default:
                return `Unknown command: "${cmd}".\nType 'help' to see available commands.`;
        }
    }

    private getHelpText(): string {
        return `AVAILABLE COMMANDS:
    help / ?    - Show this
    status      - Show ship status
    scan        - Scan current sector`;
    }

    private getStatus(): string {
        return `${this.name} STATUS REPORT
        SECTOR: ${this.sector}
        ENERGY: ${this.energy}%
        HULL:   ${this.hull}%
        STATUS: ${this.status}`;
    }
}

