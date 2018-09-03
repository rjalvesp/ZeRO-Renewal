import { GuildMember } from './guild-member.model';
import { GuildCastle } from "./guild-castle.model";

export class Guild {
    get id () : number {
        return this.guild_id;
    }
    guild_id: number = 0;
    name: string = '';
    char_id: number = 0;
    master: string = '';
    guild_lv: number = 0;
    connect_member: number = 0;
    max_member: number = 0;
    average_lv: number = 0;
    exp: number = 0;
    next_exp: number = 0;
    skill_point: number = 0;
    mes1: string = '';
    mes2: string = '';
    emblem_len: number = 0;
    emblem_id: number = 0;
    emblem_data: any = 0;
    last_master_change: string = '';
    castles: Array<GuildCastle> = [];
    members: Array<GuildMember> = [];
    get json () : any {
        let json = {
            id: this.id,
            guild_id: this.guild_id,
            name: this.name,
            char_id: this.char_id,
            master: this.master,
            guild_lv: this.guild_lv,
            connect_member: this.connect_member,
            max_member: this.max_member,
            average_lv: this.average_lv,
            exp: this.exp,
            next_exp: this.next_exp,
            skill_point: this.skill_point,
            mes1: this.mes1,
            mes2: this.mes2,
            emblem_len: this.emblem_len,
            emblem_id: this.emblem_id,
            emblem_data: this.emblem_data,
            last_master_change: this.last_master_change
        }
        if (!json.id) delete json.id;
        if (!json.guild_id) delete json.guild_id;
        return json;
    }

    constructor(json: any){        
        this.guild_id = json.guild_id;
        this.name = json.name;
        this.char_id = json.char_id;
        this.master = json.master;
        this.guild_lv = json.guild_lv;
        this.connect_member = json.connect_member;
        this.max_member = json.max_member;
        this.average_lv = json.average_lv;
        this.exp = json.exp;
        this.next_exp = json.next_exp;
        this.skill_point = json.skill_point;
        this.mes1 = json.mes1;
        this.mes2 = json.mes2;
        this.emblem_len = json.emblem_len;
        this.emblem_id = json.emblem_id;
        this.emblem_data = json.emblem_data;
        this.last_master_change = json.last_master_change;
        if (json.castles) {
            json.castles.forEach((castle: any)=>{
                this.castles.push(new GuildCastle(castle));
            });
        }
        if (json.members) {
            json.members.forEach((member: any)=>{
                this.members.push(new GuildMember(member));
            });
        }
    }
}