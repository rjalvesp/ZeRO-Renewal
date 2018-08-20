import { FaqCategory } from './faq-category.model';
import { Faq } from './faq.model';
export class FaqGroup {
    name: string = '';
    faqs: Array<Faq> = [];
    constructor(faqCategory: FaqCategory, faqs: Array<Faq>){
        this.name = faqCategory.name;
        this.faqs = faqs.filter((faq: Faq)=>{
            return faq.id_category === faqCategory.id;
        })
    }
}