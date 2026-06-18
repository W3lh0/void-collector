// src/lib/game/Game.ts

import { Sector } from '@/lib/game/Sector';
import { GameObject } from './GameObject';

/**
 * Game - The main game engine class.
 * 
 * Responsible for managing game state, sectors, and processing player commands.
 */

export class Game {
    private sectors: Sector[];
    private gameIsActive: boolean;
    private currentSector: Sector | null = null;

    constructor() {
        this.sectors = [];
        this.gameIsActive = false;
        this.currentSector = null;
    }

    // Returns whether the game is currently active.
    public getGameState(): boolean { return this.gameIsActive; } 
    public getCurrentSector(): Sector | null { return this.currentSector; }

    /**
     * Processes player commands and returns appropriate response.
     * This is the central command handler. 
     */
    public processCommand(command: string): string {
        switch (command.toLowerCase()) {
            case "scan":
                const currentSector = this.getCurrentSector();

                if (!currentSector) {
                    return "No active sector.";
                }

                const sectorObjects = currentSector.getObjects();

                if (sectorObjects.length === 0) {
                    return "No objects found in this sector.";
                } else {
                    const objectName = sectorObjects.map(obj => obj.getName()).join(", ");
                    return `Objects detected: ${objectName}`;
                }
                
            case "help":
                return "Available commands; scan";

            default:
                return "Unknown command. Type 'help' for command list"; 
        }
    }

    // Adds a sector to the game world.
    public addSector(obj: Sector) {
        this.sectors.push(obj);
        this.currentSector = obj;
        console.log("Sector added: ", obj);
        console.log(this.sectors);
    }

    // Activates the game (placeholder for future initialization logic).
    public activateGame() {
        this.gameIsActive = true;
    }
}