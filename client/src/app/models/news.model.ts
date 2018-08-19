export class News {
    id: number;
    date: string; 
    html: string; 
    get json() : any {
        let json = {
            id: this.id,
            date: this.date,
            html: this.html
        };
        if (!json.id) delete json.id;
        if (!json.date) delete json.date;
        return json;
    }
    constructor(json: any) {
        this.id = json.id;
        this.date = json.date;
        this.html = json.html;
    }
}