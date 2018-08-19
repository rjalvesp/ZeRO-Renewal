export class FaqCategory {
    id: number;
    name: string; 
    get json() : any {
        let json = {
            id: this.id,
            name: this.name
        };
        if (!json.id) delete json.id;
        return json;
    }
    constructor(json: any) {
        this.id = json.id;
        this.name = json.name;
    }
}