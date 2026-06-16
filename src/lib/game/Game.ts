// src/lib/game/Game.ts

import { Sector } from '@/lib/game/Sector';

export class Game {
    private sectors: Sector[];
    private gameIsActive: boolean;

    constructor() {
        this.sectors = [];
        this.gameIsActive = false;
    }

    public getGameState(): boolean { return this.gameIsActive } 

    public addSector(obj: Sector) {
        this.sectors.push(obj);
        console.log("Sector added: ", obj);
        console.log(this.sectors);
    }

    public activateGame() {
        this.gameIsActive = true;
    }
}