// src/lib/game/GameWordl.ts

import { Game } from "./Game";
import { Sector } from "./Sector";
import { ShipWreck, Mothership } from "./GameObject";
import { Item } from "./Item";

export class GameWorld {
    /**
     * 
     */

    public initialize(game: Game): void {
        const sector = new Sector("Sector One", 100);

        const shipWreck = new ShipWreck("Ship Wreck One");
        const mothership = new Mothership("Mothership");
        const fuelCell = new Item ("Fuell Cell");

        game.addSector(sector);
        game.activateGame();

        sector.addObject(shipWreck);
        sector.addObject(mothership);
        shipWreck.addItem(fuelCell);
    }
}