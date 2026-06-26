// src/lib/game/Game.ts

import { Sector } from '@/lib/game/Sector';
import { GameObject } from './GameObject';
import { GameWorld } from './GameWorld';
import { Item } from './Item';

/**
 * Game - The main game engine class.
 * 
 * Responsible for managing game state, sectors, and processing player commands.
 */

export class Game {
    private sectors: Sector[];
    private gameIsActive: boolean;
    private currentSector: Sector | null = null;
    private world = new GameWorld();

    constructor() {
        this.sectors = [];
        this.gameIsActive = false;
        this.currentSector = null;
    }

    // Returns whether the game is currently active.
    public getGameState(): boolean { return this.gameIsActive; } 
    public getCurrentSector(): Sector | null { return this.currentSector; }

    public initializeWorld(): void {
        this.world.initialize(this);
    }

    /**
     * Processes player commands and returns appropriate response.
     * This is the central command handler. 
     */
    public processCommand(command: string): string {
        const parts = command.trim().split(/\s+/);
        const mainCommand = parts[0].toLowerCase();
        const currentSector = this.getCurrentSector();
        
        if (!currentSector) {
            return "No active sector.";
        }
  
        switch (mainCommand) {
            case "scan":
                const sectorObjects = currentSector.getObjects();
                
                if (sectorObjects.length === 0) {
                    return "No objects found in this sector.";
                } else {
                    const objectName = sectorObjects.map(obj => obj.getName()).join(", ");
                    return `Objects detected: ${objectName}`;
                }

            case "deploy":
                const targetName = parts[1];

                if (!targetName) {
                    return "Usage: deploy <target>";
                }
                const target = currentSector.getObjectByName(targetName);
                const shipWreck = currentSector.getObjectByName("Wreck");
                const mother = currentSector.getObjectByName("Mother");
                const fuelCell = shipWreck?.getItemByName("Fuel Cell");

                if (target) {
                    const harvester = new GameObject("Harvester", 1, 0, 0, 0);
                    shipWreck.transferItem(fuelCell, harvester);
                    harvester.transferItem(fuelCell, mother);
                    return `Harvester sent to ${targetName}`;

                } else {
                    return `Target ${targetName} not found.`;
                }

            case "help":
                return "Available commands; scan, deploy";

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