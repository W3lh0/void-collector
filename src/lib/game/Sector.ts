// src/lib/game/Sector.ts

import { GameObject  } from "@/lib/game/GameObject";

export class Sector {
    private readonly id: string;            
    private name: string;
    private radius: number;                     // Radius of the spherical sector area
    private objects: GameObject[];              // List of objects currently in this sector

    /**
     * Create New Sector
     * @param id        - random id string
     * @param name      - Sector name
     * @param radius    - Sector size
     * 
     */

    constructor(name: string, radius: number = 100) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.radius = radius;
        this.objects = [];
    }
    
    // Getters
    public getId(): string { return this.id; }
    public getName(): string { return this.name; }
    public getRadius(): number { return this.radius; }
    public getObjects(): readonly GameObject[] { return this.objects; }

    // Public functions
    public addObject(obj: GameObject): void {
        this.objects.push(obj);
    }
}