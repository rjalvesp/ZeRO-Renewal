import { JobClass } from "./class";

export class JobClassTotal extends JobClass {
    total: number;
    constructor(jobClass: JobClass, total: number){
        super(jobClass.id, jobClass.name);
        this.total = total;
    }
}