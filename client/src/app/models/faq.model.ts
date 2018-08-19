export class Faq {
    id: number;
    id_category: number; 
    question: string; 
    answer: string; 
    get json() : any {
        let json = {
            id: this.id,
            id_category: this.id_category,
            question: this.question,
            answer: this.answer
        };
        if (!json.id) delete json.id;
        return json;
    }
    constructor(json: any) {
        this.id = json.id;
        this.id_category = json.id_category;
        this.question = json.question;
        this.answer = json.answer;
    }
}