import { JobClassCollection } from './class-collection';
import { JobClass } from './class';
export class GuildMember {
    account_id: number = 0;
    guild_id: number = 0;
    char_id: number = 0;
    class: number = 0;
    exp: number = 0;
    exp_payper: number = 0;
    gender: number = 0;
    hair: number = 0;
    lv: number = 0;
    name: string = '';
    online: number = 0;
    position: number = 0;
    
    get className () : JobClass {
        return JobClassCollection.items.find((jobClass: JobClass)=>{
            return jobClass.id === this.class;
        })
    };
    get json () : any {
        return {
            guild_id: this.guild_id,
            char_id: this.char_id,
            account_id: this.account_id,
            class: this.class,
            exp: this.exp,
            exp_payper: this.exp_payper,
            gender: this.gender,
            hair: this.hair,
            lv: this.lv,
            name: this.name,
            online: this.online,
            position: this.position,
        }
    }

    constructor(json: any){        
        this.guild_id = json.guild_id;
        this.char_id = json.char_id;
        this.account_id = json.account_id;
        this.class = json.class;
        this.exp = json.exp;
        this.exp_payper = json.exp_payper;
        this.gender = json.gender;
        this.hair = json.hair;
        this.lv = json.lv;
        this.name = json.name;
        this.online = json.online;
        this.position = json.position;
    }
}