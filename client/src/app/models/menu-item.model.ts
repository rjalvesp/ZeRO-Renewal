import { MenuConditional } from "./menu-conditional.enum";
import { User } from "./user.model";

export class MenuItem {
    text: string;
    icon: string;
    url: string;
    conditional: MenuConditional
    user: User;
    constructor(icon, text, url, conditional){
        this.text = text;
        this.icon = icon;
        this.url = url;
        this.conditional = conditional;
    }
    get canShow() : boolean {
        switch(this.conditional) {
            case MenuConditional.default:
                return true;
            case MenuConditional.logged:
                return !!this.user && !!this.user.username;
            case MenuConditional.unlogged:
                return !this.user || !this.user.username;
        }
        return true;
    }
}