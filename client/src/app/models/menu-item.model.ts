export class MenuItem {
    text: string;
    icon: string;
    url: string;
    constructor(icon, text, url){
        this.text = text;
        this.icon = icon;
        this.url = url;
    }
}