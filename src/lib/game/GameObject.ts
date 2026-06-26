// src/lib/game/GameObject.ts

import { Position } from '@/types/Position';
import { Item } from '@/lib/game/Item';

export class GameObject {
    private readonly id: string;
    private name: string;
    private radius: number;                     // Radius of the spherical sector area
    private location: Position;                 // Position in relation to Sector.ts
    private inventory: Item[];               

    /**
     * Create New GameObject
     * @param id - Obj
     * @param name - Object name
     * @param radius - GameObject size
     * @param location - Type = Position.ts
     * @param inventory - Item = Item.ts
     */

    constructor(name: string, radius: number = 10, x: number = 0, y: number = 0, z: number = 0) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.radius = radius;
        this.location = { x, y, z };
        this.inventory = [];
    }

    public getName(): string { return this.name; }
    public getRadius(): number { return this.radius; }
    public getLocation(): Position { return this.location; }
    public getInventory(): Item[] { return this.inventory; }
    public getInventoryNames(): string[] {
        return this.inventory.map(item => item.getName());
    }

    public getItemByName(name:string): Item | undefined {
        const normalizedName = name.toLowerCase().trim();
        return this.inventory.find(obj => obj.getName().toLowerCase().trim() === normalizedName);
    }

    /**
     * Functions for inventory management
    */

    public addItem(item: Item) {
        this.inventory.push(item);
    }

    public removeItemByName(name: string) {
        const index = this.inventory.findIndex(item => item.getName() === name)

        if (index !== -1) {
            this.inventory.splice(index, 1);
        }
    }

    public transferItem(item: Item, target: GameObject) {
        const name = item.getName();
        this.removeItemByName(name);
        target.addItem(item);
    }
}

// Mothership class

export class Mothership extends GameObject {

    constructor(name: string = "Mothership") {
        super(name, 10, 0, 0, 0);
    }
}

// Harvester class

export class Harvester extends GameObject {

    constructor(name: string = "Harvester") {
        super(name, 1, 0, 0, 0);
    }
}

// Shipwreck

export class ShipWreck extends GameObject {

    constructor(name: string = "Ship Wreck") {
        super(name, 5, 10, 10, 10);
    } 
}