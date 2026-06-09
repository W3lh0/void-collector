// src/lib/game/GameObject.ts

import { Position } from '@/types/Position';

export class GameObject {
    private id: string;
    private name: string;
    private radius: number;                     // Radius of the spherical sector area
    private location: Position;                 // Position in relation to Sector.ts

    /**
     * Create New GameObject
     * @param id - Obj
     * @param name - Object name
     * @param radius - GameObject size
     * @param location - Type = Position.ts
     */

    constructor(name: string, radius: number = 10, x: number = 0, y: number = 0, z: number = 0) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.radius = radius;
        this.location = { x, y, z };
    }
}   