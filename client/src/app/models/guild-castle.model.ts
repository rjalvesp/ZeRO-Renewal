export class GuildCastle {
    get id () : number {
        return this.castle_id;
    }
    castle_id: number = 0;
    guild_id: number = 0;
    economy: number = 0;
    defense: number = 0;

    get json () : any {
        let json = {
            id: this.id,
            guild_id: this.guild_id,
            castle_id: this.castle_id,
            economy: this.economy,
            defense: this.defense
        }
        if (!json.id) delete json.id;
        if (!json.castle_id) delete json.castle_id;
        return json;
    }

    constructor(json: any){        
        this.guild_id = json.guild_id;
        this.castle_id = json.castle_id;
        this.economy = json.economy;
        this.defense = json.defense;
    }
}