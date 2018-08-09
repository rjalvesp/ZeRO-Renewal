export class Status {
    index: number;
    name: string;
    exp: number;
    jexp: number;
    drop: number;
    constructor(json: any) {
        this.index = json.index;
        this.name = json.name;
        this.exp = json.exp;
        this.jexp = json.jexp;
        this.drop = json.drop;
    }

    get isOn() : boolean {
        return !!this.name;
    }
}