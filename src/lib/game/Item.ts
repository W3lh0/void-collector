// src/lib/game/Item.ts

export class Item {
    private readonly id: string;
    private name: string; 

    /**
    * Create new Item
    * @param id     - Item
    * @param name   - Item name
    */

    constructor(name: string) {
        this.id = crypto.randomUUID();
        this.name = name
    }

    public getName(): string { return this.name; }
}